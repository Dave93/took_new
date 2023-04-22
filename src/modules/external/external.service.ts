import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateExternalDto,
  PostOrderCalculateCustomerPriceDto,
  PostOrderCancelDto,
  PostOrderLocationChangeDto,
  PostOrderScoreDto,
  PostOrderTerminalChangeDto,
} from './dto/create-external.dto';
import { UpdateExternalDto } from './dto/update-external.dto';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { api_tokens } from '../../@generated/api-tokens/api-tokens.model';
import { PrismaService } from '../../prisma.service';
import dayjs from 'dayjs';
import fs from 'fs';
import { sort, max, retry } from 'radash';

import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { getMinutes, getMinutesNow } from '../../helpers/dates';
import axios from 'axios';
import { order_status } from '../../@generated/order-status/order-status.model';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { SearchService } from '@modules/search/search.service';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('Asia/Tashkent');

dayjs.extend(isBetween);

@Injectable()
export class ExternalService {
  constructor(
    private readonly cacheControl: CacheControlService,
    private readonly prismaService: PrismaService,
    private readonly searchService: SearchService,
    @InjectQueue('new_order_notifications') private readonly newOrderQueue: Queue,
    @InjectQueue('order_index') private readonly orderIndexQueue: Queue,
    @InjectQueue('bg_jobs') private readonly bgJobsQueue: Queue,
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

    // console.log('davr');
    if (!terminal) {
      throw new BadRequestException('Terminal not found');
    }

    const deliveryPricing = await this.cacheControl.getOrganizationDeliveryPricing(organizations.id);

    // find active delivery pricing for current time and day
    const currentDay = new Date().getDay() == 0 ? 7 : new Date().getDay();
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

    let activeDeliveryPricingSorted = sort(activeDeliveryPricing, (i) => +i.default);
    activeDeliveryPricingSorted = sort(activeDeliveryPricingSorted, (i) => +i.price_per_km);

    let minDistance = 0;
    let minDuration = 0;
    let minDeliveryPricing = null;

    if (activeDeliveryPricingSorted.length == 0) {
      throw new BadRequestException('No active delivery pricing');
    }

    let actualLat = createExternalDto.toLat;
    let actualLon = createExternalDto.toLon;
    try {
      // get geocoding data via nominatim api
      const geocodingData = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${actualLat},${actualLon}&format=json&limit=1`,
      );

      if (geocodingData.data.length > 0) {
        actualLat = geocodingData.data[0].lat;
        actualLon = geocodingData.data[0].lon;
      }
    } catch (e) {
      console.log(e.message);
    }

    for (const d of activeDeliveryPricingSorted) {
      if (d.drive_type == 'foot') {
        // console.log(
        //   `http://localhost:5001/route/v1/driving/${terminal.longitude},${terminal.latitude};${actualLon},${actualLat}?steps=true&overview=false`,
        // );
        const { data } = await axios.get(
          `http://localhost:5001/route/v1/driving/${terminal.longitude},${terminal.latitude};${actualLon},${actualLat}?steps=true&overview=false`,
        );
        if (d.price_per_km == 0 && d.rules) {
          const maxDistance: any = max(d.rules, (i: any) => +i.to);
          const tempDistance = data.routes[0].distance + 100; // add 100 meters
          if (tempDistance / 1000 > maxDistance.to) {
            continue;
          } else {
            if (!minDeliveryPricing) {
              minDistance = tempDistance;
              minDuration = data.routes[0].duration;
              minDeliveryPricing = d;
            }
            if (tempDistance < minDistance) {
              minDistance = tempDistance;
              minDuration = data.routes[0].duration;
              minDeliveryPricing = d;
            }
          }
        }
      } else {
        // console.log(
        //   `http://localhost:5000/route/v1/driving/${terminal.longitude},${terminal.latitude};${actualLon},${actualLat}?steps=true&overview=false`,
        // );
        const { data } = await axios.get(
          `http://localhost:5000/route/v1/driving/${terminal.longitude},${terminal.latitude};${actualLon},${actualLat}?steps=true&overview=false`,
        );
        const tempDistance = data.routes[0].distance + 100; // add 100 meters
        if (!minDeliveryPricing) {
          minDistance = tempDistance;
          minDuration = data.routes[0].duration;
          minDeliveryPricing = d;
        }
        if (tempDistance < minDistance && tempDistance > d.min_distance_km) {
          minDistance = tempDistance;
          minDuration = data.routes[0].duration;
          minDeliveryPricing = d;
        }
      }
    }

    let price = 0;
    minDistance = minDistance / 1000;
    let distance = minDistance;
    if (minDeliveryPricing.rules) {
      minDeliveryPricing.rules.forEach((r: any) => {
        const { from, to, price: rulePrice } = r;
        if (distance >= 0) {
          distance -= +to - +from;
          price += +rulePrice;
        }
      });
    }

    if (distance > 0) {
      let additional = 0;
      const decimals = +(distance % 1).toFixed(3) * 1000;

      if (decimals > 0 && decimals < 250) {
        additional = 500;
      } else if (decimals >= 250 && decimals < 500) {
        additional = 1000;
      } else if (decimals >= 500 && decimals < 1000) {
        additional = 1500;
      }
      const pricePerKm = Math.floor(distance) * minDeliveryPricing.price_per_km;
      price += pricePerKm + additional;
    }
    if (createExternalDto.customerPhone == '+998909514019') {
      // console.log('price', price);
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
        delivery_schedule: createExternalDto.delivery_schedule || 'now',
        later_time: createExternalDto.later_time || null,
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

  async changeLocation(locationData: PostOrderLocationChangeDto, req) {
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
        order_number: locationData.order_id.toString(),
        organization_id: organizations.id,
      },
      select: {
        id: true,
        delivery_pricing_id: true,
        terminal_id: true,
        delivery_price: true,
        pre_distance: true,
        to_lon: true,
        to_lat: true,
        order_status_id: true,
      },
    });

    if (!order) {
      return;
    }

    // find terminal with terminal_id and organization_id
    const terminals = await this.cacheControl.getTerminals();
    const terminal = terminals.find((t) => t.id === order.terminal_id && t.organization_id === organizations.id);

    const deliveryPricing = await this.cacheControl.getOrganizationDeliveryPricing(organizations.id);

    let onWay = false;

    const orderStatuses = await this.cacheControl.getOrderStatuses();
    const organizationOrderStatuses = orderStatuses.filter(
      (orderStatus) => orderStatus.organization_id === organizations.id,
    );

    const onWayOrderStatus = organizationOrderStatuses.find((orderStatus) => orderStatus.on_way);
    const currentStatus = organizationOrderStatuses.find((orderStatus) => orderStatus.id === order.order_status_id);
    if (currentStatus.sort >= onWayOrderStatus.sort) {
      onWay = true;
    }

    // find active delivery pricing for current time and day
    const currentDay = new Date().getDay() == 0 ? 7 : new Date().getDay();
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

    let actualLat = locationData.lat;
    let actualLon = locationData.lon;
    try {
      // get geocoding data via nominatim api
      const geocodingData = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${actualLat},${actualLon}&format=json&limit=1`,
      );

      if (geocodingData.data.length > 0) {
        actualLat = geocodingData.data[0].lat;
        actualLon = geocodingData.data[0].lon;
      }
    } catch (error) {
      console.log(error);
    }

    // console.log(activeDeliveryPricingSorted);
    for (const d of activeDeliveryPricingSorted) {
      if (d.drive_type == 'foot') {
        const { data } = await axios.get(
          `http://localhost:5001/route/v1/driving/${onWay ? order.to_lon : terminal.longitude},${
            onWay ? order.to_lat : terminal.latitude
          };${actualLon},${actualLat}?steps=true&overview=false`,
        );
        if (d.price_per_km == 0 && d.rules) {
          const maxDistance: any = max(d.rules, (i: any) => +i.to);
          const tempDistance = data.routes[0].distance + 100; // add 100 meters
          if (tempDistance / 1000 > maxDistance.to) {
            continue;
          } else {
            if (!minDeliveryPricing) {
              minDistance = tempDistance;
              minDuration = data.routes[0].duration;
              minDeliveryPricing = d;
            }
            if (tempDistance < minDistance) {
              minDistance = tempDistance;
              minDuration = data.routes[0].duration;
              minDeliveryPricing = d;
            }
          }
        }
      } else {
        const { data } = await axios.get(
          `http://localhost:5000/route/v1/driving/${onWay ? order.to_lon : terminal.longitude},${
            onWay ? order.to_lat : terminal.latitude
          };${actualLon},${actualLat}?steps=true&overview=false`,
        );
        const tempDistance = data.routes[0].distance + 100; // add 100 meters
        if (!minDeliveryPricing) {
          minDistance = tempDistance;
          minDuration = data.routes[0].duration;
          minDeliveryPricing = d;
        }
        if (tempDistance < minDistance && tempDistance > d.min_distance_km) {
          minDistance = tempDistance;
          minDuration = data.routes[0].duration;
          minDeliveryPricing = d;
        }
      }
    }

    let price = 0;
    minDistance = minDistance / 1000;
    let distance = minDistance;
    if (minDeliveryPricing.rules) {
      minDeliveryPricing.rules.forEach((r: any) => {
        const { from, to, price: rulePrice } = r;
        if (distance >= 0) {
          distance -= +to - +from;
          price += +rulePrice;
        }
      });
    }

    if (distance > 0) {
      let additional = 0;
      const decimals = +(distance % 1).toFixed(3) * 1000;

      if (decimals > 0 && decimals < 250) {
        additional = 500;
      } else if (decimals >= 250 && decimals < 500) {
        additional = 1000;
      } else if (decimals >= 500 && decimals < 1000) {
        additional = 1500;
      }
      const pricePerKm = Math.floor(distance) * minDeliveryPricing.price_per_km;
      price += pricePerKm + additional;
    }

    await this.prismaService.orders.update({
      where: {
        id: order.id,
      },
      data: {
        delivery_price: onWay ? order.delivery_price + price : price,
        pre_distance: onWay ? order.pre_distance + minDistance : minDistance,
        pre_duration: Math.round(minDuration),
        to_lat: locationData.lat,
        to_lon: locationData.lon,
        delivery_pricing_id: minDeliveryPricing.id,
        wrong_lat: onWay ? order.to_lat : undefined,
        wrong_lon: onWay ? order.to_lon : undefined,
      },
    });

    await this.orderIndexQueue.add('processOrderIndex', {
      orderId: order.id,
    });
    return {
      success: true,
    };
  }

  async changeTerminal(terminalData: PostOrderTerminalChangeDto, req) {
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
        order_number: terminalData.order_id.toString(),
        organization_id: organizations.id,
      },
      select: {
        id: true,
        delivery_pricing_id: true,
        terminal_id: true,
        to_lat: true,
        to_lon: true,
      },
    });

    if (!order) {
      return;
    }

    // find terminal with terminal_id and organization_id
    const terminals = await this.cacheControl.getTerminals();

    const orderStatuses = await this.cacheControl.getOrderStatuses();
    const organizationStatuses = orderStatuses.filter((i) => i.organization_id == organizations.id);
    // sort order statuses by sort field
    const sortedOrderStatuses = organizationStatuses.sort((a, b) => a.sort - b.sort);
    const firstOrderStatus = sortedOrderStatuses[0];
    const terminal = terminals.find(
      (t) => t.external_id === terminalData.terminal_id && t.organization_id === organizations.id,
    );

    const deliveryPricing = await this.cacheControl.getOrganizationDeliveryPricing(organizations.id);

    // find active delivery pricing for current time and day
    const currentDay = new Date().getDay() == 0 ? 7 : new Date().getDay();
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

    let actualLat = order.to_lat;
    let actualLon = order.to_lon;
    try {
      // get geocoding data via nominatim api
      const geocodingData = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${actualLat},${actualLon}&format=json&limit=1`,
      );

      if (geocodingData.data.length > 0) {
        actualLat = geocodingData.data[0].lat;
        actualLon = geocodingData.data[0].lon;
      }
    } catch (e) {}

    // console.log(activeDeliveryPricingSorted);
    for (const d of activeDeliveryPricingSorted) {
      if (d.drive_type == 'foot') {
        const { data } = await axios.get(
          `http://localhost:5001/route/v1/driving/${terminal.longitude},${terminal.latitude};${actualLon},${actualLat}?steps=true&overview=false`,
        );
        if (d.price_per_km == 0 && d.rules) {
          const maxDistance: any = max(d.rules, (i: any) => +i.to);
          const tempDistance = data.routes[0].distance + 100; // add 100 meters
          if (tempDistance / 1000 > maxDistance.to) {
            continue;
          } else {
            if (!minDeliveryPricing) {
              minDistance = tempDistance;
              minDuration = data.routes[0].duration;
              minDeliveryPricing = d;
            }
            if (tempDistance < minDistance) {
              minDistance = tempDistance;
              minDuration = data.routes[0].duration;
              minDeliveryPricing = d;
            }
          }
        }
      } else {
        const { data } = await axios.get(
          `http://localhost:5000/route/v1/driving/${terminal.longitude},${terminal.latitude};${actualLon},${actualLat}?steps=true&overview=false`,
        );
        const tempDistance = data.routes[0].distance + 100; // add 100 meters
        if (!minDeliveryPricing) {
          minDistance = tempDistance;
          minDuration = data.routes[0].duration;
          minDeliveryPricing = d;
        }
        if (tempDistance < minDistance && tempDistance > d.min_distance_km) {
          minDistance = tempDistance;
          minDuration = data.routes[0].duration;
          minDeliveryPricing = d;
        }
      }
    }

    let price = 0;
    minDistance = minDistance / 1000;
    let distance = minDistance;
    if (minDeliveryPricing.rules) {
      minDeliveryPricing.rules.forEach((r: any) => {
        const { from, to, price: rulePrice } = r;
        if (distance >= 0) {
          distance -= +to - +from;
          price += +rulePrice;
        }
      });
    }

    if (distance > 0) {
      let additional = 0;
      const decimals = +(distance % 1).toFixed(3) * 1000;

      if (decimals > 0 && decimals < 250) {
        additional = 500;
      } else if (decimals >= 250 && decimals < 500) {
        additional = 1000;
      } else if (decimals >= 500 && decimals < 1000) {
        additional = 1500;
      }
      const pricePerKm = Math.floor(distance) * minDeliveryPricing.price_per_km;
      price += pricePerKm + additional;
    }

    await this.prismaService.orders.update({
      where: {
        id: order.id,
      },
      data: {
        delivery_price: price,
        pre_distance: minDistance,
        pre_duration: Math.round(minDuration),
        delivery_pricing_id: minDeliveryPricing.id,
        terminal_id: terminal.id,
        courier_id: null,
        order_status_id: firstOrderStatus.id,
      },
    });

    await this.orderIndexQueue.add('processOrderIndex', {
      orderId: order.id,
    });
    return {
      success: true,
    };
  }

  async calculateCustomerPrice(postData: PostOrderCalculateCustomerPriceDto, req) {
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

    const terminals = await this.cacheControl.getTerminals();

    const terminal = terminals.find((t) => t.external_id === postData.terminal_id);

    if (!terminal) {
      throw new BadRequestException('Terminal not found');
    }
    const organizations = await this.cacheControl.getOrganization(terminal.organization_id);

    const deliveryPricing = await this.cacheControl.getOrganizationDeliveryPricing(organizations.id);

    // find active delivery pricing for current time and day
    const currentDay = new Date().getDay() == 0 ? 7 : new Date().getDay();
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

    let actualLat = postData.toLat;
    let actualLon = postData.toLon;
    try {
      // get geocoding data via nominatim api
      const geocodingData = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${actualLat},${actualLon}&format=json&limit=1`,
      );

      if (geocodingData.data.length > 0) {
        actualLat = geocodingData.data[0].lat;
        actualLon = geocodingData.data[0].lon;
      }
    } catch (e) {}

    // console.log(activeDeliveryPricingSorted);
    for (const d of activeDeliveryPricingSorted) {
      if (d.drive_type == 'foot') {
        const { data } = await axios.get(
          `http://localhost:5001/route/v1/driving/${terminal.longitude},${terminal.latitude};${actualLon},${actualLat}?steps=true&overview=false`,
        );
        if (d.price_per_km == 0 && d.rules) {
          const maxDistance: any = max(d.rules, (i: any) => +i.to);
          const tempDistance = data.routes[0].distance + 100; // add 100 meters
          if (tempDistance / 1000 > maxDistance.to) {
            continue;
          } else {
            if (!minDeliveryPricing) {
              minDistance = tempDistance;
              minDuration = data.routes[0].duration;
              minDeliveryPricing = d;
            }
            if (tempDistance < minDistance) {
              minDistance = tempDistance;
              minDuration = data.routes[0].duration;
              minDeliveryPricing = d;
            }
          }
        }
      } else {
        const { data } = await axios.get(
          `http://localhost:5000/route/v1/driving/${terminal.longitude},${terminal.latitude};${actualLon},${actualLat}?steps=true&overview=false`,
        );
        const tempDistance = data.routes[0].distance + 100; // add 100 meters
        if (!minDeliveryPricing) {
          minDistance = tempDistance;
          minDuration = data.routes[0].duration;
          minDeliveryPricing = d;
        }
        if (tempDistance < minDistance && tempDistance > d.min_distance_km) {
          minDistance = tempDistance;
          minDuration = data.routes[0].duration;
          minDeliveryPricing = d;
        }
      }
    }

    let price = 0;
    minDistance = minDistance / 1000;
    let distance = minDistance;
    if (minDeliveryPricing.customer_rules) {
      minDeliveryPricing.customer_rules.forEach((r: any) => {
        const { from, to, price: rulePrice } = r;
        if (distance >= 0) {
          distance -= +to - +from;
          price += +rulePrice;
        }
      });
    }

    if (distance > 0) {
      let additional = 0;
      const decimals = +(distance % 1).toFixed(3) * 1000;

      if (decimals > 0 && decimals < 250) {
        additional = 500;
      } else if (decimals >= 250 && decimals < 500) {
        additional = 1000;
      } else if (decimals >= 500 && decimals < 1000) {
        additional = 1500;
      }
      const pricePerKm = Math.floor(distance) * minDeliveryPricing.customer_price_per_km;
      price += pricePerKm + additional;
    }

    return {
      price,
      distance: minDistance,
    };
  }

  async cancelOrder(orderData: PostOrderCancelDto, req) {
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

    const statuses = await this.cacheControl.getOrderStatuses();
    const organizationStatuses = statuses.filter((s) => s.organization_id === organizations.id);
    const canceledStatus = organizationStatuses.find((s) => s.cancel);

    // find order with order_id and organization_id
    const order = await this.prismaService.orders.findFirst({
      where: {
        order_number: orderData.order_id.toString(),
        organization_id: organizations.id,
      },
      select: {
        id: true,
        courier_id: true,
      },
    });

    if (!order) {
      return;
    }
    if (canceledStatus) {
      // update order status
      await this.prismaService.orders.update({
        where: {
          id: order.id,
        },
        data: {
          order_status_id: canceledStatus.id,
        },
      });

      await this.orderIndexQueue.add('processOrderIndex', {
        orderId: order.id,
      });
    }
    return {
      success: true,
    };
  }

  async storeLocation(data: any, req) {
    const user = req.user;
    if (!user.is_online) {
      return {
        success: true,
      };
    }

    if (data.latitude) {
      const updateData = {
        latitude: parseFloat(data.latitude),
        longitude: parseFloat(data.longitude),
      };
      if (data.appVersion && data.appVersion != user.app_version) {
        updateData['app_version'] = data.appVersion;
      }
      try {
        await retry(
          {
            times: 3,
          },
          async () => {
            this.prismaService.users.update({
              where: {
                id: user.id,
              },
              data: updateData,
            });
          },
        );

        await this.bgJobsQueue.add('registerCourierLocation', {
          data,
          user,
        });
      } catch (e) {
        console.log('storeLocationError', e);
      }
    }
    return {
      success: true,
    };
  }

  async track(id: string, req) {
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
    const order = await this.searchService.getOrdersByIds([id]);
    if (order.length == 0) {
      throw new NotFoundException('Order not found');
    }

    const currentOrder = order[0];

    const orderStatuses = await this.cacheControl.getOrderStatuses();
    const currentOrderStatus = orderStatuses.filter((s) => s.id === currentOrder.order_status_id)[0];

    if (!currentOrderStatus.need_location) {
      return {
        success: false,
        message: 'location_not_allowed_for_status',
      };
    }

    const location = (await this.searchService.getLastOrderLocationByOrderId(id)) as any;
    if (!location) {
      return {
        success: false,
        message: 'location_not_found',
      };
    } else {
      const res: any = {
        success: true,
        data: {
          latitude: location.location.lat,
          longitude: location.location.lon,
        },
      };

      if (currentOrder.orders_couriers) {
        res.courier = {
          last_name: currentOrder.orders_couriers.last_name,
          first_name: currentOrder.orders_couriers.first_name,
          phone: currentOrder.orders_couriers.phone,
        };
      }

      res.from_location = currentOrder.from_location;
      res.to_location = currentOrder.to_location;

      return res;
    }
  }
}
