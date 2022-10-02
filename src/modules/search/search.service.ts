import { Injectable } from '@nestjs/common';

import { Client } from '@elastic/elasticsearch';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import { order_locations } from '../../@generated/order-locations/order-locations.model';
@Injectable()
export class SearchService {
  elasticClient: Client = null;

  constructor(private configService: ConfigService) {
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

  async checkOrderLocationsIndex() {
    try {
      const exists = await this.elasticClient.indices.exists({
        index: 'took_order_locations',
      });

      if (!exists) {
        await this.elasticClient.indices.create({
          index: 'took_order_locations',
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

  async bulkIndex(map: any[]) {
    try {
      const body = map.flatMap((doc) => [{ index: { _index: 'took_order_locations' } }, doc]);
      const result = await this.elasticClient.bulk({ refresh: true, body });
      if (result.errors) {
        console.log(JSON.stringify(result.items));
      }
    } catch (e) {
      console.log(e);
    }
  }

  async findOrderLocations(orderId: string) {
    const res = await this.elasticClient.search({
      index: 'took_order_locations',
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
}
