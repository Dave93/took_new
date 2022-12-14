import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateExternalDto, PostOrderScoreDto } from './dto/create-external.dto';
import { UpdateExternalDto } from './dto/update-external.dto';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { api_tokens } from '../../@generated/api-tokens/api-tokens.model';
import { PrismaService } from '../../prisma.service';
import dayjs from 'dayjs';
import fs from 'fs';
import { sort, max } from 'radash';

import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { getMinutes, getMinutesNow } from '../../helpers/dates';
import axios from 'axios';
import { order_status } from '../../@generated/order-status/order-status.model';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('Asia/Tashkent');

dayjs.extend(isBetween);

@Injectable()
export class ExternalService {
  constructor(
    private readonly cacheControl: CacheControlService,
    private readonly prismaService: PrismaService,
    @InjectQueue('new_order_notifications') private readonly newOrderQueue: Queue,
    @InjectQueue('order_index') private readonly orderIndexQueue: Queue,
  ) {}

  async create(createExternalDto: CreateExternalDto, req) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new BadRequestException('No authorization header');
    }

    const token = authorization.split(' ')[1];

    const allTokens: api_tokens[] = await this.cacheControl.getAllApiTokens();
    const tokenExists = allTokens.find((t) => t.token === token && t.active);

    if (!tokenExists) {
      throw new BadRequestException('Invalid token');
    }

    // write createExternalDto to json file for testing
    // fs.appendFileSync('createExternalDto.json', JSON.stringify(createExternalDto));

    const organizations = await this.cacheControl.getOrganization(tokenExists.organization_id);

    // find order with order_id and organization_id
    const order = await this.prismaService.orders.findFirst({
      where: {
        order_number: createExternalDto.order_number.toString(),
        organization_id: organizations.id,
      },
      select: {
        id: true,
      },
    });

    if (order) {
      throw new BadRequestException('Order already exists');
    }

    // find terminal with terminal_id and organization_id
    const terminals = await this.cacheControl.getTerminals();
    const terminal = terminals.find(
      (t) => t.external_id === createExternalDto.terminal_id && t.organization_id === organizations.id,
    );

    if (!terminal) {
      throw new BadRequestException('Terminal not found');
    }

    const deliveryPricing = await this.cacheControl.getOrganizationDeliveryPricing(organizations.id);

    // find active delivery pricing for current time and day
    const currentDay = new Date().getDay();
    const currentTime = new Date().getHours();
    // console.log('deliveryPricing', deliveryPricing);
    const activeDeliveryPricing = deliveryPricing.filter((d) => {
      let res = false;
      const startTime = dayjs.tz(d.start_time, 'Asia/Tashkent').add(5, 'hour').format('HH:mm');
      const endTime = dayjs.tz(d.end_time, 'Asia/Tashkent').add(5, 'hour').format('HH:mm');
      const currentTime = new Date();
      const now = getMinutesNow();
      let start = getMinutes(startTime);
      let end = getMinutes(endTime);

      if (end < start && now < start) {
        start -= getMinutes('24:00');
      } else if (start > end) end += getMinutes('24:00');

      const fullYear = currentTime.getFullYear();
      if (d.days.includes(currentDay.toString()) && now > start && now < end && d.active) {
        if (d.terminal_id === null) {
          res = true;
        } else if (d.terminal_id === terminal.id) {
          res = true;
        }
      }
      return res;
    });

    const activeDeliveryPricingSorted = sort(activeDeliveryPricing, (i) => +i.default);

    let minDistance = 0;
    let minDuration = 0;
    let minDeliveryPricing = null;

    if (activeDeliveryPricingSorted.length == 0) {
      throw new BadRequestException('No active delivery pricing');
    }

    // console.log(activeDeliveryPricingSorted);
    for (const d of activeDeliveryPricingSorted) {
      if (d.drive_type == 'foot') {
        const { data } = await axios.get(
          `http://localhost:5001/route/v1/driving/${terminal.longitude},${terminal.latitude};${createExternalDto.toLon},${createExternalDto.toLat}?steps=true&overview=false`,
        );
        if (d.price_per_km == 0 && d.rules) {
          const maxDistance: any = max(d.rules, (i: any) => +i.to);
          if (data.routes[0].distance / 1000 > maxDistance.to) {
            continue;
          } else {
            if (!minDeliveryPricing) {
              minDistance = data.routes[0].distance;
              minDuration = data.routes[0].duration;
              minDeliveryPricing = d;
            }
            if (data.routes[0].distance < minDistance) {
              minDistance = data.routes[0].distance;
              minDuration = data.routes[0].duration;
              minDeliveryPricing = d;
            }
          }
        }
      } else {
        const { data } = await axios.get(
          `http://localhost:5000/route/v1/driving/${terminal.longitude},${terminal.latitude};${createExternalDto.toLon},${createExternalDto.toLat}?steps=true&overview=false`,
        );
        if (!minDeliveryPricing) {
          minDistance = data.routes[0].distance;
          minDuration = data.routes[0].duration;
          minDeliveryPricing = d;
        }
        if (data.routes[0].distance < minDistance) {
          minDistance = data.routes[0].distance;
          minDuration = data.routes[0].duration;
          minDeliveryPricing = d;
        }
      }
    }

    let price = 0;
    minDistance = Math.round(minDistance / 1000);
    let distance = minDistance;
    if (minDeliveryPricing.rules) {
      minDeliveryPricing.rules.forEach((r: any) => {
        const { from, to, price: rulePrice } = r;
        if (distance > 0) {
          distance -= +to - +from;
          price += +rulePrice;
        }
      });
    }

    if (distance > 0) {
      price += distance * minDeliveryPricing.price_per_km;
    }

    const orderStatuses = await this.cacheControl.getOrderStatuses();
    // find first with order and this organization
    const orderStatus = orderStatuses.find((o) => o.sort === 1 && o.organization_id === organizations.id);

    const newOrder = await this.prismaService.orders.create({
      data: {
        order_number: createExternalDto.order_number.toString(),
        orders_organization: {
          connect: {
            id: organizations.id,
          },
        },
        // organization_id: organizations.id,
        // terminal_id: terminal.id,
        orders_terminals: {
          connect: {
            id: terminal.id,
          },
        },
        delivery_pricing_id: minDeliveryPricing.id,
        order_price: createExternalDto.price,
        delivery_price: price,
        payment_type: createExternalDto.payment_method,
        orders_order_status: {
          connect: {
            id: orderStatus.id,
          },
        },
        orders_customers: {
          connectOrCreate: {
            where: {
              phone: createExternalDto.customerPhone,
            },
            create: {
              phone: createExternalDto.customerPhone,
              name: createExternalDto.customerName,
            },
          },
        },
        delivery_address: createExternalDto.address,
        delivery_comment: createExternalDto.comment,
        delivery_type: minDeliveryPricing.delivery_type,
        from_lat: terminal.latitude,
        from_lon: terminal.longitude,
        pre_distance: minDistance,
        pre_duration: Math.round(minDuration),
        to_lat: createExternalDto.toLat,
        to_lon: createExternalDto.toLon,
        order_items: JSON.stringify(createExternalDto.orderItems),
      },
    });
    // console.log('pre new order');
    await this.newOrderQueue.add('newOrderNotify', {
      order: newOrder,
    });
    await this.orderIndexQueue.add('processOrderIndex', {
      orderId: newOrder.id,
    });

    return newOrder;
  }

  findAll() {
    return `This action returns all external`;
  }

  findOne(id: number) {
    return `This action returns a #${id} external`;
  }

  update(id: number, updateExternalDto: UpdateExternalDto) {
    return `This action updates a #${id} external`;
  }

  remove(id: number) {
    return `This action removes a #${id} external`;
  }

  async dev(createExternalDto: any, req) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new BadRequestException('No authorization header');
    }

    const token = authorization.split(' ')[1];

    const allTokens: api_tokens[] = await this.cacheControl.getAllApiTokens();
    const tokenExists = allTokens.find((t) => t.token === token && t.active);

    if (!tokenExists) {
      throw new BadRequestException('Invalid token');
    }

    const orderStatuses: order_status[] = await this.cacheControl.getOrderStatuses();
    // get order organization statuses
    const orderOrganizationStatuses = orderStatuses.filter(
      (orderStatus) => orderStatus.organization_id === createExternalDto.organization_id,
    );
    // get order statuses that need notification
    const orderStatusesThatNeedNotification = orderOrganizationStatuses.filter(
      (orderStatus) => !orderStatus.finish && !orderStatus.cancel,
    );

    // get organization from cache
    const organization = await this.cacheControl.getOrganization(createExternalDto.organization_id);

    // organization max active order count
    const maxActiveOrderCount = organization.max_active_order_count;

    // get active orders for terminal and group by courier_id and aggregate count
    const activeOrders = await this.prismaService.orders.groupBy({
      by: ['courier_id'],
      where: {
        terminal_id: createExternalDto.terminal_id,
        order_status_id: {
          in: orderStatusesThatNeedNotification.map((orderStatus) => orderStatus.id),
        },
        courier_id: {
          not: null,
        },
      },
      _count: {
        id: true,
      },
      having: {
        id: {
          _count: {
            lt: maxActiveOrderCount,
          },
        },
      },
    });

    const courierIds = activeOrders.map((o) => o.courier_id);

    // get online users
    const onlineUsers = await this.prismaService.users.findMany({
      where: {
        id: {
          in: courierIds,
        },
        is_online: true,
      },
      select: {
        id: true,
      },
    });

    return onlineUsers;
  }

  async setScore(orderScore: PostOrderScoreDto, req) {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new BadRequestException('No authorization header');
    }

    const token = authorization.split(' ')[1];

    const allTokens: api_tokens[] = await this.cacheControl.getAllApiTokens();
    const tokenExists = allTokens.find((t) => t.token === token && t.active);

    if (!tokenExists) {
      throw new BadRequestException('Invalid token');
    }

    // write createExternalDto to json file for testing
    // fs.appendFileSync('createExternalDto.json', JSON.stringify(createExternalDto));

    const organizations = await this.cacheControl.getOrganization(tokenExists.organization_id);

    // find order with order_id and organization_id
    const order = await this.prismaService.orders.findFirst({
      where: {
        order_number: orderScore.order_id.toString(),
        organization_id: organizations.id,
      },
      select: {
        id: true,
      },
    });

    if (!order) {
      return;
    }

    await this.prismaService.orders.update({
      where: {
        id: order.id,
      },
      data: {
        score: orderScore.courier,
      },
    });

    await this.orderIndexQueue.add('processOrderIndex', {
      orderId: order.id,
    });
    return {
      success: true,
    };
  }
}
