import { Injectable } from '@nestjs/common';

import { Client } from '@elastic/elasticsearch';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import { order_locations } from '../../@generated/order-locations/order-locations.model';
import { users } from '@prisma/client';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { OrderMobilePeriodStat } from '@modules/orders/entities/order.entity';
import dayjs from 'dayjs';
import {
  FindManynotificationsArgs,
  notificationsWhereInput,
} from '@modules/notifications/dto/find-many-notifications-args';
import { OrdersLocationEntity } from '@modules/orders_locations/entities/orders_location.entity';
import { SystemConfigsService } from '@modules/system_configs/system_configs.service';
import { orders } from '../../@generated/orders/orders.model';
import { FindManymissedOrdersArgs, missedOrdersWhereInput } from '@modules/orders/dto/find-many-missed0orders-args';
import { deleteNotificationArgs } from '@modules/notifications/entities/notification.entity';

@Injectable()
export class SearchService {
  elasticClient: Client = null;

  constructor(
    private configService: ConfigService,
    private readonly cacheControl: CacheControlService,
    private readonly systemConfigsService: SystemConfigsService,
  ) {
    this.elasticClient = new Client({
      node: this.configService.get('ELASTICSEARCH_HOST'),
      auth: {
        username: this.configService.get('ELASTICSEARCH_USERNAME'),
        password: this.configService.get('ELASTICSEARCH_PASSWORD'),
      },
      tls: {
        rejectUnauthorized: false,
        ca: fs.readFileSync(this.configService.get('ELASTICSEARCH_CA_FILE')),
      },
    });
  }

  // create indices
  async checkOrderLocationsIndex() {
    try {
      const exists = await this.elasticClient.indices.exists({
        index: 'arryt_order_locations',
      });

      if (!exists) {
        await this.elasticClient.indices.create({
          index: 'arryt_order_locations',
          body: {
            mappings: {
              properties: {
                order_id: {
                  type: 'keyword',
                },
                location: {
                  type: 'geo_point',
                },
                terminal_id: {
                  type: 'keyword',
                },
                courier_id: {
                  type: 'keyword',
                },
                order_status_id: {
                  type: 'keyword',
                },
                created_at: {
                  type: 'date',
                },
                increment: {
                  type: 'integer',
                },
              },
            },
          },
        });
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  async checkOrderIndex() {
    try {
      const exists = await this.elasticClient.indices.exists({
        index: 'arryt_orders',
      });

      if (!exists) {
        await this.elasticClient.indices.create({
          index: 'arryt_orders',
          body: {
            mappings: {
              properties: {
                id: {
                  type: 'keyword',
                },
                organization_id: {
                  type: 'keyword',
                },
                terminal_id: {
                  type: 'keyword',
                },
                courier_id: {
                  type: 'keyword',
                },
                order_status_id: {
                  type: 'keyword',
                },
                order_number: {
                  type: 'keyword',
                },
                created_at: {
                  type: 'date',
                },
                cancel_reason: {
                  type: 'text',
                },
                score: {
                  type: 'integer',
                },
                order_items: {
                  properties: {
                    productId: {
                      type: 'keyword',
                    },
                    quantity: {
                      type: 'integer',
                    },
                    price: {
                      type: 'float',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                order_price: {
                  type: 'integer',
                },
                customer_id: {
                  type: 'keyword',
                },
                delivery_address: {
                  type: 'text',
                },
                delivery_comment: {
                  type: 'text',
                },
                delivery_price: {
                  type: 'integer',
                },
                delivery_pricing_id: {
                  type: 'keyword',
                },
                delivery_type: {
                  type: 'keyword',
                },
                distance: {
                  type: 'float',
                },
                duration: {
                  type: 'integer',
                },
                finished_date: {
                  type: 'date',
                },
                from_location: {
                  type: 'geo_point',
                },
                payment_type: {
                  type: 'keyword',
                },
                pre_distance: {
                  type: 'float',
                },
                pre_duration: {
                  type: 'integer',
                },
                to_location: {
                  type: 'geo_point',
                },
                orders_couriers: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    phone: {
                      type: 'keyword',
                    },
                    first_name: {
                      type: 'keyword',
                    },
                    drive_type: {
                      type: 'keyword',
                    },
                    last_name: {
                      type: 'keyword',
                    },
                    car_model: {
                      type: 'keyword',
                    },
                    car_number: {
                      type: 'keyword',
                    },
                    location: {
                      type: 'geo_point',
                    },
                  },
                },
                orders_customers: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    phone: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                  },
                },
                orders_order_status: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                    cancel: {
                      type: 'boolean',
                    },
                    finish: {
                      type: 'boolean',
                    },
                    waiting: {
                      type: 'boolean',
                    },
                  },
                },
                orders_terminals: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                    active: {
                      type: 'boolean',
                    },
                    external_id: {
                      type: 'keyword',
                    },
                  },
                },
                orders_organization: {
                  properties: {
                    id: {
                      type: 'keyword',
                    },
                    name: {
                      type: 'keyword',
                    },
                    active: {
                      type: 'boolean',
                    },
                    external_id: {
                      type: 'keyword',
                    },
                  },
                },
              },
            },
          },
        });
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  // index data
  async bulkIndex(map: any[]) {
    try {
      const body = map.flatMap((doc) => [{ index: { _index: 'arryt_order_locations' } }, doc]);
      const result = await this.elasticClient.bulk({ refresh: true, body });
      if (result.errors) {
        console.log(result.errors);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async search(query: any) {
    try {
      const result = await this.elasticClient.search(query);
      return result.hits.hits;
    } catch (e) {
      console.log(e);
    }
  }

  async indexOrder(order: any) {
    try {
      await this.checkOrderIndex();
      if (order.from_lat) {
        order['from_location'] = {
          lat: order.from_lat,
          lon: order.from_lon,
        };
        delete order.from_lat;
        delete order.from_lon;
      }
      if (order.to_lat) {
        order['to_location'] = {
          lat: order.to_lat,
          lon: order.to_lon,
        };
        delete order.to_lat;
        delete order.to_lon;
      }
      if (order['orders_couriers']) {
        if (order['orders_couriers'].latitude) {
          order['orders_couriers']['location'] = {
            lat: order['orders_couriers'].latitude,
            lon: order['orders_couriers'].longitude,
          };
          delete order['orders_couriers'].latitude;
          delete order['orders_couriers'].longitude;
        }
      }
      const result = await this.elasticClient.index({
        index: 'arryt_orders',
        id: order.id,
        body: order,
      });
    } catch (e) {
      console.log(e);
    }
  }

  // finds
  async findOrderLocations(orderId: string) {
    const res = await this.elasticClient.search({
      index: 'arryt_order_locations',
      body: {
        query: {
          match: {
            order_id: orderId,
          },
        },

        size: 10000,
        sort: [
          {
            increment: {
              order: 'asc',
            },
          },
        ],
      },
    });
    // @ts-ignore
    return res.hits.hits.map((hit) => ({ id: hit._id, ...hit._source })) as OrdersLocationEntity[];
  }

  async orderMobilePeriodStat(user: users) {
    const orderStatuses = await this.cacheControl.getOrderStatuses();
    const finishedStatuses = orderStatuses.filter((status) => status.finish).map((status) => status.id);
    const canceledStatuses = orderStatuses.filter((status) => status.cancel).map((status) => status.id);

    const finishedMatch = [];
    finishedStatuses.forEach((status) => {
      finishedMatch.push({ match_phrase: { order_status_id: status } });
    });

    const canceledMatch = [];
    canceledStatuses.forEach((status) => {
      canceledMatch.push({ match_phrase: { order_status_id: status } });
    });

    const result = await this.elasticClient.msearch({
      searches: [
        // orders for today
        { index: 'arryt_orders' },
        {
          aggs: {},
          size: 0,
          fields: [
            {
              field: 'created_at',
              format: 'date_time',
            },
          ],
          script_fields: {},
          stored_fields: ['*'],
          runtime_mappings: {},
          _source: {
            excludes: [],
          },
          query: {
            bool: {
              must: [],
              filter: [
                {
                  match_phrase: {
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    created_at: {
                      gte: 'now/d',
                      lte: 'now+1d/d+4h',
                    },
                  },
                },
                {
                  bool: {
                    minimum_should_match: 1,
                    should: finishedMatch,
                  },
                },
              ],
              should: [],
              must_not: [],
            },
          },
        },

        { index: 'arryt_orders' },
        {
          aggs: {},
          size: 0,
          fields: [
            {
              field: 'created_at',
              format: 'date_time',
            },
          ],
          script_fields: {},
          stored_fields: ['*'],
          runtime_mappings: {},
          _source: {
            excludes: [],
          },
          query: {
            bool: {
              must: [],
              filter: [
                {
                  match_phrase: {
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    created_at: {
                      gte: 'now/d',
                      lte: 'now+1d/d+4h',
                    },
                  },
                },
                {
                  bool: {
                    minimum_should_match: 1,
                    should: canceledMatch,
                  },
                },
              ],
              should: [],
              must_not: [],
            },
          },
        },

        { index: 'arryt_orders' },
        {
          aggs: {
            delivery_price: {
              sum: {
                field: 'delivery_price',
              },
            },
          },
          size: 0,
          fields: [
            {
              field: 'created_at',
              format: 'date_time',
            },
          ],
          script_fields: {},
          stored_fields: ['*'],
          runtime_mappings: {},
          _source: {
            excludes: [],
          },
          query: {
            bool: {
              must: [],
              filter: [
                {
                  match_phrase: {
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    created_at: {
                      gte: 'now/d',
                      lte: 'now+1d/d+4h',
                    },
                  },
                },
                {
                  bool: {
                    minimum_should_match: 1,
                    should: finishedMatch,
                  },
                },
              ],
              should: [],
              must_not: [],
            },
          },
        },

        // orders for this yesterday
        { index: 'arryt_orders' },
        {
          aggs: {},
          size: 0,
          fields: [
            {
              field: 'created_at',
              format: 'date_time',
            },
          ],
          script_fields: {},
          stored_fields: ['*'],
          runtime_mappings: {},
          _source: {
            excludes: [],
          },
          query: {
            bool: {
              must: [],
              filter: [
                {
                  match_phrase: {
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    created_at: {
                      gte: 'now-1d/d',
                      lte: 'now-1d/d+4h',
                    },
                  },
                },
                {
                  bool: {
                    minimum_should_match: 1,
                    should: finishedMatch,
                  },
                },
              ],
              should: [],
              must_not: [],
            },
          },
        },

        { index: 'arryt_orders' },
        {
          aggs: {},
          size: 0,
          fields: [
            {
              field: 'created_at',
              format: 'date_time',
            },
          ],
          script_fields: {},
          stored_fields: ['*'],
          runtime_mappings: {},
          _source: {
            excludes: [],
          },
          query: {
            bool: {
              must: [],
              filter: [
                {
                  match_phrase: {
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    created_at: {
                      gte: 'now-1d/d',
                      lte: 'now-1d/d+4h',
                    },
                  },
                },
                {
                  bool: {
                    minimum_should_match: 1,
                    should: canceledMatch,
                  },
                },
              ],
              should: [],
              must_not: [],
            },
          },
        },

        { index: 'arryt_orders' },
        {
          aggs: {
            delivery_price: {
              sum: {
                field: 'delivery_price',
              },
            },
          },
          size: 0,
          fields: [
            {
              field: 'created_at',
              format: 'date_time',
            },
          ],
          script_fields: {},
          stored_fields: ['*'],
          runtime_mappings: {},
          _source: {
            excludes: [],
          },
          query: {
            bool: {
              must: [],
              filter: [
                {
                  match_phrase: {
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    created_at: {
                      gte: 'now-1d/d',
                      lte: 'now-1d/d+4h',
                    },
                  },
                },
                {
                  bool: {
                    minimum_should_match: 1,
                    should: finishedMatch,
                  },
                },
              ],
              should: [],
              must_not: [],
            },
          },
        },

        // orders for this week
        { index: 'arryt_orders' },
        {
          aggs: {},
          size: 0,
          fields: [
            {
              field: 'created_at',
              format: 'date_time',
            },
          ],
          script_fields: {},
          stored_fields: ['*'],
          runtime_mappings: {},
          _source: {
            excludes: [],
          },
          query: {
            bool: {
              must: [],
              filter: [
                {
                  match_phrase: {
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    created_at: {
                      gte: 'now/w',
                      lte: 'now/w+1d+4h',
                    },
                  },
                },
                {
                  bool: {
                    minimum_should_match: 1,
                    should: finishedMatch,
                  },
                },
              ],
              should: [],
              must_not: [],
            },
          },
        },

        { index: 'arryt_orders' },
        {
          aggs: {},
          size: 0,
          fields: [
            {
              field: 'created_at',
              format: 'date_time',
            },
          ],
          script_fields: {},
          stored_fields: ['*'],
          runtime_mappings: {},
          _source: {
            excludes: [],
          },
          query: {
            bool: {
              must: [],
              filter: [
                {
                  match_phrase: {
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    created_at: {
                      gte: 'now/w',
                      lte: 'now/w+1d+4h',
                    },
                  },
                },
                {
                  bool: {
                    minimum_should_match: 1,
                    should: canceledMatch,
                  },
                },
              ],
              should: [],
              must_not: [],
            },
          },
        },

        { index: 'arryt_orders' },
        {
          aggs: {
            delivery_price: {
              sum: {
                field: 'delivery_price',
              },
            },
          },
          size: 0,
          fields: [
            {
              field: 'created_at',
              format: 'date_time',
            },
          ],
          script_fields: {},
          stored_fields: ['*'],
          runtime_mappings: {},
          _source: {
            excludes: [],
          },
          query: {
            bool: {
              must: [],
              filter: [
                {
                  match_phrase: {
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    created_at: {
                      gte: 'now/w',
                      lte: 'now/w+1d+4h',
                    },
                  },
                },
                {
                  bool: {
                    minimum_should_match: 1,
                    should: finishedMatch,
                  },
                },
              ],
              should: [],
              must_not: [],
            },
          },
        },

        // orders for this month
        { index: 'arryt_orders' },
        {
          aggs: {},
          size: 0,
          fields: [
            {
              field: 'created_at',
              format: 'date_time',
            },
          ],
          script_fields: {},
          stored_fields: ['*'],
          runtime_mappings: {},
          _source: {
            excludes: [],
          },
          query: {
            bool: {
              must: [],
              filter: [
                {
                  match_phrase: {
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    created_at: {
                      gte: 'now/M-5h',
                      lte: 'now/M+1d+4h',
                    },
                  },
                },
                {
                  bool: {
                    minimum_should_match: 1,
                    should: finishedMatch,
                  },
                },
              ],
              should: [],
              must_not: [],
            },
          },
        },

        { index: 'arryt_orders' },
        {
          aggs: {},
          size: 0,
          fields: [
            {
              field: 'created_at',
              format: 'date_time',
            },
          ],
          script_fields: {},
          stored_fields: ['*'],
          runtime_mappings: {},
          _source: {
            excludes: [],
          },
          query: {
            bool: {
              must: [],
              filter: [
                {
                  match_phrase: {
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    created_at: {
                      gte: 'now/M-5h',
                      lte: 'now/M+1d+4h',
                    },
                  },
                },
                {
                  bool: {
                    minimum_should_match: 1,
                    should: canceledMatch,
                  },
                },
              ],
              should: [],
              must_not: [],
            },
          },
        },

        { index: 'arryt_orders' },
        {
          aggs: {
            delivery_price: {
              sum: {
                field: 'delivery_price',
              },
            },
          },
          size: 0,
          fields: [
            {
              field: 'created_at',
              format: 'date_time',
            },
          ],
          script_fields: {},
          stored_fields: ['*'],
          runtime_mappings: {},
          _source: {
            excludes: [],
          },
          query: {
            bool: {
              must: [],
              filter: [
                {
                  match_phrase: {
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    created_at: {
                      gte: 'now/M-5h',
                      lte: 'now/M+1d+4h',
                    },
                  },
                },
                {
                  bool: {
                    minimum_should_match: 1,
                    should: finishedMatch,
                  },
                },
              ],
              should: [],
              must_not: [],
            },
          },
        },
      ],
    });
    // console.log(result);

    const { responses } = result;

    const res: OrderMobilePeriodStat[] = [];
    const data: OrderMobilePeriodStat = {
      failedCount: 0,
      successCount: 0,
      totalPrice: 0,
      labelCode: '',
    };

    let index = 0;
    responses.map((response, i) => {
      if (index == 0) {
        // @ts-ignore
        data.successCount = response.hits.total.value;
      }
      if (index == 1) {
        // @ts-ignore
        data.failedCount = response.hits.total.value;
      }
      if (index == 2) {
        // @ts-ignore
        data.totalPrice = response.aggregations.delivery_price.value;
        index = 0;
        switch (res.length) {
          case 0:
            data.labelCode = 'today';
            break;
          case 1:
            data.labelCode = 'yesterday';
            break;
          case 2:
            data.labelCode = 'week';
            break;
          case 3:
            data.labelCode = 'month';
            break;
        }
        res.push({ ...data });
      } else {
        index++;
      }
    });
    // try {
    //   const body = map.flatMap((doc) => [{ index: { _index: 'arryt_order_locations' } }, doc]);
    //   const result = await this.elasticClient.bulk({ refresh: true, body });
    //   if (result.errors) {
    //     console.log(JSON.stringify(result.items));
    //   }
    // } catch (e) {
    //   console.log(e);
    // }

    return res;
  }

  async getCourierScore(id: string) {
    const res = await this.elasticClient.search({
      index: 'arryt_orders',
      body: {
        aggs: {
          '0': {
            avg: {
              field: 'score',
            },
          },
        },
        size: 0,
        fields: [
          {
            field: 'created_at',
            format: 'date_time',
          },
          {
            field: 'finished_date',
            format: 'date_time',
          },
        ],
        script_fields: {},
        stored_fields: ['*'],
        runtime_mappings: {},
        _source: {
          excludes: [],
        },
        query: {
          bool: {
            must: [],
            filter: [
              {
                match_phrase: {
                  courier_id: id,
                },
              },
              {
                range: {
                  created_at: {
                    gte: 'now/M',
                    lte: 'now/M',
                  },
                },
              },
            ],
            should: [],
            must_not: [],
          },
        },
      },
    });

    // @ts-ignore
    return res.aggregations?.['0']?.value ?? 0;
  }

  async getOrdersByPeriod(startData: Date, endData: Date, courierId?: string, terminalId?: string) {
    // const res = await this.elasticClient.search({
    //   index: 'arryt_orders',
    //   body: {
    //     aggs: {},
    //     size: 0,
    //     fields: [
    //       {
    //         field: 'created_at',
    //       },
    //     ],
    //     script_fields: {},
    //     stored_fields: ['*'],
    //     runtime_mappings: {},
    //     _source: {
    //       excludes: [],
    //     },
    //     query: {
    //       bool: {
    //         must: [],
    //         filter: [
    //           {
    //             range: {
    //               created_at: {
    //                 gte: startData,
    //                 lte: endData,
    //               },
    //             },
    //           },
    //           // {
    //           //   match_phrase: {
    //           //     courier_id: courierId,
    //           //   }
    //           // }
    //         ],
    //       },
    //     },
    //   },
    // });
  }

  async getCouriersEfficiency(startDate: Date, endDate: Date, user: users, courierId: string[], terminalId: string[]) {
    const query = {
      index: 'arryt_orders',
      body: {
        size: 0,
        query: {
          range: {
            created_at: {
              gte: startDate,
              lte: endDate,
            },
          },
        },
        aggs: {
          by_courier: {
            terms: {
              field: 'courier_id',
            },
            aggs: {
              by_interval: {
                filters: {
                  filters: {
                    '10_to_15': {
                      range: {
                        created_at: {
                          gte: dayjs(startDate.toISOString().split('T')[0]).hour(10).minute(0).second(0).toISOString(),
                          lte: dayjs(startDate.toISOString().split('T')[0]).hour(15).minute(0).second(0).toISOString(),
                        },
                      },
                    },
                    '15_to_22': {
                      range: {
                        created_at: {
                          gte: dayjs(startDate.toISOString().split('T')[0]).hour(15).minute(0).second(0).toISOString(),
                          lte: dayjs(startDate.toISOString().split('T')[0]).hour(22).minute(0).second(0).toISOString(),
                        },
                      },
                    },
                    '22_to_3': {
                      bool: {
                        should: [
                          {
                            range: {
                              created_at: {
                                gte: dayjs(startDate.toISOString().split('T')[0])
                                  .hour(22)
                                  .minute(0)
                                  .second(0)
                                  .toISOString(),
                                lte: dayjs(endDate.toISOString().split('T')[0])
                                  .hour(15)
                                  .minute(0)
                                  .second(0)
                                  .toISOString(),
                              },
                            },
                          },
                          {
                            range: {
                              created_at: {
                                gte: dayjs(startDate.toISOString().split('T')[0])
                                  .hour(0)
                                  .minute(0)
                                  .second(0)
                                  .toISOString(),
                                lte: dayjs(startDate.toISOString().split('T')[0])
                                  .hour(3)
                                  .minute(0)
                                  .second(0)
                                  .toISOString(),
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                },
                aggs: {
                  total_orders: {
                    sum: {
                      field: 'order_count',
                    },
                  },
                },
              },
            },
          },
        },
      },
    };
    // console.log('efficiency query', JSON.stringify(query));
    const res = await this.elasticClient.search(query);
    // console.log(JSON.stringify(res));
    return res;
  }

  async ensureIndexExists(indexName: string, mapping: any) {
    const indexExists = await this.elasticClient.indices.exists({ index: indexName });
    if (!indexExists) {
      await this.elasticClient.indices.create({
        index: indexName,
        body: {
          mappings: mapping,
        },
      });
    }
  }

  async createNotification(notification: any) {
    await this.ensureIndexExists('arryt_notifications', {
      properties: {
        created_at: { type: 'date' },
        body: {
          type: 'text',
        },
        title: {
          type: 'text',
        },
        send_at: {
          type: 'date',
        },
        status: {
          type: 'keyword',
        },
        read_user_ids: {
          type: 'keyword',
        },
        receiver_user_ids: {
          type: 'keyword',
        },
        role: {
          type: 'keyword',
        },
        sent_user_ids: {
          type: 'keyword',
        },
        public: {
          type: 'boolean',
        },
      },
    });
    const res = await this.elasticClient.index({
      index: 'arryt_notifications',
      body: notification,
    });
    // console.log(JSON.stringify(res));

    const document = await this.elasticClient.get({
      index: 'arryt_notifications',
      id: res._id,
    });

    // console.log(JSON.stringify(document));

    return {
      id: document._id,
      /** @ts-ignore */
      ...document._source,
    };
  }

  async getOrdersByIds(ids: string[]) {
    const res = await this.elasticClient.search({
      index: 'arryt_orders',
      body: {
        size: 200,
        query: {
          terms: {
            _id: ids,
          },
        },
      },
    });
    // @ts-ignore
    return res.hits.hits.map((hit) => ({ id: hit._id, ...hit._source }));
  }

  async getAllNotifications(params: FindManynotificationsArgs) {
    const query = {
      bool: {
        must: [],
        filter: [],
        should: [],
        must_not: [],
      },
    };

    // transform params.where from prisma to elastic
    if (params.where) {
      if (params.where.created_at) {
        if (params.where.created_at.lte) {
          query.bool.filter.push({
            range: {
              created_at: {
                lte: params.where.created_at.lte,
              },
            },
          });
        }
        if (params.where.created_at.lte) {
          query.bool.filter.push({
            range: {
              created_at: {
                lte: params.where.created_at.lte,
              },
            },
          });
        }
      }

      if (params.where.status && params.where.status.equals) {
        query.bool.filter.push({
          match_phrase: {
            status: params.where.status.equals,
          },
        });
      }

      if (params.where.role && params.where.role.equals) {
        query.bool.filter.push({
          match_phrase: {
            role: params.where.role.equals,
          },
        });
      }
      if (params.where.public && params.where.public.equals) {
        query.bool.filter.push({
          term: {
            public: params.where.public.equals,
          },
        });
      }
    }

    const res = await this.elasticClient.search({
      index: 'arryt_notifications',
      body: {
        size: params.take,
        from: params.skip,
        query,
      },
    });
    // @ts-ignore
    return res.hits.hits.map((hit) => ({ id: hit._id, ...hit._source }));
  }

  async getAllMissedOrders(params: FindManymissedOrdersArgs) {
    const query = {
      bool: {
        must: [],
        filter: [],
        should: [],
        must_not: [],
      },
    };

    // transform params.where from prisma to elastic
    if (params.where) {
      if (params.where.created_at) {
        if (params.where.created_at.lte && params.where.created_at.gte) {
          query.bool.filter.push({
            range: {
              created_at: {
                lte: params.where.created_at.lte,
                gte: params.where.created_at.gte,
              },
            },
          });
        }
        // if (params.where.created_at.lte) {
        //   query.bool.filter.push({
        //     range: {
        //       created_at: {
        //         lte: params.where.created_at.lte,
        //       },
        //     },
        //   });
        // }
      }

      if (params.where.terminal_id && params.where.terminal_id.equals) {
        query.bool.filter.push({
          match_phrase: {
            terminal_id: params.where.terminal_id.equals,
          },
        });
      }

      if (params.where.terminal_id && params.where.terminal_id.in) {
        query.bool.filter.push({
          terms: {
            terminal_id: params.where.terminal_id.in,
          },
        });
      }
    }

    const res = await this.elasticClient.search({
      index: 'arryt_missed_orders',
      body: {
        size: params.take,
        from: params.skip,
        query: {
          function_score: {
            query,
            functions: [
              {
                filter: {
                  term: {
                    status: 'new',
                  },
                },
                weight: 2,
              },
            ],
            score_mode: 'multiply',
          },
        },
        sort: [
          {
            _score: {
              order: 'desc',
            },
          },
        ],
      },
    });

    // @ts-ignore
    return res.hits.hits.map((hit) => ({ id: hit._id, ...hit._source }));
  }
  async notificationsConnection(where: notificationsWhereInput, user: users) {
    const query = {
      bool: {
        must: [],
        filter: [],
        should: [],
        must_not: [],
      },
    };

    // transform params.where from prisma to elastic
    if (where) {
      if (where.created_at) {
        if (where.created_at.lte) {
          query.bool.filter.push({
            range: {
              created_at: {
                lte: where.created_at.lte,
              },
            },
          });
        }
        if (where.created_at.lte) {
          query.bool.filter.push({
            range: {
              created_at: {
                lte: where.created_at.lte,
              },
            },
          });
        }
      }

      if (where.status && where.status.equals) {
        query.bool.filter.push({
          match_phrase: {
            status: where.status.equals,
          },
        });
      }

      if (where.role && where.role.equals) {
        query.bool.filter.push({
          match_phrase: {
            role: where.role.equals,
          },
        });
      }

      if (where.public && where.public.equals) {
        query.bool.filter.push({
          term: {
            public: where.public.equals,
          },
        });
      }
    }

    // get all notifications count

    const countQuery = {
      index: 'arryt_notifications',
      body: {
        query,
      },
    };
    const countRes = await this.elasticClient.count(countQuery);
    return {
      _count: {
        id: countRes.count,
      },
    };
  }
  async missedOrdersConnection(where: missedOrdersWhereInput, user: users) {
    const query = {
      bool: {
        must: [],
        filter: [],
        should: [],
        must_not: [],
      },
    };

    // transform params.where from prisma to elastic
    if (where) {
      if (where.created_at) {
        if (where.created_at.lte && where.created_at.gte) {
          query.bool.filter.push({
            range: {
              created_at: {
                lte: where.created_at.lte,
                gte: where.created_at.gte,
              },
            },
          });
        }
      }

      if (where.terminal_id && where.terminal_id.equals) {
        query.bool.filter.push({
          match_phrase: {
            terminal_id: where.terminal_id.equals,
          },
        });
      }

      if (where.terminal_id && where.terminal_id.in) {
        query.bool.filter.push({
          terms: {
            terminal_id: where.terminal_id.in,
          },
        });
      }
    }

    // get all notifications count

    const countQuery = {
      index: 'arryt_missed_orders',
      body: {
        query,
      },
    };
    const countRes = await this.elasticClient.count(countQuery);
    return {
      _count: {
        id: countRes.count,
      },
    };
  }

  async searchOrgOrders(orgId: string, terminalIds: string[], orderStatusIds: string[]) {
    const searchParams = {
      index: 'arryt_orders',
      body: {
        query: {
          bool: {
            must: [
              { match: { organization_id: orgId } },
              {
                terms: {
                  terminal_id: terminalIds,
                },
              },
              { terms: { order_status_id: orderStatusIds } },
              {
                range: {
                  created_at: {
                    gte: 'now-14d/d',
                    lt: 'now+2d/d',
                  },
                },
              },
            ],
            must_not: [
              {
                exists: {
                  field: 'courier_id',
                },
              },
            ],
          },
        },
        sort: [{ created_at: 'asc' }],
        from: 0,
        size: 200,
      },
    };

    const result = await this.elasticClient.search(searchParams);
    return result.hits.hits.map((item) => item._source);
  }

  async searchNewOrdersForLastHour() {
    const minutes = await this.systemConfigsService.systemConfigByKey('late_order_time');
    const terminals = await this.cacheControl.getTerminals();
    const activeTerminals = terminals.filter((t) => t.active);
    const terminalIds = activeTerminals.map((t) => t.id);
    const searchParams = {
      index: 'arryt_orders',
      body: {
        query: {
          bool: {
            must: [
              {
                range: {
                  created_at: {
                    gte: 'now-2h/h',
                    lt: `now-${+minutes.value}m/m`,
                  },
                },
              },
              {
                terms: {
                  terminal_id: terminalIds,
                },
              },
            ],
            must_not: [
              {
                exists: {
                  field: 'courier_id',
                },
              },
            ],
          },
        },
        sort: [{ created_at: 'asc' }],
        from: 0,
        size: 200,
      },
    };

    const result = await this.elasticClient.search(searchParams);

    return result.hits.hits.map((item) => ({
      id: item._id,
      // @ts-ignore
      ...item._source,
    }));
  }

  async logMissedOrders(orders: orders[], system_minutes_config: number) {
    const promiseOrders = orders.map(async (order) => {
      // Check if document exists
      const exists = await this.elasticClient.exists({
        index: 'arryt_missed_orders',
        id: order.id,
      });

      if (exists) {
      } else {
        // Create document
        const res = await this.elasticClient.create({
          index: 'arryt_missed_orders',
          id: order.id,
          body: {
            organization_id: order.organization_id,
            terminal_id: order.terminal_id,
            order_id: order.id,
            order_number: order.order_number,
            system_minutes_config,
            created_at: new Date(),
            order_created_at: order.created_at,
            status: 'new',
            payment_type: order.payment_type,
          },
        });
      }
    });

    await Promise.all(promiseOrders);

    // const body = orders.reduce((acc, order) => {
    //   const doc = {
    //     index: {
    //       _index: 'arryt_missed_orders',
    //       _id: order.id,
    //     },
    //   };
    //   acc.push(doc);
    //   acc.push({
    //     organization_id: order.organization_id,
    //     terminal_id: order.terminal_id,
    //     order_id: order.id,
    //     order_number: order.order_number,
    //     system_minutes_config,
    //     created_at: new Date(),
    //     order_created_at: order.created_at,
    //     status: 'new',
    //     payment_type: order.payment_type,
    //   });
    //   return acc;
    // }, []);
    //
    // const result = await this.elasticClient.bulk({ body });
    return true;
  }

  async updateMissedOrder(id: string, status: string, user: users) {
    const body = {
      doc: {
        status,
        updated_at: new Date(),
        updated_by: {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
        },
      },
    };
    const result = await this.elasticClient.update({
      index: 'arryt_missed_orders',
      id,
      body,
    });
    return result;
  }

  async myNotifications(user: users) {
    /**
     * Elastic index mapping
     * {
     *   "mappings": {
     *     "properties": {
     *       "body": {
     *         "type": "text"
     *       },
     *       "created_at": {
     *         "type": "date"
     *       },
     *       "read_user_ids": {
     *         "type": "keyword"
     *       },
     *       "receiver_user_ids": {
     *         "type": "keyword"
     *       },
     *       "role": {
     *         "type": "keyword"
     *       },
     *       "send_at": {
     *         "type": "date"
     *       },
     *       "sent_user_ids": {
     *         "type": "keyword"
     *       },
     *       "status": {
     *         "type": "keyword"
     *       },
     *       "title": {
     *         "type": "text"
     *       }
     *     }
     *   }
     * }
     *
     * receiver_user_ids is array of user ids
     * I want to get all notifications where user id is in receiver_user_ids and send_at is lower than now
     */
    const searchParams = {
      index: 'arryt_notifications',
      body: {
        query: {
          bool: {
            must: [
              {
                terms: {
                  receiver_user_ids: [user.id],
                },
              },
              {
                range: {
                  send_at: {
                    lte: 'now',
                  },
                },
              },
            ],
          },
        },
        sort: [{ send_at: 'desc' }],
      },
    };

    const result = await this.elasticClient.search(searchParams);
    return result.hits.hits.map((item) => ({
      id: item._id,
      // @ts-ignore
      ...item._source,
      // @ts-ignore
      is_read: item._source.read_user_ids ? item._source.read_user_ids.includes(user.id) : false,
    }));
  }

  myUnreadNotifications(user: users) {
    /**
     * Elastic index mapping
     * {
     *   "mappings": {
     *     "properties": {
     *       "body": {
     *         "type": "text"
     *       },
     *       "created_at": {
     *         "type": "date"
     *       },
     *       "read_user_ids": {
     *         "type": "keyword"
     *       },
     *       "receiver_user_ids": {
     *         "type": "keyword"
     *       },
     *       "role": {
     *         "type": "keyword"
     *       },
     *       "send_at": {
     *         "type": "date"
     *       },
     *       "sent_user_ids": {
     *         "type": "keyword"
     *       },
     *       "status": {
     *         "type": "keyword"
     *       },
     *       "title": {
     *         "type": "text"
     *       }
     *     }
     *   }
     * }
     *
     * receiver_user_ids is array of user ids
     * read_user_ids is array of user ids
     * I want to get count of notifications where user id is in receiver_user_ids and send_at is lower than now and user id is not in read_user_ids
     */
    const searchParams = {
      index: 'arryt_notifications',
      body: {
        query: {
          bool: {
            must: [
              {
                terms: {
                  receiver_user_ids: [user.id],
                },
              },
              {
                range: {
                  send_at: {
                    lte: 'now',
                  },
                },
              },
              {
                bool: {
                  must_not: {
                    terms: {
                      read_user_ids: [user.id],
                    },
                  },
                },
              },
            ],
          },
        },
      },
    };
    return this.elasticClient.count(searchParams);
  }

  async markAsRead(id: string, user: users) {
    /**
     * Elastic index mapping
     * {
     *   "mappings": {
     *     "properties": {
     *       "body": {
     *         "type": "text"
     *       },
     *       "created_at": {
     *         "type": "date"
     *       },
     *       "read_user_ids": {
     *         "type": "keyword"
     *       },
     *       "receiver_user_ids": {
     *         "type": "keyword"
     *       },
     *       "role": {
     *         "type": "keyword"
     *       },
     *       "send_at": {
     *         "type": "date"
     *       },
     *       "sent_user_ids": {
     *         "type": "keyword"
     *       },
     *       "status": {
     *         "type": "keyword"
     *       },
     *       "title": {
     *         "type": "text"
     *       }
     *     }
     *   }
     * }
     *
     * I want to add user id to read_user_ids array
     */
    const body = {
      script: {
        source:
          'if (ctx._source.read_user_ids == null) { ctx._source.read_user_ids = [params.user_id] } else { ctx._source.read_user_ids.add(params.user_id) }',
        lang: 'painless',
        params: {
          user_id: user.id,
        },
      },
    };
    return this.elasticClient.update({
      index: 'arryt_notifications',
      id,
      body,
    });
  }

  async deleteNotification(deleteInput: deleteNotificationArgs) {
    /**
     * find notification by id
     */
    const searchParams = {
      index: 'arryt_notifications',
      body: {
        query: {
          bool: {
            must: [
              {
                term: {
                  _id: deleteInput.input.where.id,
                },
              },
            ],
          },
        },
      },
    };

    const res = await this.elasticClient.search(searchParams);
    await this.elasticClient.delete({
      index: 'arryt_notifications',
      id: deleteInput.input.where.id,
    });
    return {
      id: res.hits.hits[0]._id,
      // @ts-ignore
      ...res.hits.hits[0]._source,
    };
  }

  async getMyLastOrder(userId: string) {
    const orderStatuses = await this.cacheControl.getOrderStatuses();
    const organizationsOrderStatuses = orderStatuses.filter(
      (orderStatus) => !orderStatus.finish && !orderStatus.cancel,
    );
    // search orders from elasticsearch by user id and order status order by created_at desc
    const searchParams = {
      index: 'arryt_orders',
      body: {
        query: {
          bool: {
            must: [
              {
                term: {
                  courier_id: userId,
                },
              },
              {
                terms: {
                  order_status_id: organizationsOrderStatuses.map((orderStatus) => orderStatus.id),
                },
              },
              {
                range: {
                  created_at: {
                    lte: 'now',
                    gte: 'now-1d/d',
                  },
                },
              },
            ],
          },
        },
        sort: [{ created_at: 'desc' }],
        size: 1,
      },
    };

    const result = await this.elasticClient.search(searchParams);
    return result.hits.hits.map((item) => ({
      id: item._id,
      // @ts-ignore
      ...item._source,
    }));
  }

  async indexYandexDeliveryOrder(id: string, yandexResponse: any = {}, pricingData: any = {}, user: users) {
    /**
     * Elastic index mapping
     * {
     *  "mappings": {
     *  "properties": {
     *  "created_at": {
     *  "type": "date"
     *  },
     *  "order_id": {
     *  "type": "keyword"
     *  },
     *  "order_data": {
     *      "type": "object",
     *      "dynamic": true
     *  }
     *  }
     *  }
     *  }
     */

    /**
     * first try to find order by id in elasticsearch index arryt_yandex_delivery_orders and if it exists update it
     */

    const searchParams = {
      index: 'arryt_yandex_delivery_orders',
      body: {
        query: {
          bool: {
            must: [
              {
                term: {
                  order_id: id,
                },
              },
            ],
          },
        },
      },
    };
    const result = await this.elasticClient.search(searchParams);
    if (result.hits.hits.length > 0) {
      if (yandexResponse && Object.keys(yandexResponse).length > 0) {
        const body = {
          script: {
            source: 'ctx._source.order_data = params.order_data',
            lang: 'painless',
            params: {
              order_data: yandexResponse,
            },
          },
        };
        return this.elasticClient.update({
          index: 'arryt_yandex_delivery_orders',
          id: result.hits.hits[0]._id,
          body,
        });
      } else if (pricingData && Object.keys(pricingData).length > 0) {
        const body = {
          script: {
            source: 'ctx._source.pricing_data = params.pricing_data',
            lang: 'painless',
            params: {
              pricing_data: pricingData,
            },
          },
        };
        return this.elasticClient.update({
          index: 'arryt_yandex_delivery_orders',
          id: result.hits.hits[0]._id,
          body,
        });
      }
    } else {
      /**
       * if order not found in elasticsearch index arryt_yandex_delivery_orders then create it
       */

      if (yandexResponse && Object.keys(yandexResponse).length > 0) {
        const body = {
          created_at: new Date(),
          order_id: id,
          order_data: yandexResponse,
          pricing_data: {},
          user_id: user.id,
        };
        return this.elasticClient.index({
          index: 'arryt_yandex_delivery_orders',
          id,
          body,
        });
      } else if (pricingData && Object.keys(pricingData).length > 0) {
        const body = {
          created_at: new Date(),
          order_id: id,
          pricing_data: pricingData,
          order_data: {},
          user_id: user.id,
        };
        return this.elasticClient.index({
          index: 'arryt_yandex_delivery_orders',
          id,
          body,
        });
      }
    }
  }

  async deleteYandexDeliveryOrder(id: string) {
    /**
     * delete order from elasticsearch index arryt_yandex_delivery_orders where order_id = id
     */
    const searchParams = {
      index: 'arryt_yandex_delivery_orders',
      body: {
        query: {
          bool: {
            must: [
              {
                term: {
                  order_id: id,
                },
              },
            ],
          },
        },
      },
    };
    const result = await this.elasticClient.search(searchParams);
    if (result.hits.hits.length > 0) {
      return this.elasticClient.delete({
        index: 'arryt_yandex_delivery_orders',
        id: result.hits.hits[0]._id,
      });
    } else {
      return null;
    }
  }

  async getYandexDeliveryData(orderIds: string[]) {
    const res = await this.elasticClient.search({
      index: 'arryt_yandex_delivery_orders',
      body: {
        size: 200,
        query: {
          terms: {
            order_id: orderIds,
          },
        },
      },
    });
    // @ts-ignore
    return res.hits.hits.map((hit) => ({ id: hit._id, ...hit._source }));
  }

  async getYandexDeliveryOrders(yesterday: Date, today: Date) {
    const res = await this.elasticClient.search({
      index: 'arryt_yandex_delivery_orders',
      body: {
        size: 5000,
        query: {
          range: {
            created_at: {
              gte: yesterday.toISOString(),
              lte: today.toISOString(),
            },
          },
        },
      },
    });
    // @ts-ignore
    return res.hits.hits.map((hit) => ({ id: hit._id, ...hit._source }));
  }

  async updateYandexDeliveryOrders(
    yandexOrdersForUpdate: {
      order_id: string;
      order_data: any;
    }[],
  ) {
    /**
     * update orders in elasticsearch index arryt_yandex_delivery_orders using painless script
     */

    if (!yandexOrdersForUpdate || yandexOrdersForUpdate.length === 0) {
      return;
    }

    const body = yandexOrdersForUpdate.flatMap((doc) => [
      { update: { _id: doc.order_id, _index: 'arryt_yandex_delivery_orders' } },
      {
        script: {
          source: 'ctx._source.order_data = params.order_data',
          lang: 'painless',
          params: {
            order_data: doc.order_data,
          },
        },
      },
    ]);
    return this.elasticClient.bulk({ refresh: true, body });
  }

  async getSentReportByCodeAndDate(courierWithdraws1: string, startDate: string, endDate: string) {
    /**
     * Elastic index mapping
     *  {
     *         created_at: {
     *           type: 'date',
     *         },
     *         report_code: {
     *           type: 'keyword',
     *         },
     *       }
     */

    const res = await this.elasticClient.search({
      index: 'arryt_sent_reports',
      body: {
        size: 1,
        query: {
          bool: {
            must: [
              {
                term: {
                  report_code: courierWithdraws1,
                },
              },
              {
                range: {
                  created_at: {
                    gte: startDate,
                    lte: endDate,
                  },
                },
              },
            ],
          },
        },
      },
    });
    // @ts-ignore
    return res.hits.hits.map((hit) => ({ id: hit._id, ...hit._source }));
  }

  async saveSentReport(param: { created_at: Date; report_code: string }) {
    const { created_at, report_code } = param;
    const body = {
      created_at,
      report_code,
    };
    return this.elasticClient.index({
      index: 'arryt_sent_reports',
      body,
    });
  }

  async getAllDocuments(indexName: string) {
    const res = await this.elasticClient.search({
      index: indexName,
      body: {
        size: 10000,
      },
    });
    // @ts-ignore
    return res.hits.hits.map((hit) => ({ id: hit._id, ...hit._source }));
  }

  async getDocumentsByQuery(indexName: string, param2: any) {
    const res = await this.elasticClient.search({
      index: indexName,
      body: {
        size: 10000,
        ...param2,
      },
    });
    // @ts-ignore
    return res.hits.hits.map((hit) => ({ id: hit._id, ...hit._source }));
  }

  async getOrderLocationLastIncrement(indexName: string) {
    /**
     * Elastic search index mapping
     * {
     *   "mappings": {
     *     "properties": {
     *       "courier_id": {
     *         "type": "keyword"
     *       },
     *       "created_at": {
     *         "type": "date"
     *       },
     *       "increment": {
     *         "type": "integer"
     *       },
     *       "location": {
     *         "type": "geo_point"
     *       },
     *       "order_id": {
     *         "type": "keyword"
     *       },
     *       "order_status_id": {
     *         "type": "keyword"
     *       },
     *       "terminal_id": {
     *         "type": "keyword"
     *       }
     *     }
     *   }
     *
     *   1. Get last increment
     *   2. If document exists, return increment field value or 0
     */

    const res = await this.elasticClient.search({
      index: indexName,
      body: {
        size: 1,
        query: {
          match_all: {},
        },
        sort: [
          {
            increment: {
              order: 'desc',
            },
          },
        ],
      },
    });

    if (res.hits.hits.length > 0) {
      // @ts-ignore
      return res.hits.hits[0]._source.increment;
    } else {
      return 0;
    }
  }

  async bulkUpdate(bulkUpdateBody: any[]) {
    return this.elasticClient.bulk({
      refresh: true,
      body: bulkUpdateBody,
    });
  }

  async notificationStatistic(id: string, user: users) {
    /**
     * 1. Get notification by id
     * 2. Get all user ids from fields receiver_user_id, read_user_ids and sent_user_ids
     * 3. Remove duplicates
     * 4. Get all users by ids
     * 5. If user id is in read_user_ids, set field deliver_status to 'read', if user id is in sent_user_ids, set field deliver_status to 'sent', if user id is in receiver_user_id, set field deliver_status to 'not_sent', else set field deliver_status to 'not_received'
     */

    const notification = await this.elasticClient.get({
      index: 'arryt_notifications',
      id,
    });

    return notification;
  }

  async getLastOrderLocationByOrderId(orderId: string) {
    /**
     * 1. Get last order location by order id
     */

    const res = await this.elasticClient.search({
      index: 'arryt_order_locations',
      body: {
        size: 1,
        query: {
          match: {
            order_id: orderId,
          },
        },
        sort: [
          {
            increment: {
              order: 'desc',
            },
          },
        ],
      },
    });

    if (res.hits.hits.length > 0) {
      // @ts-ignore
      return res.hits.hits[0]._source;
    } else {
      return null;
    }
  }
}
