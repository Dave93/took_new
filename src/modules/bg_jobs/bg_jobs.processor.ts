import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { PrismaService } from '../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { order_status } from '../../@generated/order-status/order-status.model';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { SearchService } from '@modules/search/search.service';

import { PubSub } from 'graphql-subscriptions';
import { order_locations } from '../../@generated/order-locations/order-locations.model';
import dayjs from 'dayjs';

const pubSub = new PubSub();
interface OrderLocationSearchResultHit {
  _id: string;
  _source: order_locations;
}
@Processor('bg_jobs')
export class BgJobsProcessor {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cacheService: CacheControlService,
    private readonly searchService: SearchService,
  ) {}
  private readonly logger = new Logger(BgJobsProcessor.name);

  @Process('registerCourierLocation')
  async handleTranscode(job: Job) {
    const { data, user } = job.data;

    const orderStatuses: order_status[] = await this.cacheService.getOrderStatuses();

    if (user.id == '9f450b5a-79c2-4fa2-be88-be45cc9404c9') {
      console.log('locationData', { ...data, date: dayjs().format('YYYY-MM-DD HH:mm:ss') });
    }

    const userTerminals = await this.prismaService.users_terminals.findMany({
      where: {
        user_id: user.id,
      },
      select: {
        terminals: {
          select: {
            id: true,
            organization_id: true,
          },
        },
      },
    });

    // extract organization ids from user terminals
    const organizationIds = userTerminals.map((userTerminal) => userTerminal.terminals.organization_id);

    // find all orderStatuses for the organization ids
    const organizationOrderStatuses = orderStatuses.filter((orderStatus) =>
      organizationIds.includes(orderStatus.organization_id),
    );

    // find all orderStatuses that need location but not finished
    const orderStatusesThatNeedLocation = organizationOrderStatuses.filter(
      (orderStatus) => orderStatus.need_location && !orderStatus.finish,
    );
    // find all orders that are in the orderStatusesThatNeedLocation and courier_id is the user.id from elasticsearch index
    const orders = await this.searchService.getDocumentsByQuery('arryt_orders', {
      query: {
        bool: {
          must: [
            {
              terms: {
                courier_id: [user.id],
              },
            },
            {
              terms: {
                order_status_id: orderStatusesThatNeedLocation.map((orderStatus) => orderStatus.id),
              },
            },
          ],
        },
      },
    });

    // const orders = await this.prismaService.orders.findMany({
    //   where: {
    //     order_status_id: {
    //       in: orderStatusesThatNeedLocation.map((orderStatus) => orderStatus.id),
    //     },
    //     courier_id: user.id,
    //   },
    //   select: {
    //     id: true,
    //     terminal_id: true,
    //     order_status_id: true,
    //   },
    // });

    // create order locations
    // const orderLocations = await this.prismaService.order_locations.createMany({
    //   data: orders.map((order) => ({
    //     order_id: order.id,
    //     terminal_id: order.terminal_id,
    //     order_status_id: order.order_status_id,
    //     courier_id: user.id,
    //     lat: data.latitude,
    //     lon: data.longitude,
    //   })),
    // });

    orders.forEach((order) =>
      pubSub.publish('orderLocationAdded', {
        orderLocationAdded: {
          order_id: order.id,
          terminal_id: order.terminal_id,
          order_status_id: order.order_status_id,
          courier_id: user.id,
          lat: data.latitude,
          lon: data.longitude,
        },
      }),
    );

    await this.searchService.checkOrderLocationsIndex();

    const indexName = 'arryt_order_locations';
    let lastIncrement = await this.searchService.getOrderLocationLastIncrement(indexName);
    let increment = lastIncrement;
    if (orders.length > 0) {
      await this.searchService.bulkIndex(
        orders.map((order) => {
          increment++;
          return {
            order_id: order.id,
            terminal_id: order.terminal_id,
            order_status_id: order.order_status_id,
            courier_id: user.id,
            location: {
              lat: data.latitude,
              lon: data.longitude,
            },
            created_at: new Date(),
            increment: increment,
          };
        }),
      );
    }

    // find all orderStatuses that need location and finished
    const orderStatusesThatNeedLocationAndFinished = organizationOrderStatuses.filter(
      (orderStatus) => orderStatus.need_location && orderStatus.finish,
    );

    // find all orders that are in the orderStatusesThatNeedLocationAndFinished and terminal_id is in userTerminals and created_at is in last 24 hours from elasticsearch index

    const finishedOrders = await this.searchService.getDocumentsByQuery('arryt_orders', {
      query: {
        bool: {
          must: [
            {
              terms: {
                order_status_id: orderStatusesThatNeedLocationAndFinished.map((orderStatus) => orderStatus.id),
              },
            },
            {
              terms: {
                terminal_id: userTerminals.map((userTerminal) => userTerminal.terminals.id),
              },
            },
            {
              range: {
                created_at: {
                  gte: new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toISOString(),
                },
              },
            },
            {
              terms: {
                courier_id: [user.id],
              },
            },
          ],
        },
      },
    });

    if (finishedOrders.length > 0) {
      // find all order_locations and order_statuses that are in the finishedOrders from search index
      const finishedOrderLocations = (await this.searchService.search({
        index: 'arryt_order_locations',
        body: {
          query: {
            bool: {
              must: [
                {
                  terms: {
                    order_id: finishedOrders.map((order) => order.id),
                  },
                },
                {
                  terms: {
                    order_status_id: finishedOrders.map((order) => order.order_status_id),
                  },
                },
                {
                  terms: {
                    courier_id: [user.id],
                  },
                },
                {
                  range: {
                    created_at: {
                      gte: 'now-72h',
                    },
                  },
                },
              ],
            },
          },
          size: 5000,
        },
      })) as OrderLocationSearchResultHit[];

      const registerOrderLocationsOrderId = finishedOrderLocations.map(
        (orderLocation) => orderLocation._source.order_id,
      );

      // create order locations in search index
      if (finishedOrders.filter((location) => !registerOrderLocationsOrderId.includes(location.id)).length > 0) {
        lastIncrement = await this.searchService.getOrderLocationLastIncrement(indexName);
        increment = lastIncrement;
        await this.searchService.bulkIndex(
          finishedOrders
            .filter((location) => !registerOrderLocationsOrderId.includes(location.id))
            .map((order) => {
              increment++;
              return {
                order_id: order.id,
                terminal_id: order.terminal_id,
                order_status_id: order.order_status_id,
                courier_id: user.id,
                location: {
                  lat: data.latitude,
                  lon: data.longitude,
                },
                created_at: new Date(),
                increment: increment,
              };
            }),
        );
      }
    }

    // find all order_locations and order_statuses that are in the finishedOrders
    // const finishedOrderLocations = await this.prismaService.order_locations.findMany({
    //   where: {
    //     order_id: {
    //       in: finishedOrders.map((order) => order.id),
    //     },
    //     order_status_id: {
    //       in: finishedOrders.map((order) => order.order_status_id),
    //     },
    //   },
    // });
    //
    // const registerOrderLocationsOrderId = finishedOrderLocations.map((orderLocation) => orderLocation.order_id);
    //
    // // create order locations
    // const finishedOrderLocationsCreated = await this.prismaService.order_locations.createMany({
    //   data: finishedOrders
    //     .filter((location) => !registerOrderLocationsOrderId.includes(location.id))
    //     .map((order) => ({
    //       order_id: order.id,
    //       terminal_id: order.terminal_id,
    //       order_status_id: order.order_status_id,
    //       courier_id: user.id,
    //       lat: data.latitude,
    //       lon: data.longitude,
    //     })),
    // });
  }
}
