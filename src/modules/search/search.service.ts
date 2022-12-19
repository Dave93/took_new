import { Injectable } from '@nestjs/common';

import { Client } from '@elastic/elasticsearch';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import { order_locations } from '../../@generated/order-locations/order-locations.model';
import { users } from '@prisma/client';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { OrderMobilePeriodStat } from '@modules/orders/entities/order.entity';
@Injectable()
export class SearchService {
  elasticClient: Client = null;

  constructor(private configService: ConfigService, private readonly cacheControl: CacheControlService) {
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
        console.log(JSON.stringify(result.items));
      }
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
      if (result.result) {
        console.log(result.result);
      }
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
      },
    });
    // @ts-ignore
    return res.hits.hits.map((hit) => ({ id: hit._id, ...hit._source })) as order_locations[];
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
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    finished_date: {
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
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    finished_date: {
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
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    finished_date: {
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
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    finished_date: {
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
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    finished_date: {
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
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    finished_date: {
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
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    finished_date: {
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
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    finished_date: {
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
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    finished_date: {
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
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    finished_date: {
                      gte: 'now/M',
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
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    finished_date: {
                      gte: 'now/M',
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
                    courier_id: user.id,
                  },
                },
                {
                  range: {
                    finished_date: {
                      gte: 'now/M',
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
    console.log('responses', JSON.stringify(responses));
    responses.map((response, i) => {
      if (index == 0) {
        // @ts-ignore
        data.successCount = response.hits.total.value;
        console.log('data.successCount', data.successCount);
      }
      if (index == 1) {
        // @ts-ignore
        data.failedCount = response.hits.total.value;
      }
      if (index == 2) {
        // @ts-ignore
        data.totalPrice = response.aggregations.delivery_price.value;
        index = 0;
        console.log('length', res.length);
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
        console.log('data', data);
        res.push({ ...data });
      } else {
        index++;
      }
    });
    console.log('res', res);
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
}
