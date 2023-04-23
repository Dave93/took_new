import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindManyordersArgs } from 'src/@generated/orders/find-manyorders.args';
import { ordersWhereInput } from 'src/@generated/orders/orders-where.input';
import { sleep, sort } from 'radash';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { Prisma, user_status, users } from '@prisma/client';
import { orders } from '../../@generated/orders/orders.model';
import { PUB_SUB } from '@modules/pubsub/pubsub.module';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { getDistance } from 'geolib';
import { SearchService } from '@modules/search/search.service';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileUpload } from 'graphql-upload-minimal';
import { AsssetsService } from '@modules/asssets/asssets.service';
import { CourierEfficiencyReportItem, GarantReportItem } from '@modules/orders/dto/garant_report_item';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isToday from 'dayjs/plugin/isToday';
import { uniq } from 'lodash';
import { Int } from '@nestjs/graphql';
import { start } from 'repl';
import { ConfigService } from '@nestjs/config';
import { sendNotification } from '../../helpers/send_notification';
import { Cron } from '@nestjs/schedule';
import { SystemConfigsService } from '@modules/system_configs/system_configs.service';
import { FindManymissedOrdersArgs, missedOrdersWhereInput } from '@modules/orders/dto/find-many-missed0orders-args';
import cron from 'node-cron';
import ExcelJS from 'exceljs';
import axios from 'axios';
import { sortBy } from 'lodash';
import { encode } from 'base64-arraybuffer';
import FormData from 'form-data';

dayjs.extend(isBetween);
dayjs.extend(isToday);

dayjs.extend(utc);
dayjs.extend(timezone);

@Injectable()
export class OrdersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cacheControl: CacheControlService,
    private readonly searchService: SearchService,
    private readonly httpService: HttpService,
    private readonly assetsService: AsssetsService,

    private readonly systemConfigsService: SystemConfigsService,

    private readonly configService: ConfigService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
    @InjectQueue('order_index') private readonly orderIndexQueue: Queue,
    @InjectQueue('order_complete_actions') private readonly orderCompleteQueue: Queue,
    @InjectQueue('order_ecommerce_webhook_actions') private readonly orderEcommerceWebhookQueue: Queue,
  ) {}
  create(createOrderInput: CreateOrderInput) {
    return 'This action adds a new order';
  }

  async findAll(params: FindManyordersArgs, user: users) {
    // const currentUser = await this.prismaService.users.findUnique({
    //   where: {
    //     id: user.id,
    //   },
    //   select: {
    //     status: true,
    //     users_roles_usersTousers_roles_user_id: {
    //       select: {
    //         roles: {
    //           select: {
    //             code: true,
    //           },
    //         },
    //       },
    //     },
    //     users_terminals: {
    //       select: {
    //         terminal_id: true,
    //       },
    //     },
    //   },
    // });
    //
    // if (!currentUser) {
    //   return new BadRequestException('User not found');
    // }
    //
    // if (currentUser.status != user_status.active) {
    //   return new BadRequestException('User is not active');
    // }
    //
    // if (currentUser.users_roles_usersTousers_roles_user_id.length == 0) {
    //   return new BadRequestException('User has no roles');
    // }
    //
    // const rolesCode = currentUser.users_roles_usersTousers_roles_user_id.map((role) => role.roles.code);
    //
    // if (rolesCode.includes('manager')) {
    //   if (params.where) {
    //     if (params.where.terminal_id && params.where.terminal_id.in) {
    //       if (
    //         !currentUser.users_terminals.find((terminal) => params.where.terminal_id.in.includes(terminal.terminal_id))
    //       ) {
    //         // splice this terminal from where
    //         params.where.terminal_id.in = params.where.terminal_id.in.filter((terminal) =>
    //           currentUser.users_terminals.find((userTerminal) => userTerminal.terminal_id == terminal),
    //         );
    //       }
    //     } else {
    //       params.where.terminal_id = {
    //         in: currentUser.users_terminals.map((terminal) => terminal.terminal_id),
    //       };
    //     }
    //   } else {
    //     params.where = {
    //       terminal_id: {
    //         in: currentUser.users_terminals.map((terminal) => terminal.terminal_id),
    //       },
    //     };
    //   }
    // } else {
    if (params.where) {
      params.where.orders_terminals = {
        is: {
          active: {
            equals: true,
          },
        },
      };
    } else {
      params.where = {
        orders_terminals: {
          is: {
            active: {
              equals: true,
            },
          },
        },
      };
    }
    // }

    return this.prismaService.orders.findMany({
      ...params,
      include: {
        orders_organization: {
          select: {
            id: true,
            name: true,
            icon_url: true,
            active: true,
            external_id: true,
            support_chat_url: true,
          },
        },
        orders_couriers: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            color: true,
            finish: true,
            cancel: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.orders.findUnique({
      where: {
        id,
      },
      include: {
        orders_organization: {
          select: {
            id: true,
            name: true,
            icon_url: true,
            active: true,
            external_id: true,
            support_chat_url: true,
          },
        },
        orders_couriers: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            color: true,
            finish: true,
            cancel: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }

  async ordersConnection(where: ordersWhereInput, user: users) {
    const currentUser = await this.prismaService.users.findUnique({
      where: {
        id: user.id,
      },
      select: {
        status: true,
        users_roles_usersTousers_roles_user_id: {
          select: {
            roles: {
              select: {
                code: true,
              },
            },
          },
        },
        users_terminals: {
          select: {
            terminal_id: true,
          },
        },
      },
    });

    if (!currentUser) {
      return new BadRequestException('User not found');
    }

    if (currentUser.status != user_status.active) {
      return new BadRequestException('User is not active');
    }

    if (currentUser.users_roles_usersTousers_roles_user_id.length == 0) {
      return new BadRequestException('User has no roles');
    }

    const rolesCode = currentUser.users_roles_usersTousers_roles_user_id.map((role) => role.roles.code);

    if (rolesCode.includes('manager')) {
      if (where) {
        if (where.terminal_id && where.terminal_id.in) {
          if (!currentUser.users_terminals.find((terminal) => where.terminal_id.in.includes(terminal.terminal_id))) {
            // splice this terminal from where
            where.terminal_id.in = where.terminal_id.in.filter((terminal) =>
              currentUser.users_terminals.find((userTerminal) => userTerminal.terminal_id == terminal),
            );
          }
        } else {
          where.terminal_id = {
            in: currentUser.users_terminals.map((terminal) => terminal.terminal_id),
          };
        }
      } else {
        where = {
          terminal_id: {
            in: currentUser.users_terminals.map((terminal) => terminal.terminal_id),
          },
        };
      }
    }

    return this.prismaService.orders.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }

  async getCouriersForOrder(terminalId: string) {
    const roles: any = await this.cacheControl.getCachedRoles();
    const courierRole = roles.find((role) => role.code === 'courier');
    return this.prismaService.users.findMany({
      where: {
        users_terminals: {
          some: {
            terminal_id: terminalId,
          },
        },
        users_roles_usersTousers_roles_user_id: {
          some: {
            role_id: courierRole.id,
          },
        },
        status: 'active',
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
      },
    });
  }

  async changeOrderCourier(orderId: string, courierId: string, user: users) {
    const existingOrder = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        courier_id: true,
        orders_couriers: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
          },
        },
      },
    });
    let res = await this.prismaService.orders.update({
      where: {
        id: orderId,
      },
      data: {
        orders_couriers: {
          connect: {
            id: courierId,
          },
        },
      },
      select: {
        id: true,
        order_number: true,
        orders_organization: {
          select: {
            id: true,
            name: true,
            icon_url: true,
            active: true,
            external_id: true,
            support_chat_url: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            finish: true,
            cancel: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
        orders_couriers: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
          },
        },
        created_at: true,
        to_lat: true,
        to_lon: true,
        from_lat: true,
        from_lon: true,
        pre_distance: true,
        delivery_comment: true,
        delivery_address: true,
        delivery_price: true,
        order_price: true,
        courier_id: true,
        payment_type: true,
      },
    });

    await this.prismaService.order_actions.create({
      data: {
        order_id: orderId,
        action: 'changed_field',
        action_text: `Изменён курьер ${
          existingOrder.orders_couriers
            ? `с ${existingOrder.orders_couriers.first_name} ${existingOrder.orders_couriers.last_name}`
            : 'с пустого'
        } на ${res.orders_couriers.first_name} ${res.orders_couriers.last_name}`,
        created_by: user.id,
        terminal_id: res.orders_terminals.id,
      },
    });

    res = {
      ...res,
      created_at: new Date(res.created_at),
    };

    await this.orderIndexQueue.add('processOrderIndex', {
      orderId,
    });

    return {
      existingOrder,
      newOrder: res,
    };
  }

  async myCurrentOrders(user: users) {
    const userTerminals = await this.prismaService.users_terminals.findMany({
      where: {
        user_id: user.id,
      },
      select: {
        terminal_id: true,
      },
    });

    const terminalIds = userTerminals.map((terminal) => terminal.terminal_id);
    const allTerminals = await this.cacheControl.getTerminals();
    const terminals = allTerminals.filter((terminal) => terminalIds.includes(terminal.id));
    const terminalsOrganizations = terminals.map((terminal) => terminal.organization_id);

    const orderStatuses = await this.cacheControl.getOrderStatuses();
    const organizationsOrderStatuses = orderStatuses.filter(
      (orderStatus) =>
        terminalsOrganizations.includes(orderStatus.organization_id) && !orderStatus.finish && !orderStatus.cancel,
    );
    const orderStatusIds = organizationsOrderStatuses.map((orderStatus) => orderStatus.id);
    const orders = await this.prismaService.orders.findMany({
      where: {
        courier_id: user.id,
        order_status_id: {
          in: orderStatusIds,
        },
      },
      select: {
        id: true,
        order_number: true,
        organization_id: true,
        orders_organization: {
          select: {
            id: true,
            name: true,
            icon_url: true,
            active: true,
            external_id: true,
            support_chat_url: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            finish: true,
            cancel: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
        created_at: true,
        to_lat: true,
        to_lon: true,
        from_lat: true,
        from_lon: true,
        pre_distance: true,
        delivery_comment: true,
        delivery_address: true,
        delivery_price: true,
        order_price: true,
        courier_id: true,
        payment_type: true,
      },
      orderBy: {
        created_at: 'asc',
      },
    });
    return this.prepareOrdersNextButton(orders);
  }

  async prepareOrdersNextButton(allOrders: any[]) {
    const orderStatuses = await this.cacheControl.getOrderStatuses();
    // sort order statuses by sort field
    const sortedOrderStatuses = orderStatuses.sort((a, b) => a.sort - b.sort);
    // order statuses by organization
    const orderStatusesByOrganization = {};
    sortedOrderStatuses.forEach((orderStatus) => {
      if (!orderStatusesByOrganization[orderStatus.organization_id]) {
        orderStatusesByOrganization[orderStatus.organization_id] = [];
      }
      orderStatusesByOrganization[orderStatus.organization_id].push(orderStatus);
    });
    const ordersWithNextButton = allOrders.map((order) => {
      // get index of order status in organization order statuses
      const orderStatusIndex = orderStatusesByOrganization[order.organization_id].findIndex(
        (orderStatus) => orderStatus.id === order.orders_order_status.id,
      );
      // get next order status
      let nextOrderStatus = orderStatusesByOrganization[order.organization_id][orderStatusIndex + 1];
      if (!nextOrderStatus) {
        // get last order status
        nextOrderStatus = orderStatusesByOrganization[order.organization_id][orderStatusIndex];
      }
      const nextButtons = [];
      if (!nextOrderStatus.finish) {
        nextButtons.push(nextOrderStatus);
      } else {
        const cancelOrderStatus = orderStatusesByOrganization[order.organization_id].find(
          (orderStatus) => orderStatus.cancel,
        );
        nextButtons.push(cancelOrderStatus);
        nextButtons.push(nextOrderStatus);
      }

      return {
        ...order,
        next_buttons: nextButtons,
      };
    });
    return ordersWithNextButton;
  }

  async getOrderItems(orderId: string) {
    const orderData = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        order_items: true,
      },
    });

    try {
      const items = JSON.parse(orderData.order_items as string);
      return items;
    } catch (e) {}
    return orderData.order_items ?? [];
  }

  async setOrderStatus(
    orderId: string,
    orderStatusId: string,
    latitude: number = null,
    longitude: number = null,
    user: users,
    cancelReason: string = null,
    sentSmsToCustomer: boolean = null,
  ) {
    const order = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        courier_id: true,
        terminal_id: true,
        to_lat: true,
        to_lon: true,
        organization_id: true,
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    if (order.courier_id !== user.id) {
      throw new BadRequestException('You are not allowed to change this order status');
    }

    // get order status
    const orderStatuses = await this.cacheControl.getOrderStatuses();
    const orderStatus = orderStatuses.find((orderStatus) => orderStatus.id === orderStatusId);

    if (orderStatus.in_terminal) {
      const terminals = await this.cacheControl.getTerminals();
      const terminal = terminals.find((t) => t.id == order.terminal_id);
      if (!latitude) {
        throw new BadRequestException('Локация обязательна для смены статуса');
      }

      // get organization
      const organization = await this.cacheControl.getOrganization(order.organization_id);

      const distance = getDistance(
        { latitude: terminal.latitude, longitude: terminal.longitude },
        { latitude, longitude },
      );
      if (distance > organization.max_distance) {
        throw new BadRequestException('Вы находитесь слишком далеко от филиала');
      }
    }

    if (orderStatus.waiting || orderStatus.finish) {
      if (!latitude) {
        throw new BadRequestException('Локация обязательна для смены статуса');
      }

      // get organization
      const organization = await this.cacheControl.getOrganization(order.organization_id);

      const distance = getDistance({ latitude: order.to_lat, longitude: order.to_lon }, { latitude, longitude });
      if (distance > organization.max_order_close_distance) {
        throw new BadRequestException('Вы находитесь слишком далеко от заказа');
      }
    }

    const orderUpdateData = {
      order_status_id: orderStatusId,
    };

    if (orderStatus.cancel) {
      if (!cancelReason && !sentSmsToCustomer) {
        throw new BadRequestException('Обязательно укажите причину отмены заказа и ');
      }
    }

    await this.prismaService.orders.update({
      where: {
        id: orderId,
      },
      data: orderUpdateData,
    });

    // find last order_actions for this order
    const lastOrderActions = await this.prismaService.order_actions.findMany({
      where: {
        order_id: orderId,
        action: 'STATUS_CHANGE',
      },
      orderBy: {
        created_at: 'desc',
      },
      take: 1,
      select: {
        id: true,
        created_at: true,
      },
    });

    // get last order action created_at difference from now in seconds
    const lastOrderActionCreatedAt = lastOrderActions[0]?.created_at;
    const lastOrderActionCreatedAtDifference = lastOrderActionCreatedAt
      ? Math.floor((new Date().getTime() - new Date(lastOrderActionCreatedAt).getTime()) / 1000)
      : 0;

    await this.prismaService.order_actions.create({
      data: {
        terminal_id: order.terminal_id,
        order_id: orderId,
        action: 'STATUS_CHANGE',
        action_text: `Статус заказа изменен на "${orderStatus.name}"`,
        duration: lastOrderActionCreatedAtDifference,
      },
    });

    const orderData = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        order_number: true,
        organization_id: true,
        orders_organization: {
          select: {
            id: true,
            name: true,
            icon_url: true,
            active: true,
            external_id: true,
            support_chat_url: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            finish: true,
            cancel: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
        created_at: true,
        to_lat: true,
        to_lon: true,
        from_lat: true,
        from_lon: true,
        pre_distance: true,
        delivery_comment: true,
        delivery_address: true,
        delivery_price: true,
        order_price: true,
        courier_id: true,
        delivery_pricing_id: true,
        payment_type: true,
      },
    });

    const result = await this.prepareOrdersNextButton([orderData]);

    if (orderStatus.finish || orderStatus.cancel) {
      // update order finished date
      await this.prismaService.orders.update({
        where: {
          id: orderId,
        },
        data: {
          finished_date: new Date(),
        },
      });
    }

    await this.orderIndexQueue.add('processOrderIndex', {
      orderId,
    });

    if (orderStatus.finish) {
      await this.orderCompleteQueue.add('processOrderComplete', {
        order: orderData,
      });
    }

    await this.orderEcommerceWebhookQueue.add('processOrderEcommerceWebhook', {
      order: orderData,
    });
    return result[0];
  }

  async myNewOrders(user: users) {
    const currentUser = await this.prismaService.users.findUnique({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        is_online: true,
      },
    });

    if (!currentUser.is_online) {
      return [];
    }

    const userTerminals = await this.prismaService.users_terminals.findMany({
      where: {
        user_id: user.id,
      },
      select: {
        terminal_id: true,
      },
    });

    const terminalIds = userTerminals.map((terminal) => terminal.terminal_id);
    const allTerminals = await this.cacheControl.getTerminals();
    const terminals = allTerminals.filter((terminal) => terminalIds.includes(terminal.id));
    const terminalsOrganizations = terminals.map((terminal) => terminal.organization_id);
    const listOfOrganizations = await this.cacheControl.getOrganizations();

    const orderStatuses = await this.cacheControl.getOrderStatuses();
    let orders = [];

    const orgIds = [...new Set(terminalsOrganizations)];

    // get organization from cache

    for (const orgId of orgIds) {
      const organizationsOrderStatuses = orderStatuses.filter(
        (orderStatus) => orderStatus.organization_id == orgId && orderStatus.sort == 1,
      );
      const orderStatusIds = organizationsOrderStatuses.map((orderStatus) => orderStatus.id);
      const currentOrg = listOfOrganizations.find((org) => org.id == orgId);
      const searchOrgOrders = await this.searchService.searchOrgOrders(orgId, terminalIds, orderStatusIds);
      orders.push(
        ...searchOrgOrders.map((item: any) => {
          item.orders_organization.support_chat_url = currentOrg.support_chat_url;
          item.orders_organization.icon_url = currentOrg.icon_url;
          item.from_lat = item.from_location.lat;
          item.from_lon = item.from_location.lon;
          item.to_lat = item.to_location.lat;
          item.to_lon = item.to_location.lon;
          return item;
        }),
      );
    }
    orders = sort(orders, (item) => item.created_at);
    return orders;
  }

  async approveOrder(orderId: string, user: users) {
    const existingOrder = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        courier_id: true,
        order_status_id: true,
        organization_id: true,
      },
    });
    if (existingOrder.courier_id) {
      throw new BadRequestException('Заказ уже принят');
    }

    // get current organization
    const organization = await this.cacheControl.getOrganization(existingOrder.organization_id);
    let maxActiveOrdersCount = organization.max_active_order_count;

    // get current user data
    const userData = await this.prismaService.users.findUnique({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        max_active_order_count: true,
      },
    });

    if (userData.max_active_order_count && userData.max_active_order_count > 0) {
      maxActiveOrdersCount = userData.max_active_order_count;
    }

    // get organization statuses
    const orderStatuses = await this.cacheControl.getOrderStatuses();
    const organizationStatuses = orderStatuses.filter(
      (orderStatus) => orderStatus.organization_id === existingOrder.organization_id,
    );

    // get orders with status "В работе"
    const activeOrganizationsOrderStatuses = orderStatuses.filter(
      (orderStatus) => !orderStatus.finish && !orderStatus.cancel,
    );
    const orderStatusIds = activeOrganizationsOrderStatuses.map((orderStatus) => orderStatus.id);
    // get count of orders with this order statuses
    const ordersCount = await this.prismaService.orders.groupBy({
      by: ['organization_id'],
      where: {
        courier_id: user.id,
        order_status_id: {
          in: orderStatusIds,
        },
      },
      _count: {
        id: true,
      },
    });
    let currentOrganizationOrdersCount = 0;
    const foundOrders = ordersCount.find((orderCount) => orderCount.organization_id === existingOrder.organization_id);
    if (foundOrders) {
      currentOrganizationOrdersCount = foundOrders['_count'].id;
    }

    if (currentOrganizationOrdersCount >= maxActiveOrdersCount) {
      throw new BadRequestException('Достигнут лимит приёма заказов. Закройте текущие заказы');
    }

    // sort statuses by sort field
    const sortedOrderStatuses = organizationStatuses.sort((a, b) => a.sort - b.sort);
    // get index of current status
    const currentStatusIndex = sortedOrderStatuses.findIndex(
      (orderStatus) => orderStatus.id === existingOrder.order_status_id,
    );

    // get next status
    const nextStatus = sortedOrderStatuses[currentStatusIndex + 1];

    // update order
    const updatedOrder = await this.prismaService.orders.update({
      where: {
        id: orderId,
      },
      data: {
        courier_id: user.id,
        order_status_id: nextStatus.id,
      },
    });

    await this.pubSub.publish('deletedWaitingOrder', { deletedWaitingOrder: existingOrder });

    const orderData = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        order_number: true,
        organization_id: true,
        orders_organization: {
          select: {
            id: true,
            name: true,
            icon_url: true,
            active: true,
            external_id: true,
            support_chat_url: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            finish: true,
            cancel: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
        created_at: true,
        to_lat: true,
        to_lon: true,
        from_lat: true,
        from_lon: true,
        pre_distance: true,
        delivery_comment: true,
        delivery_address: true,
        delivery_price: true,
        order_price: true,
        courier_id: true,
        payment_type: true,
      },
    });
    const result = await this.prepareOrdersNextButton([orderData]);
    await this.pubSub.publish('addedNewCurrentOrder', { addedNewCurrentOrder: result[0] });
    await this.orderIndexQueue.add('processOrderIndex', {
      orderId,
    });
    return result[0];
  }

  async changeMultipleOrderStatus(orderIds: string[], orderStatusId: string) {
    const orderStatuses = await this.cacheControl.getOrderStatuses();
    const orderStatus = orderStatuses.find((orderStatus) => orderStatus.id === orderStatusId);
    await this.prismaService.orders.updateMany({
      where: {
        id: {
          in: orderIds,
        },
      },
      data: {
        order_status_id: orderStatusId,
      },
    });

    // TODO: add order updates history by transaction
    const orders = await this.prismaService.orders.findMany({
      where: {
        id: {
          in: orderIds,
        },
      },
      select: {
        id: true,
        order_number: true,
        organization_id: true,
        orders_organization: {
          select: {
            id: true,
            name: true,
            icon_url: true,
            active: true,
            external_id: true,
            support_chat_url: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            finish: true,
            cancel: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
        created_at: true,
        terminal_id: true,
        to_lat: true,
        to_lon: true,
        from_lat: true,
        from_lon: true,
        pre_distance: true,
        delivery_comment: true,
        delivery_address: true,
        delivery_price: true,
        order_price: true,
        courier_id: true,
        delivery_pricing_id: true,
        payment_type: true,
      },
    });
    if (orderStatus.finish || orderStatus.cancel) {
      for (const order of orders) {
        await this.pubSub.publish('deletedCurrentOrder', { deletedCurrentOrder: order });
        await this.pubSub.publish('deletedWaitingOrder', { deletedWaitingOrder: order });
      }
    }

    if (orderStatus.finish) {
      for (const order of orders) {
        await this.orderCompleteQueue.add('processOrderComplete', {
          order,
        });
      }
    }
    return orders;
  }

  orderMobilePeriodStat(user: users) {
    return this.searchService.orderMobilePeriodStat(user);
  }

  async buildRouteForOrders(terminalId: string, orderIds: string[]) {
    const terminals = await this.cacheControl.getTerminals();
    const currentTerminal = terminals.find((t) => t.id == terminalId);

    const orders = await this.prismaService.orders.findMany({
      where: {
        id: {
          in: orderIds,
        },
      },
      select: {
        to_lat: true,
        to_lon: true,
      },
    });

    const locations = [`${currentTerminal.longitude},${currentTerminal.latitude}`];
    const indexes = [];
    for (let i = 1; i <= orders.length; i++) {
      indexes.push(i);
    }

    for (const order of orders) {
      locations.push(`${order.to_lon},${order.to_lat}`);
    }
    indexes.push(orders.length + 1);
    locations.push(`${currentTerminal.longitude},${currentTerminal.latitude}`);

    const routePath = `${locations.join(';')}?sources=0&destinations=${indexes.join(';')}`;

    const data = await lastValueFrom(
      this.httpService
        .get(`http://localhost:5000/table/v1/driving/${routePath}`)
        .pipe(map((response) => response.data)),
    );

    let resultString = `yandexnavi://build_route_on_map?lat_from=${currentTerminal.latitude}&lon_from=${currentTerminal.longitude}&lat_to=${currentTerminal.latitude}&lon_to=${currentTerminal.longitude}`;
    data.destinations.map((des, index) => {
      resultString += `&lat_via_${index}=${des.location[1]}&lon_via_${index}=${des.location[0]}`;
    });

    return resultString;
  }

  async cancelOrderByVoice(orderId: string, orderStatusId: string, user: users, file: FileUpload) {
    const order = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        courier_id: true,
        terminal_id: true,
        to_lat: true,
        to_lon: true,
        organization_id: true,
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    if (order.courier_id !== user.id) {
      throw new BadRequestException('You are not allowed to change this order status');
    }

    const asset = await this.assetsService.saveModelAssets(file, 'orders');

    // get order status
    const orderStatuses = await this.cacheControl.getOrderStatuses();
    const orderStatus = orderStatuses.find((orderStatus) => orderStatus.id === orderStatusId);
    await this.prismaService.orders.update({
      where: {
        id: orderId,
      },
      data: {
        order_status_id: orderStatusId,
        cancel_voice_id: asset.id,
        finished_date: new Date(),
      },
    });

    // find last order_actions for this order
    const lastOrderActions = await this.prismaService.order_actions.findMany({
      where: {
        order_id: orderId,
        action: 'STATUS_CHANGE',
      },
      orderBy: {
        created_at: 'desc',
      },
      take: 1,
      select: {
        id: true,
        created_at: true,
      },
    });

    // get last order action created_at difference from now in seconds
    const lastOrderActionCreatedAt = lastOrderActions[0]?.created_at;
    const lastOrderActionCreatedAtDifference = lastOrderActionCreatedAt
      ? Math.floor((new Date().getTime() - new Date(lastOrderActionCreatedAt).getTime()) / 1000)
      : 0;

    await this.prismaService.order_actions.create({
      data: {
        terminal_id: order.terminal_id,
        order_id: orderId,
        action: 'STATUS_CHANGE',
        action_text: `Статус заказа изменен на "${orderStatus.name}"`,
        duration: lastOrderActionCreatedAtDifference,
      },
    });

    const orderData = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        order_number: true,
        organization_id: true,
        orders_organization: {
          select: {
            id: true,
            name: true,
            icon_url: true,
            active: true,
            external_id: true,
            support_chat_url: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            finish: true,
            cancel: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
        created_at: true,
        to_lat: true,
        to_lon: true,
        from_lat: true,
        from_lon: true,
        pre_distance: true,
        delivery_comment: true,
        delivery_address: true,
        delivery_price: true,
        order_price: true,
        courier_id: true,
        delivery_pricing_id: true,
        payment_type: true,
      },
    });

    const result = await this.prepareOrdersNextButton([orderData]);

    await this.orderIndexQueue.add('processOrderIndex', {
      orderId,
    });

    // await this.orderCompleteQueue.add('processOrderComplete', {
    //   order: orderData,
    // });
    return result[0];
  }

  async cancelOrderByText(orderId: string, orderStatusId: string, user: users, cancelText: string) {
    const order = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        courier_id: true,
        terminal_id: true,
        to_lat: true,
        to_lon: true,
        organization_id: true,
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    if (order.courier_id !== user.id) {
      throw new BadRequestException('You are not allowed to change this order status');
    }

    // get order status
    const orderStatuses = await this.cacheControl.getOrderStatuses();
    const orderStatus = orderStatuses.find((orderStatus) => orderStatus.id === orderStatusId);
    await this.prismaService.orders.update({
      where: {
        id: orderId,
      },
      data: {
        order_status_id: orderStatusId,
        cancel_reason: cancelText,
        finished_date: new Date(),
      },
    });

    // find last order_actions for this order
    const lastOrderActions = await this.prismaService.order_actions.findMany({
      where: {
        order_id: orderId,
        action: 'STATUS_CHANGE',
      },
      orderBy: {
        created_at: 'desc',
      },
      take: 1,
      select: {
        id: true,
        created_at: true,
      },
    });

    // get last order action created_at difference from now in seconds
    const lastOrderActionCreatedAt = lastOrderActions[0]?.created_at;
    const lastOrderActionCreatedAtDifference = lastOrderActionCreatedAt
      ? Math.floor((new Date().getTime() - new Date(lastOrderActionCreatedAt).getTime()) / 1000)
      : 0;

    await this.prismaService.order_actions.create({
      data: {
        terminal_id: order.terminal_id,
        order_id: orderId,
        action: 'STATUS_CHANGE',
        action_text: `Статус заказа изменен на "${orderStatus.name}"`,
        duration: lastOrderActionCreatedAtDifference,
      },
    });

    const orderData = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        order_number: true,
        organization_id: true,
        orders_organization: {
          select: {
            id: true,
            name: true,
            icon_url: true,
            active: true,
            external_id: true,
            support_chat_url: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            finish: true,
            cancel: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
        created_at: true,
        to_lat: true,
        to_lon: true,
        from_lat: true,
        from_lon: true,
        pre_distance: true,
        delivery_comment: true,
        delivery_address: true,
        delivery_price: true,
        order_price: true,
        courier_id: true,
        delivery_pricing_id: true,
        payment_type: true,
      },
    });

    const result = await this.prepareOrdersNextButton([orderData]);

    await this.orderIndexQueue.add('processOrderIndex', {
      orderId,
    });

    // await this.orderCompleteQueue.add('processOrderComplete', {
    //   order: orderData,
    // });
    return result[0];
  }

  async myOrdersHistory(startDate: Date, endDate: Date, page: number, limit: number, currentUser: users) {
    const courierIds = [];
    const user = await this.prismaService.users.findUnique({
      where: {
        id: currentUser.id,
      },
      include: {
        users_roles_usersTousers_roles_user_id: {
          include: {
            roles: {
              select: {
                id: true,
                name: true,
                code: true,
              },
            },
          },
        },
        users_terminals: {
          include: {
            terminals: {
              select: {
                id: true,
                longitude: true,
                latitude: true,
                organization_id: true,
              },
            },
          },
        },
      },
    });
    if (!user) {
      return new BadRequestException('User not found');
    }

    if (user.status != user_status.active) {
      return new BadRequestException('User is not active');
    }

    if (user.users_roles_usersTousers_roles_user_id.length == 0) {
      return new BadRequestException('User has no roles');
    }

    const courierRole = user.users_roles_usersTousers_roles_user_id.find((role) => role.roles.code == 'courier');

    if (courierRole) {
      courierIds.push(user.id);
    } else {
      const managerRole = user.users_roles_usersTousers_roles_user_id.find((role) => role.roles.code == 'manager');
      if (!managerRole) {
        return new BadRequestException('User is not manager');
      }
      const terminalIds = user.users_terminals.map((userTerminal) => userTerminal.terminal_id);
      const couriers = await this.prismaService.users.findMany({
        where: {
          users_terminals: {
            some: {
              terminal_id: {
                in: terminalIds,
              },
            },
          },
          status: user_status.active,
        },
        select: {
          id: true,
        },
      });

      courierIds.push(...couriers.map((courier) => courier.id));
    }

    const orderStatuses = await this.cacheControl.getOrderStatuses();
    // finished or canceled order statuses
    const finishedOrderStatuses = orderStatuses
      .filter((orderStatus) => orderStatus.finish || orderStatus.cancel)
      .map((orderStatus) => orderStatus.id);

    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    const orders = await this.prismaService.orders.findMany({
      where: {
        courier_id: {
          in: courierIds,
        },
        order_status_id: {
          in: finishedOrderStatuses,
        },
        created_at: {
          gte: startDate,
          lte: endDate,
        },
      },
      take: limit,
      skip: (page - 1) * limit,
      orderBy: {
        created_at: 'desc',
      },
      select: {
        id: true,
        order_number: true,
        organization_id: true,
        orders_organization: {
          select: {
            id: true,
            name: true,
            icon_url: true,
            active: true,
            external_id: true,
            support_chat_url: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            finish: true,
            cancel: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
        orders_couriers: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
          },
        },
        created_at: true,
        to_lat: true,
        to_lon: true,
        from_lat: true,
        from_lon: true,
        pre_distance: true,
        delivery_comment: true,
        delivery_address: true,
        delivery_price: true,
        order_price: true,
        courier_id: true,
        delivery_pricing_id: true,
        payment_type: true,
      },
    });

    const totalCount = await this.prismaService.orders.aggregate({
      _count: {
        id: true,
      },
      where: {
        courier_id: {
          in: courierIds,
        },
        order_status_id: {
          in: finishedOrderStatuses,
        },
        created_at: {
          gte: startDate,
          lte: endDate,
        },
      },
    });

    return {
      orders,
      totalCount: totalCount._count.id,
    };
  }

  async managerPendingOrders(page: number, limit: number, user: users) {
    const currentUser = await this.prismaService.users.findUnique({
      where: {
        id: user.id,
      },
      select: {
        status: true,
        users_roles_usersTousers_roles_user_id: {
          select: {
            roles: {
              select: {
                code: true,
              },
            },
          },
        },
        users_terminals: {
          select: {
            terminal_id: true,
          },
        },
      },
    });

    if (!currentUser) {
      return new BadRequestException('User not found');
    }

    if (currentUser.status != user_status.active) {
      return new BadRequestException('User is not active');
    }

    if (currentUser.users_roles_usersTousers_roles_user_id.length == 0) {
      return new BadRequestException('User has no roles');
    }

    const managerRole = currentUser.users_roles_usersTousers_roles_user_id.find((role) => role.roles.code == 'manager');

    if (!managerRole) {
      return new BadRequestException('User is not a manager');
    }

    const orders = [];
    let totalCount = 0;
    const organizations = await this.cacheControl.getOrganizations();
    const orderStatuses = await this.cacheControl.getOrderStatuses();

    for (const organization of organizations) {
      const organizationStatuses = orderStatuses.filter(
        (orderStatus) => orderStatus.organization_id == organization.id,
      );
      const onWayStatus = organizationStatuses.find((orderStatus) => orderStatus.on_way);
      // statuses which sort is less than on way status
      const pendingStatusIds = organizationStatuses
        .filter((orderStatus) => orderStatus.sort < onWayStatus.sort)
        .map((orderStatus) => orderStatus.id);
      const organizationOrders = await this.prismaService.orders.findMany({
        where: {
          organization_id: organization.id,
          order_status_id: {
            in: pendingStatusIds,
          },
          terminal_id: {
            in: currentUser.users_terminals.map((userTerminal) => userTerminal.terminal_id),
          },
        },
        take: limit,
        skip: (page - 1) * limit,
        orderBy: {
          created_at: 'desc',
        },
        select: {
          id: true,
          order_number: true,
          organization_id: true,
          orders_organization: {
            select: {
              id: true,
              name: true,
              icon_url: true,
              active: true,
              external_id: true,
              support_chat_url: true,
            },
          },
          orders_customers: {
            select: {
              id: true,
              name: true,
              phone: true,
            },
          },
          orders_order_status: {
            select: {
              id: true,
              name: true,
              finish: true,
              cancel: true,
              on_way: true,
              in_terminal: true,
            },
          },
          orders_terminals: {
            select: {
              id: true,
              name: true,
            },
          },
          orders_couriers: {
            select: {
              id: true,
              first_name: true,
              last_name: true,
            },
          },
          created_at: true,
          to_lat: true,
          to_lon: true,
          from_lat: true,
          from_lon: true,
          pre_distance: true,
          delivery_comment: true,
          delivery_address: true,
          delivery_price: true,
          order_price: true,
          courier_id: true,
          delivery_pricing_id: true,
          payment_type: true,
        },
      });

      const count = await this.prismaService.orders.aggregate({
        _count: {
          id: true,
        },
        where: {
          organization_id: organization.id,
          order_status_id: {
            in: pendingStatusIds,
          },
          terminal_id: {
            in: currentUser.users_terminals.map((userTerminal) => userTerminal.terminal_id),
          },
        },
      });
      orders.push(...organizationOrders);
      totalCount += count._count.id;
    }

    return {
      orders,
      totalCount,
    };
  }

  async assignOrderCourier(orderId: string, courierId: string, user: users) {
    const currentUser = await this.prismaService.users.findUnique({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        status: true,
        users_roles_usersTousers_roles_user_id: {
          select: {
            roles: {
              select: {
                code: true,
              },
            },
          },
        },
        users_terminals: {
          select: {
            terminal_id: true,
          },
        },
      },
    });

    if (!currentUser) {
      throw new BadRequestException('User not found');
    }

    if (currentUser.status != user_status.active) {
      throw new BadRequestException('User is not active');
    }

    if (currentUser.users_roles_usersTousers_roles_user_id.length == 0) {
      throw new BadRequestException('User has no roles');
    }

    const managerRole = currentUser.users_roles_usersTousers_roles_user_id.find((role) => role.roles.code == 'manager');

    if (!managerRole) {
      throw new BadRequestException('User is not a manager');
    }

    const existingOrder = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        courier_id: true,
      },
    });
    let res = await this.prismaService.orders.update({
      where: {
        id: orderId,
      },
      data: {
        orders_couriers: {
          connect: {
            id: courierId,
          },
        },
        updated_at: new Date(),
      },
      select: {
        id: true,
        order_number: true,
        orders_organization: {
          select: {
            id: true,
            name: true,
            icon_url: true,
            active: true,
            external_id: true,
            support_chat_url: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            finish: true,
            cancel: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
        organization_id: true,
        created_at: true,
        to_lat: true,
        to_lon: true,
        from_lat: true,
        from_lon: true,
        pre_distance: true,
        delivery_comment: true,
        delivery_address: true,
        delivery_price: true,
        order_price: true,
        courier_id: true,
        payment_type: true,
      },
    });

    res = {
      ...res,
      created_at: new Date(res.created_at),
    };

    await this.orderIndexQueue.add('processOrderIndex', {
      orderId,
    });

    const result = await this.prepareOrdersNextButton([res]);

    return {
      existingOrder,
      newOrder: result[0],
    };
  }

  async changeMultipleOrderStatusByPeriod(
    startDate: Date,
    endDate: Date,
    organizationId: string,
    orderStatusId: string,
  ) {
    // return true;
    await this.prismaService.orders.updateMany({
      where: {
        created_at: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
        organization_id: organizationId,
      },
      data: {
        order_status_id: orderStatusId,
      },
    });

    return true;
  }

  async clearCourier(orderId: string, user: users) {
    const existingOrder = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        courier_id: true,
      },
    });
    let res = await this.prismaService.orders.update({
      where: {
        id: orderId,
      },
      data: {
        orders_couriers: {
          disconnect: true,
        },
      },
      select: {
        id: true,
        order_number: true,
        orders_organization: {
          select: {
            id: true,
            name: true,
            icon_url: true,
            active: true,
            external_id: true,
            support_chat_url: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            finish: true,
            cancel: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
        created_at: true,
        to_lat: true,
        to_lon: true,
        from_lat: true,
        from_lon: true,
        pre_distance: true,
        delivery_comment: true,
        delivery_address: true,
        delivery_price: true,
        order_price: true,
        courier_id: true,
        payment_type: true,
      },
    });

    res = {
      ...res,
      created_at: new Date(res.created_at),
    };

    await this.orderIndexQueue.add('processOrderIndex', {
      orderId,
    });

    return {
      existingOrder,
      newOrder: res,
    };
  }

  async updateOrderStatus(orderId: string, orderStatusId: string, user: users) {
    const order = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        courier_id: true,
        terminal_id: true,
        to_lat: true,
        to_lon: true,
        organization_id: true,
        orders_order_status: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    // get order status
    const orderStatuses = await this.cacheControl.getOrderStatuses();
    const orderStatus = orderStatuses.find((orderStatus) => orderStatus.id === orderStatusId);

    const orderUpdateData = {
      order_status_id: orderStatusId,
    };

    await this.prismaService.orders.update({
      where: {
        id: orderId,
      },
      data: orderUpdateData,
    });

    // find last order_actions for this order
    const lastOrderActions = await this.prismaService.order_actions.findMany({
      where: {
        order_id: orderId,
        action: 'STATUS_CHANGE',
      },
      orderBy: {
        created_at: 'desc',
      },
      take: 1,
      select: {
        id: true,
        created_at: true,
      },
    });

    // get last order action created_at difference from now in seconds
    const lastOrderActionCreatedAt = lastOrderActions[0]?.created_at;
    const lastOrderActionCreatedAtDifference = lastOrderActionCreatedAt
      ? Math.floor((new Date().getTime() - new Date(lastOrderActionCreatedAt).getTime()) / 1000)
      : 0;

    await this.prismaService.order_actions.create({
      data: {
        terminal_id: order.terminal_id,
        order_id: orderId,
        action: 'STATUS_CHANGE',
        action_text: `Статус заказа изменен c "${order.orders_order_status.name}" на "${orderStatus.name}"`,
        duration: lastOrderActionCreatedAtDifference,
        created_by: user.id,
      },
    });

    const orderData = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        order_number: true,
        organization_id: true,
        orders_organization: {
          select: {
            id: true,
            name: true,
            icon_url: true,
            active: true,
            external_id: true,
            support_chat_url: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            finish: true,
            cancel: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
        created_at: true,
        terminal_id: true,
        to_lat: true,
        to_lon: true,
        from_lat: true,
        from_lon: true,
        pre_distance: true,
        delivery_comment: true,
        delivery_address: true,
        delivery_price: true,
        order_price: true,
        courier_id: true,
        delivery_pricing_id: true,
        payment_type: true,
      },
    });

    const result = await this.prepareOrdersNextButton([orderData]);

    if (orderStatus.finish || orderStatus.cancel) {
      // update order finished date
      await this.prismaService.orders.update({
        where: {
          id: orderId,
        },
        data: {
          finished_date: new Date(),
        },
      });
    }

    await this.orderIndexQueue.add('processOrderIndex', {
      orderId,
    });

    if (orderStatus.finish) {
      await this.orderCompleteQueue.add('processOrderComplete', {
        order: orderData,
      });
    }

    return result[0];
  }

  async fixBalancesByDate(startDate: Date, endDate: Date, user: users) {
    const currentUser = await this.prismaService.users.findUnique({
      where: {
        id: user.id,
      },
      select: {
        status: true,
        users_roles_usersTousers_roles_user_id: {
          select: {
            roles: {
              select: {
                code: true,
              },
            },
          },
        },
        users_terminals: {
          select: {
            terminal_id: true,
          },
        },
      },
    });

    if (!currentUser) {
      return new BadRequestException('User not found');
    }

    if (currentUser.status != user_status.active) {
      return new BadRequestException('User is not active');
    }

    if (currentUser.users_roles_usersTousers_roles_user_id.length == 0) {
      return new BadRequestException('User has no roles');
    }

    const rolesCode = currentUser.users_roles_usersTousers_roles_user_id.map((role) => role.roles.code);
    if (!rolesCode.includes('admin')) {
      return new BadRequestException('User has no permission');
    }

    const orderIds = await this.prismaService.$queryRaw<
      orders[]
    >`select o.id, o.order_status_id, o.terminal_id, o.created_at
                                                        from orders o
                                                               left join order_status os on o.order_status_id = os.id
                                                               left join order_transactions ot on o.id = ot.order_id
                                                        where o.courier_id is not null and os.finish = true and o.created_at >= '2023-01-01 00:00:00' and o.created_at <= '2023-01-31 23:59:59' and ot.id is null`;

    const orders = await this.prismaService.orders.findMany({
      where: {
        id: {
          in: orderIds.map((order) => order.id),
        },
      },
      select: {
        id: true,
        organization_id: true,
        order_price: true,
        delivery_price: true,
        payment_type: true,
        created_at: true,
        courier_id: true,
        terminal_id: true,
        delivery_pricing_id: true,
        pre_distance: true,
        orders_terminals: {
          select: {
            id: true,
          },
        },
        order_transactions_orders: {
          select: {
            id: true,
            amount: true,
            order_id: true,
            courier_id: true,
            terminal_id: true,
          },
        },
      },
    });

    for (const order of orders) {
      await this.orderCompleteQueue.add('processOrderComplete', {
        order,
      });
    }

    return true;
  }

  async fixOrderIndex(startDate: Date, endDate: Date, user: users) {
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);
    const orders = await this.prismaService.orders.findMany({
      where: {
        created_at: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: {
        id: true,
      },
    });
    for (const order of orders) {
      await this.orderIndexQueue.add('processOrderIndex', {
        orderId: order.id,
      });
    }
  }

  async getDeliveryMapType(orderId: string) {
    const order = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        delivery_pricing_id: true,
      },
    });
    const deliveryPricing = await this.cacheControl.getDeliveryPricingById(order.delivery_pricing_id);
    return deliveryPricing.drive_type;
  }

  //async calculateGarant(
  //     startDate: Date,
  //     endDate: Date,
  //     user,
  //     courierId?: string[],
  //     filteredTerminalIds?: string[],
  //     walletEndDate?: Date,
  // ) {
  //   const sqlStartDate = startDate.toISOString().split('T')[0];
  //   let sqlEndDate = endDate.toISOString().split('T')[0];
  //   sqlEndDate = dayjs(sqlEndDate).add(2, 'day').toISOString().split('T')[0];
  //
  //   const sqlWalletEndDate = walletEndDate
  //       ? dayjs(walletEndDate.toISOString().split('T')[0]).add(2, 'day').toISOString().split('T')[0]
  //       : null;
  //   const sqlPrevStartDate = dayjs(sqlStartDate).subtract(1, 'month').toISOString().split('T')[0];
  //   const sqlPrevEndDate = dayjs(sqlEndDate).subtract(1, 'month').toISOString().split('T')[0];
  //   if (dayjs(sqlStartDate).isSame(dayjs(), 'month')) {
  //     sqlEndDate = dayjs().hour(5).minute(0).second(0).toISOString().split('T')[0];
  //   }
  //
  //   const prevMonthOrders = await this.prismaService.$queryRawUnsafe<any>(`select
  //         o.courier_id,
  //         count(o.courier_id) as total_orders
  //     from orders o
  //              left join order_status os on o.order_status_id = os.id
  //              left join users u on o.courier_id = u.id
  //     where o.created_at >= '${sqlPrevStartDate} 00:00:00' and o.created_at <= '${sqlPrevEndDate} 04:00:00' and os.finish = true ${
  //       courierId ? `and o.courier_id in (${courierId.map((id) => `'${id}'`).join(',')})` : ''
  //   }
  //     group by o.courier_id
  //     order by o.courier_id;`);
  //
  //   let query = await this.prismaService.$queryRawUnsafe<GarantReportItem[]>(`select
  //           min(o.created_at) as begin_date,
  //           max(o.created_at) as last_order_date,
  //           sum(o.delivery_price) as delivery_price,
  //           concat(u.first_name, ' ', u.last_name) as courier,
  //           count(o.id) as orders_count,
  //           avg(extract_duration('minute',age(o.finished_date, o.created_at))) as avg_delivery_time,
  //           array_agg(date_trunc('day', o.created_at)) as orders_dates,
  //           o.courier_id
  //       from orders o
  //                left join order_status os on o.order_status_id = os.id
  //                left join users u on o.courier_id = u.id
  //       where o.created_at >= '${sqlStartDate} 00:00:00' and o.created_at <= '${sqlEndDate} 04:00:00' and os.finish = true ${
  //       courierId ? `and o.courier_id in (${courierId.map((id) => `'${id}'`).join(',')})` : ''
  //   }
  //       group by o.courier_id, u.first_name, u.last_name
  //       order by courier;`);
  //
  //   const prevMonthByCourier = prevMonthOrders.reduce((acc, item) => {
  //     acc[item.courier_id] = item.total_orders;
  //     return acc;
  //   }, {});
  //
  //   let courierIds = query.filter((item) => item.courier_id != null).map((item) => item.courier_id);
  //   const couriers = await this.prismaService.users.findMany({
  //     where: {
  //       id: {
  //         in: courierIds,
  //       },
  //     },
  //     select: {
  //       id: true,
  //       status: true,
  //       created_at: true,
  //       drive_type: true,
  //     },
  //   });
  //
  //   const couriersById = couriers.reduce((acc, item) => {
  //     acc[item.id] = item;
  //     return acc;
  //   }, {});
  //   let walletQuery = [];
  //   if (walletEndDate) {
  //     walletQuery = await this.prismaService.$queryRawUnsafe<
  //         {
  //           total_amount: number;
  //           courier_id: string;
  //         }[]
  //     >(`select sum(amount) as total_amount, courier_id
  //       from order_transactions
  //       where status = 'pending' and created_at <= '${sqlWalletEndDate} 04:00:00'
  //       ${
  //         courierId
  //             ? `and courier_id in (${courierId.map((id) => `'${id}'`).join(',')})`
  //             : courierIds.length
  //                 ? `and courier_id in (${courierIds.map((id) => `'${id}'`).join(',')})`
  //                 : ''
  //     }
  //       group by courier_id`);
  //   }
  //
  //   // get couriers terminalIds
  //   const terminalIds = await this.prismaService.users_terminals.findMany({
  //     where: {
  //       user_id: {
  //         in: courierIds,
  //       },
  //     },
  //     select: {
  //       terminal_id: true,
  //       user_id: true,
  //     },
  //   });
  //
  //   const terminalIdsByCourier = terminalIds.reduce((acc, item) => {
  //     if (!acc[item.user_id]) {
  //       acc[item.user_id] = [];
  //     }
  //     acc[item.user_id].push(item.terminal_id);
  //     return acc;
  //   }, {});
  //
  //   if (filteredTerminalIds && filteredTerminalIds.length) {
  //     const filteredCourierIds = Object.keys(terminalIdsByCourier).filter((courierId) => {
  //       const courierTerminalIds = terminalIdsByCourier[courierId];
  //       return courierTerminalIds.some((terminalId) => filteredTerminalIds.includes(terminalId));
  //     });
  //     query = query.filter((item) => filteredCourierIds.includes(item.courier_id));
  //     courierIds = courierIds.filter((id) => filteredCourierIds.includes(id));
  //   }
  //   const workStartHour = await this.cacheControl.getSetting('work_start_time');
  //
  //   const balanceQuery = await this.prismaService.$queryRawUnsafe<
  //       {
  //         courier_id: string;
  //         balance: number;
  //       }[]
  //   >(`select courier_id, sum(balance) as balance
  //         from courier_terminal_balance
  //           where courier_id in (${courierIds.map((id) => `'${id}'`).join(',')})
  //         group by courier_id`);
  //
  //   const balanceById = balanceQuery.reduce((acc, item) => {
  //     acc[item.courier_id] = item.balance;
  //     return acc;
  //   }, {});
  //
  //   const result = [];
  //
  //   let garantPrices = await this.cacheControl.getSetting('garant_prices');
  //   let garantPrice = 5000000;
  //   let terminalCloseDays = await this.cacheControl.getSetting('terminal_close_days');
  //   try {
  //     garantPrices = JSON.parse(garantPrices);
  //   } catch (e) {
  //     console.log('can not calculate garant price', e);
  //   }
  //   try {
  //     terminalCloseDays = JSON.parse(terminalCloseDays);
  //     // group by terminal_id
  //     terminalCloseDays = terminalCloseDays.reduce((acc, item) => {
  //       if (!acc[item.terminal_id]) {
  //         acc[item.terminal_id] = [];
  //       }
  //       acc[item.terminal_id].push(dayjs(item.date.split('T')[0]));
  //       return acc;
  //     }, {});
  //   } catch (e) {
  //     console.log('can not parse terminal close days', e);
  //   }
  //
  //   query.forEach((item) => {
  //     if (!item.courier_id) {
  //       return;
  //     }
  //
  //     if (garantPrices) {
  //       const garantPriceObject = garantPrices.find(
  //           (priceItem) => priceItem.drive_type === couriersById[item.courier_id].drive_type,
  //       );
  //       if (garantPriceObject) {
  //         garantPrice = +garantPriceObject.price;
  //       }
  //     }
  //
  //     const resultItem = {
  //       ...item,
  //     };
  //     resultItem.orders_count = Number(resultItem.orders_count);
  //     const order_dates = [...resultItem.orders_dates];
  //     resultItem.orders_dates = resultItem.orders_dates.filter(
  //         (date, i, self) => self.findIndex((d) => d.getTime() === date.getTime()) === i,
  //     );
  //     resultItem.drive_type = couriersById[item.courier_id].drive_type;
  //
  //     couriersById[item.courier_id].created_at.setHours(0, 0, 0, 0);
  //     resultItem.created_at = couriersById[item.courier_id].created_at;
  //     if (dayjs(resultItem.last_order_date).isToday()) {
  //       resultItem.last_order_date = dayjs(resultItem.last_order_date).add(-1, 'd').toDate();
  //     }
  //     const userCreatedAtStart = dayjs(resultItem.created_at).format('YYYY-MM-DD');
  //     const firstOrderDateStart = dayjs(resultItem.begin_date).format('YYYY-MM-DD');
  //     const lastOrderDateStart = dayjs(resultItem.last_order_date).format('YYYY-MM-DD');
  //     const isRegisteredThisMonth = dayjs(userCreatedAtStart).isBetween(
  //         dayjs(firstOrderDateStart),
  //         dayjs(lastOrderDateStart),
  //         null,
  //         '[]',
  //     );
  //     let actualDayOffs = 0;
  //     let possibleDayOffs = 4;
  //     /*if (isRegisteredThisMonth) {
  //       // difference between first day and start date in weeks using dayjs
  //       const weeks = dayjs(lastOrderDateStart).diff(dayjs(firstOrderDateStart), 'week');
  //       possibleDayOffs = weeks;
  //     } else */
  //     if (dayjs(userCreatedAtStart).isBetween(dayjs(sqlStartDate), dayjs(sqlEndDate), null, '[]')) {
  //       const weeks = dayjs(lastOrderDateStart).diff(dayjs(userCreatedAtStart), 'week');
  //       possibleDayOffs = weeks;
  //       if (dayjs(sqlStartDate).isSame(dayjs(), 'month')) {
  //         possibleDayOffs = dayjs(sqlEndDate).diff(dayjs(userCreatedAtStart), 'week');
  //       }
  //     }
  //
  //     const datesBetween = [];
  //     let dayOffStartDate = resultItem.begin_date;
  //     if (dayjs(resultItem.created_at).isBefore(dayjs(startDate))) {
  //       if (prevMonthByCourier[item.courier_id]) {
  //         if (prevMonthByCourier[item.courier_id].total_orders > 0) {
  //           dayOffStartDate = startDate;
  //         }
  //       }
  //     }
  //     const date = new Date(dayOffStartDate);
  //     let currentDate = dayjs(sqlEndDate).toDate();
  //     // check if sqlStartDate is current month
  //     if (dayjs(sqlStartDate).isSame(dayjs(), 'month')) {
  //       currentDate = new Date();
  //     }
  //     currentDate.setHours(0, 0, 0, 0);
  //     date.setHours(0, 0, 0, 0);
  //
  //     while (date <= currentDate) {
  //       datesBetween.push(dayjs(date).hour(0).minute(0).second(0));
  //       date.setDate(date.getDate() + 1);
  //     }
  //     resultItem.actual_day_offs_list = [];
  //     datesBetween.forEach((date) => {
  //       const orderDate = resultItem.orders_dates.find((d) => {
  //         const newDate = dayjs(d).hour(0).minute(0).second(0);
  //         return newDate.isSame(date);
  //       });
  //       let isDayOff = false;
  //       if (!orderDate) {
  //         isDayOff = true;
  //       }
  //
  //       if (isDayOff && terminalCloseDays) {
  //         const courierTerminals = terminalIdsByCourier[item.courier_id];
  //         if (courierTerminals) {
  //           courierTerminals.forEach((terminal) => {
  //             const terminalCloseDates = terminalCloseDays[terminal];
  //             if (terminalCloseDates) {
  //               const isTerminalCloseDay = terminalCloseDates.find((d) => dayjs(d).isSame(date));
  //               if (isTerminalCloseDay) {
  //                 isDayOff = false;
  //               }
  //             }
  //           });
  //         }
  //       }
  //
  //       if (isDayOff) {
  //         actualDayOffs++;
  //         resultItem.actual_day_offs_list.push(date.tz('Asia/Tashkent').add(1, 'day').toDate());
  //       }
  //     });
  //
  //     resultItem.formatted_avg_delivery_time = this.fancyTimeFormat(resultItem.avg_delivery_time);
  //     resultItem.actual_day_offs = actualDayOffs;
  //
  //     let giveGarant = true;
  //     if (actualDayOffs > possibleDayOffs) {
  //       giveGarant = false;
  //     }
  //
  //     const order_dates_day = [];
  //     order_dates.forEach((date) => {
  //       const dateObj = dayjs.tz(date, 'Asia/Tashkent'); //.add(5, 'hour');
  //       const hour = dateObj.hour();
  //       let dateString = dateObj.format('YYYY-MM-DD');
  //       if (hour <= workStartHour) {
  //         dateString = dateObj.subtract(1, 'day').format('YYYY-MM-DD');
  //       }
  //
  //       if (!order_dates_day.includes(dateString)) {
  //         order_dates_day.push(dateString);
  //       }
  //     });
  //     resultItem.order_dates_count = order_dates_day.length;
  //     if (walletEndDate) {
  //       resultItem.balance =
  //           walletQuery.find((walletItem) => walletItem.courier_id === item.courier_id)?.total_amount || 0;
  //     } else {
  //       resultItem.balance = balanceById[item.courier_id] ? +balanceById[item.courier_id] : 0;
  //     }
  //     resultItem.earned = +resultItem.delivery_price - +resultItem.balance;
  //
  //     const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  //     const workDays = dayjs(resultItem.last_order_date).diff(dayjs(resultItem.begin_date), 'day') + 1;
  //     resultItem.garant_days = resultItem.order_dates_count;
  //     if (giveGarant) {
  //       // resultItem.garant_price = Math.round(((garantPrice / daysInMonth) * workDays) / 1000) * 1000;
  //       resultItem.garant_price =
  //           Math.round(((garantPrice / daysInMonth) * resultItem.orders_dates.length) / 1000) * 1000;
  //       resultItem.balance_to_pay = Math.round((resultItem.garant_price - resultItem.delivery_price) / 1000) * 1000;
  //     } else {
  //       const possibleGarantPrice = Math.round(((garantPrice / daysInMonth) * workDays) / 1000) * 1000;
  //       resultItem.possible_garant_price =
  //           Math.round(((garantPrice / daysInMonth) * resultItem.orders_dates.length) / 1000) * 1000;
  //       resultItem.possible_garant_price = Math.round((possibleGarantPrice - resultItem.delivery_price) / 1000) * 1000;
  //     }
  //
  //     resultItem.possible_day_offs = possibleDayOffs;
  //     resultItem.status = couriersById[item.courier_id].status;
  //     result.push(resultItem);
  //   });
  //   return result;
  // }

  async calculateGarant(
    startDate: Date,
    endDate: Date,
    user,
    courierId?: string[],
    filteredTerminalIds?: string[],
    walletEndDate?: Date,
  ) {
    const sqlStartDate = dayjs(startDate.toISOString().split('T')[0])
      .add(1, 'd')
      .add(-5, 'hour')
      .hour(0)
      .minute(0)
      .hour(0)
      .format('YYYY-MM-DD HH:mm:ss');
    let sqlEndDate = dayjs(endDate.toISOString().split('T')[0])
      .add(1, 'day')
      .hour(4)
      .minute(0)
      .second(0)
      .format('YYYY-MM-DD HH:mm:ss');

    const sqlWalletEndDate = walletEndDate
      ? dayjs(walletEndDate.toISOString().split('T')[0]).add(2, 'day').toISOString().split('T')[0]
      : null;
    const sqlPrevStartDate = dayjs(sqlStartDate).subtract(1, 'month').toISOString().split('T')[0];
    const sqlPrevEndDate = dayjs(sqlEndDate).subtract(1, 'month').toISOString().split('T')[0];
    if (dayjs(sqlStartDate).isSame(dayjs(), 'month')) {
      sqlEndDate = dayjs().hour(5).minute(0).second(0).toISOString().split('T')[0];
    }

    const organizations = await this.cacheControl.getOrganizations();
    const terminals = await this.cacheControl.getTerminals();

    const prevMonthOrders = await this.prismaService.$queryRawUnsafe<any>(`select
       o.courier_id,
       count(o.courier_id) as total_orders
     from orders o
            inner join order_status os on o.order_status_id = os.id and os.finish = true
            inner join users u on o.courier_id = u.id
     where o.created_at >= '${sqlPrevStartDate} 00:00:00' and o.created_at <= '${sqlPrevEndDate} 04:00:00'  ${
      courierId ? `and o.courier_id in (${courierId.map((id) => `'${id}'`).join(',')})` : ''
    }
     group by o.courier_id
     order by o.courier_id;`);

    let query = await this.prismaService.$queryRawUnsafe<GarantReportItem[]>(`select
            min(o.created_at) as begin_date,
            max(o.created_at) as last_order_date,
            sum(o.delivery_price) as delivery_price,
            concat(u.first_name, ' ', u.last_name) as courier,
            count(o.id) as orders_count,
            avg(extract_duration('minute',age(o.finished_date, o.created_at))) as avg_delivery_time,
            array_agg(date_trunc('day', o.created_at)) as orders_dates,
            o.courier_id
        from orders o
                 left join order_status os on o.order_status_id = os.id
                 left join users u on o.courier_id = u.id
        where o.created_at >= '${sqlStartDate}' and o.created_at <= '${sqlEndDate}' and os.finish = true ${
      courierId ? `and o.courier_id in (${courierId.map((id) => `'${id}'`).join(',')})` : ''
    }
        group by o.courier_id, u.first_name, u.last_name
        order by courier;`);
    console.log(`select
                   min(o.created_at) as begin_date,
                   max(o.created_at) as last_order_date,
                   sum(o.delivery_price) as delivery_price,
                   concat(u.first_name, ' ', u.last_name) as courier,
                   count(o.id) as orders_count,
                   avg(extract_duration('minute',age(o.finished_date, o.created_at))) as avg_delivery_time,
                   array_agg(date_trunc('day', o.created_at)) as orders_dates,
                   o.courier_id
                 from orders o
                        left join order_status os on o.order_status_id = os.id
                        left join users u on o.courier_id = u.id
                 where o.created_at >= '${sqlStartDate}' and o.created_at <= '${sqlEndDate}' and os.finish = true ${
      courierId ? `and o.courier_id in (${courierId.map((id) => `'${id}'`).join(',')})` : ''
    }
                 group by o.courier_id, u.first_name, u.last_name
                 order by courier;`);

    const couriersByTerminalById = {};
    const couriersByTerminal = await this.prismaService.$queryRawUnsafe<
      {
        delivery_price: number;
        courier: string;
        courier_id: string;
        organization_id: string;
        terminal_id: string;
      }[]
    >(`select
            sum(o.delivery_price) as delivery_price,
            concat(u.first_name, ' ', u.last_name) as courier,
            o.courier_id,
            o.courier_id,
            o.organization_id,
            o.terminal_id
        from orders o
                 left join order_status os on o.order_status_id = os.id
                 left join users u on o.courier_id = u.id
        where o.created_at >= '${sqlStartDate}' and o.created_at <= '${sqlEndDate}' and os.finish = true ${
      courierId ? `and o.courier_id in (${courierId.map((id) => `'${id}'`).join(',')})` : ''
    }
        group by o.courier_id, o.terminal_id, o.organization_id, u.first_name, u.last_name
        order by courier;`);

    couriersByTerminal.forEach((item) => {
      if (!couriersByTerminalById[item.courier_id]) {
        couriersByTerminalById[item.courier_id] = [];
        organizations.forEach((org) => {
          couriersByTerminalById[item.courier_id].push({
            id: org.id,
            name: org.name,
            children: [],
          });
        });
      }
      organizations.forEach((org) => {
        if (org.id === item.organization_id) {
          couriersByTerminalById[item.courier_id].forEach((orgItem) => {
            if (orgItem.id === item.organization_id) {
              const terminal = terminals.find((terminal) => terminal.id === item.terminal_id);
              orgItem.children.push({
                ...item,
                terminal_name: terminal ? terminal.name : '',
              });
            }
          });
        }
      });
    });

    const prevMonthByCourier = prevMonthOrders.reduce((acc, item) => {
      acc[item.courier_id] = item.total_orders;
      return acc;
    }, {});

    let courierIds = query.filter((item) => item.courier_id != null).map((item) => item.courier_id);
    const couriers = await this.prismaService.users.findMany({
      where: {
        id: {
          in: courierIds,
        },
      },
      select: {
        id: true,
        status: true,
        created_at: true,
        drive_type: true,
        order_start_date: true,
        users_terminals: {
          select: {
            terminals: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    const customDateCouriers = [];
    couriers.forEach((item) => {
      if (dayjs(item.order_start_date).isSame(dayjs(), 'month')) {
        customDateCouriers.push({
          courier_id: item.id,
          order_start_date: item.order_start_date,
        });
        delete couriersByTerminalById[item.id];
      }
    });

    query = query.filter((item) => customDateCouriers.find((i) => i.courier_id === item.courier_id) == null);

    if (customDateCouriers.length) {
      const customDateQueries = [];
      const transaction = customDateCouriers.map(async (item) => {
        const customDateQuery = await this.prismaService.$queryRawUnsafe<GarantReportItem[]>(
          `
      SELECT MIN(o.created_at) AS begin_date,
             MAX(o.created_at) AS last_order_date,
             SUM(o.delivery_price) AS delivery_price,
             CONCAT(u.first_name, ' ', u.last_name) AS courier,
             COUNT(o.id) AS orders_count,
             AVG(extract_duration('minute', age(o.finished_date, o.created_at))) AS avg_delivery_time,
             array_agg(date_trunc('day', o.created_at)) AS orders_dates,
             o.courier_id
      FROM orders o
      LEFT JOIN order_status os ON o.order_status_id = os.id
      LEFT JOIN users u ON o.courier_id = u.id
      WHERE o.created_at >= '${dayjs(item.order_start_date).format(
        'YYYY-MM-DD',
      )} 00:00:00' AND o.created_at <= '${dayjs(sqlEndDate).format(
            'YYYY-MM-DD',
          )} 04:00:00' AND os.finish = true AND o.courier_id = '${item.courier_id}'
      GROUP BY o.courier_id, u.first_name, u.last_name
      ORDER BY courier;
    `,
        );

        customDateQueries.push(customDateQuery);
      });

      await Promise.all(transaction);

      // console.log(customDateQueries);

      if (customDateQueries.length) {
        customDateQueries.forEach((item) => {
          query.push(...item);
        });
      }

      const customTerminalQueries = [];
      const byTerminalTransaction = customDateCouriers.map(async (item) => {
        const customDateQuery = await this.prismaService.$queryRawUnsafe<GarantReportItem[]>(
          `
      SELECT SUM(o.delivery_price) AS delivery_price,
             CONCAT(u.first_name, ' ', u.last_name) AS courier,
             o.courier_id,
             o.courier_id,
             o.organization_id,
             o.terminal_id
      FROM orders o
      LEFT JOIN order_status os ON o.order_status_id = os.id
      LEFT JOIN users u ON o.courier_id = u.id
      WHERE o.created_at >= '${dayjs(item.order_start_date).format(
        'YYYY-MM-DD',
      )} 00:00:00' AND o.created_at <= '${dayjs(sqlEndDate).format(
            'YYYY-MM-DD',
          )} 04:00:00' AND os.finish = true AND o.courier_id = '${item.courier_id}'
      GROUP BY o.courier_id, o.terminal_id, o.organization_id, u.first_name, u.last_name
      ORDER BY courier;
    `,
        );

        customTerminalQueries.push(customDateQuery);
      });

      await Promise.all(byTerminalTransaction);

      // console.log(customDateQueries);

      if (customTerminalQueries.length) {
        // customTerminalQueries.forEach((item) => {
        //   query.push(...item);
        // });

        customTerminalQueries.forEach((item) => {
          if (!couriersByTerminalById[item.courier_id]) {
            couriersByTerminalById[item.courier_id] = [];
            organizations.forEach((org) => {
              couriersByTerminalById[item.courier_id].push({
                id: org.id,
                name: org.name,
                children: [],
              });
            });
          }
          organizations.forEach((org) => {
            if (org.id === item.organization_id) {
              couriersByTerminalById[item.courier_id].forEach((orgItem) => {
                if (orgItem.id === item.organization_id) {
                  const terminal = terminals.find((terminal) => terminal.id === item.terminal_id);
                  orgItem.children.push({
                    ...item,
                    terminal_name: terminal ? terminal.name : '',
                  });
                }
              });
            }
          });
        });
      }
    }

    const couriersById = couriers.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
    let walletQuery = [];
    if (walletEndDate) {
      walletQuery = await this.prismaService.$queryRawUnsafe<
        {
          total_amount: number;
          courier_id: string;
        }[]
      >(`select sum(amount) as total_amount, courier_id
        from order_transactions
        where status = 'pending' and created_at <= '${sqlWalletEndDate} 04:00:00'
        ${
          courierId
            ? `and courier_id in (${courierId.map((id) => `'${id}'`).join(',')})`
            : courierIds.length
            ? `and courier_id in (${courierIds.map((id) => `'${id}'`).join(',')})`
            : ''
        }
        group by courier_id`);
    }

    // get couriers terminalIds
    const terminalIds = await this.prismaService.users_terminals.findMany({
      where: {
        user_id: {
          in: courierIds,
        },
      },
      select: {
        terminal_id: true,
        user_id: true,
      },
    });

    const terminalIdsByCourier = terminalIds.reduce((acc, item) => {
      if (!acc[item.user_id]) {
        acc[item.user_id] = [];
      }
      acc[item.user_id].push(item.terminal_id);
      return acc;
    }, {});

    if (filteredTerminalIds && filteredTerminalIds.length) {
      const filteredCourierIds = Object.keys(terminalIdsByCourier).filter((courierId) => {
        const courierTerminalIds = terminalIdsByCourier[courierId];
        return courierTerminalIds.some((terminalId) => filteredTerminalIds.includes(terminalId));
      });
      query = query.filter((item) => filteredCourierIds.includes(item.courier_id));
      courierIds = courierIds.filter((id) => filteredCourierIds.includes(id));
    }
    const workStartHour = await this.cacheControl.getSetting('work_start_time');

    const balanceQuery = await this.prismaService.$queryRawUnsafe<
      {
        courier_id: string;
        balance: number;
      }[]
    >(`select courier_id, sum(amount) as balance
          from order_transactions
            where courier_id in (${courierIds
              .map((id) => `'${id}'`)
              .join(',')}) and status = 'pending' and created_at >= '${sqlStartDate}' and created_at <= '${sqlEndDate}'
          group by courier_id`);

    const balanceById = balanceQuery.reduce((acc, item) => {
      acc[item.courier_id] = item.balance;
      return acc;
    }, {});

    const result = [];

    let garantPrices = await this.cacheControl.getSetting('garant_prices');
    let garantPrice = 5000000;
    let terminalCloseDays = await this.cacheControl.getSetting('terminal_close_days');
    try {
      garantPrices = JSON.parse(garantPrices);
    } catch (e) {
      console.log('can not calculate garant price', e);
    }
    try {
      terminalCloseDays = JSON.parse(terminalCloseDays);
      // group by terminal_id
      terminalCloseDays = terminalCloseDays.reduce((acc, item) => {
        if (!acc[item.terminal_id]) {
          acc[item.terminal_id] = [];
        }
        acc[item.terminal_id].push(dayjs(item.date.split('T')[0]));
        return acc;
      }, {});
    } catch (e) {
      console.log('can not parse terminal close days', e);
    }

    query.forEach((item) => {
      if (!item.courier_id) {
        return;
      }

      if (garantPrices) {
        const garantPriceObject = garantPrices.find(
          (priceItem) => priceItem.drive_type === couriersById[item.courier_id].drive_type,
        );
        if (garantPriceObject) {
          garantPrice = +garantPriceObject.price;
        }
      }

      const resultItem = {
        ...item,
      };
      resultItem.orders_count = Number(resultItem.orders_count);
      resultItem.orders_dates = resultItem.orders_dates.filter(
        (date, i, self) => self.findIndex((d) => d.getTime() === date.getTime()) === i,
      );
      const order_dates = [...resultItem.orders_dates];
      resultItem.delivery_price_orgs = couriersByTerminalById[item.courier_id];

      // sort by date
      order_dates.sort((a, b) => a.getTime() - b.getTime());
      resultItem.orders_dates.sort((a, b) => a.getTime() - b.getTime());

      if (item.courier_id == 'cd3932d8-3c57-459a-a36e-2c0a5dfb30f8') {
        // console.log('orders_dates', order_dates);
      }
      resultItem.drive_type = couriersById[item.courier_id].drive_type;
      if (couriersById[item.courier_id].users_terminals && couriersById[item.courier_id].users_terminals.length) {
        if (couriersById[item.courier_id].users_terminals[0].terminals) {
          resultItem.terminal_name = couriersById[item.courier_id].users_terminals[0].terminals.name;
        }
      }

      couriersById[item.courier_id].created_at.setHours(0, 0, 0, 0);
      resultItem.created_at = couriersById[item.courier_id].created_at;
      if (dayjs(resultItem.last_order_date).isToday()) {
        resultItem.last_order_date = dayjs(resultItem.last_order_date).add(-1, 'd').toDate();
      }
      const userCreatedAtStart = dayjs(resultItem.created_at).format('YYYY-MM-DD');
      const firstOrderDateStart = dayjs(resultItem.begin_date).format('YYYY-MM-DD');
      const lastOrderDateStart = dayjs(resultItem.last_order_date).format('YYYY-MM-DD');
      const isRegisteredThisMonth = dayjs(userCreatedAtStart).isBetween(
        dayjs(firstOrderDateStart),
        dayjs(lastOrderDateStart),
        null,
        '[]',
      );
      let actualDayOffs = 0;
      let possibleDayOffs = 4;
      /*if (isRegisteredThisMonth) {
        // difference between first day and start date in weeks using dayjs
        const weeks = dayjs(lastOrderDateStart).diff(dayjs(firstOrderDateStart), 'week');
        possibleDayOffs = weeks;
      } else */
      if (dayjs(userCreatedAtStart).isBetween(dayjs(sqlStartDate), dayjs(sqlEndDate), null, '[]')) {
        const weeks = dayjs(lastOrderDateStart).diff(dayjs(userCreatedAtStart), 'week');
        possibleDayOffs = weeks;
        if (dayjs(sqlStartDate).isSame(dayjs(), 'month')) {
          possibleDayOffs = dayjs(sqlEndDate).diff(dayjs(userCreatedAtStart), 'week');
        }
      }

      const datesBetween = [];
      const beginDate = new Date(resultItem.begin_date);
      beginDate.setHours(beginDate.getHours() + 5);
      let dayOffStartDate = [...order_dates][0];
      if (dayjs(resultItem.created_at).isBefore(dayjs(startDate))) {
        if (prevMonthByCourier[item.courier_id]) {
          if (prevMonthByCourier[item.courier_id].total_orders > 0) {
            dayOffStartDate = startDate;
          }
        }
      }
      const date = new Date(dayOffStartDate.getTime());
      let currentDate = dayjs(sqlEndDate).toDate();
      // check if sqlStartDate is current month
      if (dayjs(sqlStartDate).isSame(dayjs(), 'month')) {
        currentDate = dayjs().add(-1, 'd').toDate();
      }
      currentDate.setHours(0, 0, 0, 0);
      // date.setHours(0, 0, 0, 0);
      while (date <= currentDate) {
        datesBetween.push(dayjs(date.toISOString().split('T')[0]).hour(0).minute(0).second(0));
        date.setDate(date.getDate() + 1);
      }

      resultItem.actual_day_offs_list = [];

      datesBetween.forEach((date) => {
        const orderDate = order_dates.find((d) => {
          return dayjs(d).format('YYYY-MM-DD') === date.format('YYYY-MM-DD');
        });
        let isDayOff = false;
        if (!orderDate) {
          isDayOff = true;
        }

        if (isDayOff && terminalCloseDays) {
          const courierTerminals = terminalIdsByCourier[item.courier_id];
          if (courierTerminals) {
            courierTerminals.forEach((terminal) => {
              const terminalCloseDates = terminalCloseDays[terminal];
              if (terminalCloseDates) {
                const isTerminalCloseDay = terminalCloseDates.find((d) => dayjs(d).isSame(date));
                if (isTerminalCloseDay) {
                  isDayOff = false;
                }
              }
            });
          }
        }

        if (isDayOff) {
          actualDayOffs++;
          resultItem.actual_day_offs_list.push(date.tz('Asia/Tashkent').add(1, 'day').toDate());
        }
      });

      resultItem.formatted_avg_delivery_time = this.fancyTimeFormat(resultItem.avg_delivery_time);
      resultItem.actual_day_offs = actualDayOffs;

      let giveGarant = true;
      if (actualDayOffs > possibleDayOffs) {
        giveGarant = false;
      }

      const order_dates_day = [];
      order_dates.forEach((date) => {
        const dateObj = dayjs.tz(date, 'Asia/Tashkent'); //.add(5, 'hour');
        const hour = dateObj.hour();
        let dateString = dateObj.format('YYYY-MM-DD');
        if (hour <= workStartHour) {
          dateString = dateObj.subtract(1, 'day').format('YYYY-MM-DD');
        }

        if (!order_dates_day.includes(dateString)) {
          order_dates_day.push(dateString);
        }
      });
      resultItem.order_dates_count = order_dates_day.length;
      if (walletEndDate) {
        resultItem.balance =
          walletQuery.find((walletItem) => walletItem.courier_id === item.courier_id)?.total_amount || 0;
      } else {
        resultItem.balance = balanceById[item.courier_id] ? +balanceById[item.courier_id] : 0;
      }
      resultItem.earned = +resultItem.delivery_price - +resultItem.balance;
      currentDate = dayjs(sqlEndDate).toDate();
      // check if sqlStartDate is current month
      if (dayjs(sqlStartDate).isSame(dayjs(), 'month')) {
        currentDate = dayjs().add(-1, 'd').toDate();
      } else {
        currentDate = dayjs(currentDate).add(-1, 'd').toDate();
      }
      currentDate.setHours(0, 0, 0, 0);
      if (item.courier_id == 'cd3932d8-3c57-459a-a36e-2c0a5dfb30f8') {
        console.log('currentDate', currentDate);
      }
      const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
      const workDays = dayjs(resultItem.last_order_date).diff(dayjs(resultItem.begin_date), 'day') + 1;
      resultItem.garant_days = resultItem.order_dates_count;
      if (giveGarant) {
        // resultItem.garant_price = Math.round(((garantPrice / daysInMonth) * workDays) / 1000) * 1000;
        resultItem.garant_price =
          Math.round(((garantPrice / daysInMonth) * resultItem.orders_dates.length) / 1000) * 1000;
        resultItem.balance_to_pay = Math.round((resultItem.garant_price - resultItem.delivery_price) / 1000) * 1000;
      } else {
        const possibleGarantPrice = Math.round(((garantPrice / daysInMonth) * workDays) / 1000) * 1000;
        resultItem.possible_garant_price =
          Math.round(((garantPrice / daysInMonth) * resultItem.orders_dates.length) / 1000) * 1000;
        resultItem.possible_garant_price = Math.round((possibleGarantPrice - resultItem.delivery_price) / 1000) * 1000;
      }

      resultItem.possible_day_offs = possibleDayOffs;
      resultItem.status = couriersById[item.courier_id].status;
      result.push(resultItem);
    });
    return result;
  }

  fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    const hrs = ~~(+duration / 3600);
    const mins = ~~((+duration % 3600) / 60);
    const secs = ~~+duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = '';

    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }

    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    return ret;
  }

  async addOrderNotes(orderId: string, notes: string, user: users) {
    const existingOrder = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        operator_notes: true,
        terminal_id: true,
      },
    });

    await this.prismaService.order_actions.create({
      data: {
        order_id: orderId,
        action: 'changed_field',
        action_text: 'Изменено поле "Примечание к заказу" с "' + existingOrder.operator_notes + '" на "' + notes + '"',
        terminal_id: existingOrder.terminal_id,
        created_by: user.id,
      },
    });

    await this.prismaService.orders.update({
      where: {
        id: orderId,
      },
      data: {
        operator_notes: notes,
      },
    });
    return true;
  }

  async getCouriersEfficiency(
    startDate: Date,
    endDate: Date,
    user: users,
    status: string[],
    courierId: string[],
    terminalId: string[],
  ) {
    const query = await this.prismaService.$queryRawUnsafe<
      {
        courier_id: string;
        terminal_id: string;
        hour_period: string;
        courier_count: number;
        total_count: number;
        courier_percentage: number;
      }[]
    >(`WITH total_orders AS (
      SELECT terminal_id,
             (CASE
                WHEN extract(hour from created_at) BETWEEN 5 AND 9 THEN '10:00-15:00'
                WHEN extract(hour from created_at) BETWEEN 10 AND 16 THEN '15:00-22:00'
                ELSE '22:00-03:00'
               END) AS hour_period,
             count(*) AS total_count
      FROM orders
      WHERE created_at BETWEEN '${dayjs(startDate).add(-5, 'hour').format('YYYY-MM-DD HH:mm:ss')}' AND '${dayjs(endDate)
      .add(-5, 'hour')
      .format('YYYY-MM-DD HH:mm:ss')}'
      ${terminalId && terminalId.length ? `AND terminal_id IN ('${terminalId.join("','")}')` : ''}
      GROUP BY terminal_id, hour_period
    ), courier_orders AS (
      SELECT terminal_id, courier_id,
             (CASE
                WHEN extract(hour from created_at) BETWEEN 5 AND 9 THEN '10:00-15:00'
                WHEN extract(hour from created_at) BETWEEN 10 AND 16 THEN '15:00-22:00'
                ELSE '22:00-03:00'
               END) AS hour_period,
             count(*) AS courier_count
      FROM orders
      WHERE created_at BETWEEN '${dayjs(startDate).add(-5, 'hour').format('YYYY-MM-DD HH:mm:ss')}' AND '${dayjs(endDate)
      .add(-5, 'hour')
      .format('YYYY-MM-DD HH:mm:ss')}'
        ${courierId && courierId.length ? `AND courier_id IN ('${courierId.join("','")}')` : ''}
        ${terminalId && terminalId.length ? `AND terminal_id IN ('${terminalId.join("','")}')` : ''}
      GROUP BY terminal_id, courier_id, hour_period
    )
    SELECT courier_orders.terminal_id, courier_orders.courier_id, courier_orders.hour_period,
           courier_orders.courier_count, total_orders.total_count,
           (courier_orders.courier_count / total_orders.total_count) * 100 AS courier_percentage
    FROM total_orders
           JOIN courier_orders
                ON total_orders.terminal_id = courier_orders.terminal_id
                  AND total_orders.hour_period = courier_orders.hour_period`);

    console.log(
      'courier efficiency query',
      `WITH total_orders AS (
      SELECT terminal_id,
             (CASE
                WHEN extract(hour from created_at) BETWEEN 5 AND 9 THEN '10:00-15:00'
                WHEN extract(hour from created_at) BETWEEN 10 AND 16 THEN '15:00-22:00'
                ELSE '22:00-03:00'
               END) AS hour_period,
             count(*) AS total_count
      FROM orders
      WHERE created_at BETWEEN '${dayjs(startDate).add(-5, 'hour').format('YYYY-MM-DD HH:mm:ss')}' AND '${dayjs(endDate)
        .add(-5, 'hour')
        .format('YYYY-MM-DD HH:mm:ss')}'
      ${terminalId && terminalId.length ? `AND terminal_id IN ('${terminalId.join("','")}')` : ''}
      GROUP BY terminal_id, hour_period
    ), courier_orders AS (
      SELECT terminal_id, courier_id,
             (CASE
                WHEN extract(hour from created_at) BETWEEN 5 AND 9 THEN '10:00-15:00'
                WHEN extract(hour from created_at) BETWEEN 10 AND 16 THEN '15:00-22:00'
                ELSE '22:00-03:00'
               END) AS hour_period,
             count(*) AS courier_count
      FROM orders
      WHERE created_at BETWEEN '${dayjs(startDate).add(-5, 'hour').format('YYYY-MM-DD HH:mm:ss')}' AND '${dayjs(endDate)
        .add(-5, 'hour')
        .format('YYYY-MM-DD HH:mm:ss')}'
        ${courierId && courierId.length ? `AND courier_id IN ('${courierId.join("','")}')` : ''}
        ${terminalId && terminalId.length ? `AND terminal_id IN ('${terminalId.join("','")}')` : ''}
      GROUP BY terminal_id, courier_id, hour_period
    )
    SELECT courier_orders.terminal_id, courier_orders.courier_id, courier_orders.hour_period,
           courier_orders.courier_count, total_orders.total_count,
           (courier_orders.courier_count / total_orders.total_count) * 100 AS courier_percentage
    FROM total_orders
           JOIN courier_orders
                ON total_orders.terminal_id = courier_orders.terminal_id
                  AND total_orders.hour_period = courier_orders.hour_period`,
    );

    const res: CourierEfficiencyReportItem[] = [];
    const courierIds = [];
    const terminalIds = [];
    query.forEach((item) => {
      if (!courierIds.includes(item.courier_id)) {
        courierIds.push(item.courier_id);
      }
      if (!terminalIds.includes(item.terminal_id)) {
        terminalIds.push(item.terminal_id);
      }
    });

    // remove null values from courierIds
    const filteredCourierIds = courierIds.filter((courierId) => courierId !== null);

    const courierStatusWhere = {
      id: {
        in: filteredCourierIds,
      },
    };

    if (status && status.length) {
      courierStatusWhere['status'] = {
        in: status,
      };
    }

    const courierData = {};
    const couriers = await this.prismaService.users.findMany({
      where: courierStatusWhere,
      select: {
        id: true,
        first_name: true,
        last_name: true,
        phone: true,
        drive_type: true,
      },
    });
    couriers.forEach((courier) => {
      courierData[courier.id] = courier;
    });

    const terminals = await this.cacheControl.getTerminals();
    const terminalData = {};
    terminals.forEach((terminal) => {
      terminalData[terminal.id] = terminal;
    });

    const resultData = {};

    query.forEach((item) => {
      if (!courierStatusWhere) {
        return;
      }
      const courier = courierData[item.courier_id];
      const terminal = terminalData[item.terminal_id];
      if (courier && terminal) {
        if (!resultData[item.courier_id]) {
          resultData[item.courier_id] = {
            courier_id: item.courier_id,
            first_name: courier.first_name,
            last_name: courier.last_name,
            phone: courier.phone,
            drive_type: courier.drive_type,
            courier_count: 0,
            total_count: 0,
            efficiency: 0,
            terminals: [],
          };
        }

        let couriersForPeriod = [];
        if (couriersForPeriod.length) {
          couriersForPeriod = couriersForPeriod.filter((courierId) => courierId !== null);
          couriersForPeriod = uniq(couriersForPeriod);
        }

        const countOfCouriers = couriersForPeriod.length;

        resultData[item.courier_id].terminals.push({
          terminal_id: item.terminal_id,
          terminal_name: terminal.name,
          courier_count: Number(item.courier_count),
          total_count: Number(item.total_count),
          efficiency: item.courier_percentage,
          hour_period: item.hour_period,
          courier_percentage: item.courier_percentage,
        });
      }
    });

    Object.keys(resultData).forEach((key) => {
      const courier = resultData[key];
      let efficiency = 0;
      courier.terminals.forEach((terminal) => {
        courier.courier_count += terminal.courier_count;
        courier.total_count += terminal.total_count;
        efficiency += +terminal.efficiency;
      });
      courier.efficiency = (efficiency / courier.terminals.length).toFixed(1);
      res.push(courier);
    });

    return res;
  }

  async calculateGarantByCourier(startDate: Date, endDate: Date, user: users) {
    const garantData = await this.calculateGarant(startDate, endDate, user, [user.id]);
    return garantData[0];
  }

  async mySuccessOrders(startDate: Date, endDate: Date, user: users) {
    const sqlStartDate = dayjs(startDate).hour(0).minute(0).second(0).toDate();
    const sqlEndDate = dayjs(endDate).add(2, 'day').toDate();
    const orders = await this.prismaService.orders.findMany({
      where: {
        created_at: {
          gte: sqlStartDate,
          lte: sqlEndDate,
        },
        courier_id: user.id,
        orders_order_status: {
          finish: {
            equals: true,
          },
        },
      },
      select: {
        id: true,
        order_number: true,
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            finish: true,
            cancel: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
        created_at: true,
        pre_distance: true,
        delivery_address: true,
        delivery_price: true,
        order_price: true,
        payment_type: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
    return orders;
  }

  async courierWithdraws(startDate: Date, endDate: Date, user: users) {
    const sqlStartDate = dayjs(startDate).hour(0).minute(0).second(0).toDate();
    const sqlEndDate = dayjs(endDate).add(2, 'day').toDate();
    const withdraws = await this.prismaService.manager_withdraw.findMany({
      where: {
        created_at: {
          gte: sqlStartDate,
          lte: sqlEndDate,
        },
        courier_id: user.id,
      },
      select: {
        id: true,
        amount: true,
        created_at: true,
        manager_withdraw_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
        manager_withdraw_managers: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    });
    return withdraws;
  }

  async getCouriersEfficiencyByPeriod(startDate: Date, endDate: Date, courierId: string, user: users) {
    const userTerminals = await this.prismaService.users_terminals.findMany({
      where: {
        user_id: courierId,
      },
      select: {
        terminal_id: true,
      },
    });
    const query = await this.prismaService.$queryRawUnsafe<
      {
        courier_id: string;
        terminal_id: string;
        hour_period: string;
        courier_count: number;
        total_count: number;
        courier_percentage: number;
        courier_ids: string[];
        order_day: string;
      }[]
    >(`WITH total_orders AS (
    SELECT terminal_id,
           date_trunc('day', created_at) AS order_day,
           (CASE
                WHEN extract(hour from created_at) BETWEEN 5 AND 9 THEN '10:00-15:00'
                WHEN extract(hour from created_at) BETWEEN 10 AND 16 THEN '15:00-22:00'
                ELSE '22:00-03:00'
               END) AS hour_period,
           array_agg(courier_id) AS courier_ids,
           count(*) AS total_count
    FROM orders
    WHERE created_at BETWEEN '${dayjs(startDate).add(-5, 'hour').format('YYYY-MM-DD HH:mm:ss')}' AND '${dayjs(endDate)
      .add(-5, 'hour')
      .format('YYYY-MM-DD HH:mm:ss')}' AND terminal_id IN ('${userTerminals
      .map((item) => item.terminal_id)
      .join("','")}')
    GROUP BY terminal_id, order_day, hour_period
), courier_orders AS (
    SELECT terminal_id, courier_id,
           date_trunc('day', created_at) AS order_day,
           (CASE
                WHEN extract(hour from created_at) BETWEEN 5 AND 9 THEN '10:00-15:00'
                WHEN extract(hour from created_at) BETWEEN 10 AND 16 THEN '15:00-22:00'
                ELSE '22:00-03:00'
               END) AS hour_period,
           count(*) AS courier_count
    FROM orders
    WHERE created_at BETWEEN '${dayjs(startDate).add(-5, 'hour').format('YYYY-MM-DD HH:mm:ss')}' AND '${dayjs(endDate)
      .add(-5, 'hour')
      .format('YYYY-MM-DD HH:mm:ss')}'
      AND courier_id = '${courierId}'
      AND terminal_id IN ('${userTerminals.map((item) => item.terminal_id).join("','")}')
    GROUP BY terminal_id, courier_id, order_day, hour_period
)
SELECT courier_orders.terminal_id, courier_orders.courier_id, courier_orders.hour_period, courier_orders.order_day,
       courier_orders.courier_count, total_orders.total_count, total_orders.courier_ids,
       (courier_orders.courier_count / total_orders.total_count) * 100 AS courier_percentage
FROM total_orders
         JOIN courier_orders
              ON total_orders.terminal_id = courier_orders.terminal_id
                  AND total_orders.order_day = courier_orders.order_day
                  AND total_orders.hour_period = courier_orders.hour_period
ORDER BY courier_orders.terminal_id, courier_orders.order_day, courier_orders.hour_period`);

    const resultData = {};

    query.map((item) => {
      if (!resultData[`${dayjs(item.order_day).format('YYYY-MM-DD')}_${item.courier_id}`]) {
        resultData[`${dayjs(item.order_day).format('YYYY-MM-DD')}_${item.courier_id}`] = {
          id: `${dayjs(item.order_day).format('YYYY-MM-DD')}_${item.courier_id}`,
          courier_id: item.courier_id,
          order_day: dayjs(item.order_day).format('DD.MM.YYYY'),
          hour_period: [],
        };
      }

      let couriersForPeriod = item.courier_ids ? item.courier_ids : [];
      if (couriersForPeriod.length) {
        couriersForPeriod = couriersForPeriod.filter((courierId) => courierId !== null);
        couriersForPeriod = uniq(couriersForPeriod);
      }

      const countOfCouriers = couriersForPeriod.length;

      resultData[`${dayjs(item.order_day).format('YYYY-MM-DD')}_${item.courier_id}`].hour_period.push({
        period: item.hour_period,
        courier_count: Number(item.courier_count),
        total_count: Number(item.total_count),
        efficiency: ((Number(item.courier_count) / (Number(item.total_count) / countOfCouriers)) * 100).toFixed(1),
        courier_ids: couriersForPeriod,
      });
    });

    Object.keys(resultData).map((key) => {
      resultData[key].efficiency = (
        resultData[key].hour_period.reduce((acc, item) => {
          return acc + Number(item.efficiency);
        }, 0) / resultData[key].hour_period.length
      ).toFixed(1);
    });
    return Object.values(resultData);
  }

  async getCouriersEfficiencyByHour(startDate: Date, endDate: Date, courierId: string, user: users) {
    const userTerminals = await this.prismaService.users_terminals.findMany({
      where: {
        user_id: courierId,
      },
      select: {
        terminal_id: true,
      },
    });
    const query = await this.prismaService.$queryRawUnsafe<
      {
        courier_id: string;
        terminal_id: string;
        order_hour: string;
        courier_count: number;
        total_count: number;
        courier_percentage: number;
        courier_ids: string[];
        order_day: string;
      }[]
    >(`WITH total_orders AS (
    SELECT terminal_id,
           date_trunc('day', created_at) AS order_day,
           extract(hour from created_at) + 5 AS order_hour,
           array_agg(courier_id) AS courier_ids,
           count(*) AS total_count
    FROM orders
    WHERE created_at BETWEEN '${dayjs(startDate).add(-5, 'hour').format('YYYY-MM-DD HH:mm:ss')}' AND '${dayjs(endDate)
      .add(-5, 'hour')
      .format('YYYY-MM-DD HH:mm:ss')}' AND terminal_id IN ('${userTerminals
      .map((item) => item.terminal_id)
      .join("','")}')
    GROUP BY terminal_id, order_day, order_hour
), courier_orders AS (
    SELECT terminal_id, courier_id,
           date_trunc('day', created_at) AS order_day,
           extract(hour from created_at) + 5 AS order_hour,
           count(*) AS courier_count
    FROM orders
    WHERE created_at BETWEEN '${dayjs(startDate).add(-5, 'hour').format('YYYY-MM-DD HH:mm:ss')}' AND '${dayjs(endDate)
      .add(-5, 'hour')
      .format('YYYY-MM-DD HH:mm:ss')}'
      AND courier_id = '${courierId}'
      AND terminal_id IN ('${userTerminals.map((item) => item.terminal_id).join("','")}')
    GROUP BY terminal_id, courier_id, order_day, order_hour
)
SELECT courier_orders.terminal_id, courier_orders.courier_id, courier_orders.order_hour, courier_orders.order_day,
       courier_orders.courier_count, total_orders.total_count, total_orders.courier_ids,
       (courier_orders.courier_count / total_orders.total_count) * 100 AS courier_percentage
FROM total_orders
         JOIN courier_orders
              ON total_orders.terminal_id = courier_orders.terminal_id
                  AND total_orders.order_day = courier_orders.order_day
                  AND total_orders.order_hour = courier_orders.order_hour
ORDER BY courier_orders.terminal_id, courier_orders.order_day, courier_orders.order_hour`);

    const resultData = {};

    query.map((item) => {
      if (!resultData[`${dayjs(item.order_day).format('YYYY-MM-DD')}_${item.courier_id}`]) {
        resultData[`${dayjs(item.order_day).format('YYYY-MM-DD')}_${item.courier_id}`] = {
          id: `${dayjs(item.order_day).format('YYYY-MM-DD')}_${item.courier_id}`,
          courier_id: item.courier_id,
          order_day: dayjs(item.order_day).format('DD.MM.YYYY'),
          hour_period: [],
          hour_objects: {},
        };
      }

      let couriersForPeriod = item.courier_ids ? item.courier_ids : [];
      if (couriersForPeriod.length) {
        couriersForPeriod = couriersForPeriod.filter((courierId) => courierId !== null);
        couriersForPeriod = uniq(couriersForPeriod);
      }

      const countOfCouriers = couriersForPeriod.length;

      if (
        !resultData[`${dayjs(item.order_day).format('YYYY-MM-DD')}_${item.courier_id}`].hour_objects[item.order_hour]
      ) {
        resultData[`${dayjs(item.order_day).format('YYYY-MM-DD')}_${item.courier_id}`].hour_objects[item.order_hour] =
          [];
      }

      resultData[`${dayjs(item.order_day).format('YYYY-MM-DD')}_${item.courier_id}`].hour_objects[item.order_hour].push(
        {
          period: item.order_hour,
          courier_count: Number(item.courier_count),
          total_count: Number(item.total_count),
          efficiency: ((Number(item.courier_count) / (Number(item.total_count) / countOfCouriers)) * 100).toFixed(1),
          courier_ids: couriersForPeriod,
        },
      );

      // resultData[`${dayjs(item.order_day).format('YYYY-MM-DD')}_${item.courier_id}`].hour_period.push({
      //   period: item.order_hour,
      //   courier_count: Number(item.courier_count),
      //   total_count: Number(item.total_count),
      //   efficiency: ((Number(item.courier_count) / (Number(item.total_count) / countOfCouriers)) * 100).toFixed(1),
      //   courier_ids: couriersForPeriod,
      // });
    });

    Object.keys(resultData).map((key) => {
      resultData[key].hour_period = Object.keys(resultData[key].hour_objects).map((hour) => {
        return {
          period: hour,
          courier_count: resultData[key].hour_objects[hour].reduce((acc, item) => {
            return acc + Number(item.courier_count);
          }, 0),
          total_count: resultData[key].hour_objects[hour].reduce((acc, item) => {
            return acc + Number(item.total_count);
          }, 0),
          efficiency: (
            resultData[key].hour_objects[hour].reduce((acc, item) => {
              return acc + Number(item.efficiency);
            }, 0) / resultData[key].hour_objects[hour].length || 0
          ).toFixed(1),
        };
      });
      resultData[key].efficiency = (
        resultData[key].hour_period.reduce((acc, item) => {
          return acc + Number(item.efficiency);
        }, 0) / resultData[key].hour_period.length
      ).toFixed(1);
    });
    return Object.values(resultData);
  }

  async sendOperatorNotification(message: string, user: users) {
    const operators = await this.prismaService.users.findMany({
      where: {
        users_roles_usersTousers_roles_user_id: {
          some: {
            roles: {
              code: {
                in: ['operator', 'admin', 'super_admin'],
              },
            },
          },
        },
        fcm_token: {
          not: null,
        },
      },
      select: {
        fcm_token: true,
      },
    });

    const serverKey = await this.configService.get('FCM_SERVER_KEY');
    // console.log('operators', operators);
    // console.log('payload', {
    //   notification: {
    //     title: 'New notify',
    //     body: message,
    //   },
    //   data: {
    //     actionButtons: [
    //       {
    //         key: 'REDIRECT',
    //         label: 'Redirect',
    //         // autoDismissible: true,
    //       },
    //       {
    //         key: 'DISMISS',
    //         label: 'Dismiss',
    //         actionType: 'DismissAction',
    //         isDangerousOption: true,
    //         // autoDismissible: true,
    //       },
    //     ],
    //   },
    // });
    const data = await sendNotification(
      serverKey,
      operators.map((user) => user.fcm_token),
      {
        notification: {
          title: 'New notify',
          body: message,
          click_action: 'https://admin.arryt.uz/orders',
          data: {
            url: '/orders',
            actionButtons: [
              {
                key: 'REDIRECT',
                label: 'Redirect',
                // autoDismissible: true,
              },
              {
                key: 'DISMISS',
                label: 'Dismiss',
                actionType: 'DismissAction',
                isDangerousOption: true,
                // autoDismissible: true,
              },
            ],
          },
        },
        data: {
          url: '/orders',
          actionButtons: [
            {
              key: 'REDIRECT',
              label: 'Redirect',
              // autoDismissible: true,
            },
            {
              key: 'DISMISS',
              label: 'Dismiss',
              actionType: 'DismissAction',
              isDangerousOption: true,
              // autoDismissible: true,
            },
          ],
        },
      },
    );
    console.log('message notification', data);
    return true;
  }

  async checkMissedOrdersIndex() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const mapping = {
      properties: {
        order_id: {
          type: 'keyword',
        },
        order_created_at: {
          type: 'date',
        },
        system_minutes_config: {
          type: 'integer',
        },
        created_at: {
          type: 'date',
        },
        order_number: {
          type: 'keyword',
        },
        terminal_id: {
          type: 'keyword',
        },
        organization_id: {
          type: 'keyword',
        },
        status: {
          type: 'keyword',
        },
        payment_type: {
          type: 'keyword',
        },
        updated_at: {
          type: 'date',
        },
        updated_by: {
          properties: {
            id: {
              type: 'keyword',
            },
            first_name: {
              type: 'keyword',
            },
            last_name: {
              type: 'keyword',
            },
          },
        },
      },
    };

    const indexName = `${projectPrefix}_missed_orders`;
    return await this.searchService.ensureIndexExists(indexName, mapping);
  }

  // @Cron('0 */2 * * * *')

  async sendOperatorNotificationOfNewOrder() {
    console.log('sendOperatorNotificationOfNewOrder', new Date().toISOString());
    // /orders?pageSize=200&current=1&sorter[0][field]=created_at&sorter[0][order]=desc&filters[0][field]=created_at&filters[0][operator]=gte&filters[0][value]=2023-03-09T19:00:00.000Z&filters[1][field]=created_at&filters[1][operator]=lte&filters[1][value]=2023-03-10T18:59:59.999Z&filters[2][field]=order_status_id&filters[2][operator]=in&filters[2][value][0]=1c3512db-a877-444c-977e-7b9effbe31a8&filters[2][value][1]=b55f0917-d915-4d8e-9cda-64793f72d036
    let searchOrgOrders = await this.searchService.searchNewOrdersForLastHour();
    searchOrgOrders = searchOrgOrders.filter((order) => {
      return order.organization_id !== '7718e8e5-a23e-4d98-b9a6-5b85115c4fa5';
    });
    const minutes = await this.systemConfigsService.systemConfigByKey('late_order_time');
    const searchOrgOrdersCount = searchOrgOrders.length;
    if (searchOrgOrdersCount > 0) {
      const operators = await this.prismaService.users.findMany({
        where: {
          users_roles_usersTousers_roles_user_id: {
            some: {
              roles: {
                code: {
                  in: ['operator', 'admin', 'super_admin'],
                },
              },
            },
          },
          fcm_token: {
            not: null,
          },
        },
        select: {
          id: true,
          fcm_token: true,
        },
      });

      // console.log('operators', operators);

      await this.checkMissedOrdersIndex();

      await this.searchService.logMissedOrders(searchOrgOrders, +minutes.value);

      const orderStatuses = await this.cacheControl.getOrderStatuses();
      // order status where order = 1
      const newOrderStatuses = orderStatuses.filter((status) => status.sort == 1);

      // start of day using Date
      const startOfDay = new Date();
      startOfDay.setHours(0, 0, 0, 0);

      // end of day using Date
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const serverKey = await this.configService.get('FCM_SERVER_KEY');
      const data = await sendNotification(
        serverKey,
        operators.map((user) => user.fcm_token),
        {
          notification: {
            title: 'Курьеры не приняли заказы',
            body: `Курьеры не приняли ${searchOrgOrdersCount} заказов`,
            data: {
              url: `/orders?pageSize=200&current=1&sorter[0][field]=created_at&sorter[0][order]=desc&filters[0][field]=created_at&filters[0][operator]=gte&filters[0][value]=${startOfDay.toISOString()}&filters[1][field]=created_at&filters[1][operator]=lte&filters[1][value]=${endOfDay.toISOString()}&filters[2][field]=order_status_id&filters[2][operator]=in&filters[2][value][0]=${
                newOrderStatuses[0].id
              }&filters[2][value][1]=${newOrderStatuses[1].id}`,
            },
          },
        },
      );
    }
    return true;
  }

  async findAllMissedOrders(params: FindManymissedOrdersArgs) {
    await this.checkMissedOrdersIndex();
    let res = await this.searchService.getAllMissedOrders(params);
    const orderIds = res.map((order) => order.order_id);
    const orders = await this.searchService.getOrdersByIds(orderIds);
    const yandexDeliveryData = await this.searchService.getYandexDeliveryData(orderIds);
    const ordersById = orders.reduce((acc, order) => {
      acc[order.id] = order;
      return acc;
    }, {});
    const yandexDeliveryDataById = yandexDeliveryData.reduce((acc, order) => {
      acc[order.order_id] = order;
      return acc;
    }, {});
    const terminals = await this.cacheControl.getTerminals();
    const organizations = await this.cacheControl.getOrganizations();
    const orderStatuses = await this.cacheControl.getOrderStatuses();
    const yandexDeliveryPaymentTypes = await this.systemConfigsService.systemConfigByKey(
      'yandex_delivery_payment_types',
    );
    const yandexDeliveryPaymentTypesArray = yandexDeliveryPaymentTypes.value.split(',');
    res = res.map((order) => {
      const terminal = terminals.find((t) => t.id == order.terminal_id);
      const organization = organizations.find((o) => o.id == order.organization_id);
      let allowYandex = false;
      if (organization.allow_yandex_delivery) {
        if (
          ordersById[order.order_id].courier_id == null &&
          yandexDeliveryPaymentTypesArray.includes(order.payment_type)
        ) {
          allowYandex = true;
        }

        if (yandexDeliveryDataById[order.order_id]) {
          allowYandex = true;
        }
      }
      return {
        ...order,
        terminal_name: terminal.name,
        allowYandex,
        is_courier_set: ordersById[order.order_id].courier_id != null,
        order_status: orderStatuses.find((status) => status.id == ordersById[order.order_id].orders_order_status.id),
        yandex_delivery_data: yandexDeliveryDataById[order.order_id],
      };
    });
    return res;
  }

  missedOrdersConnection(where: missedOrdersWhereInput, user: users) {
    return this.searchService.missedOrdersConnection(where, user);
  }

  async updateMissedOrder(id: string, status: string, user: users) {
    await this.searchService.updateMissedOrder(id, status, user);

    return true;
  }

  async checkYandexDeliveryIndex() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const mapping = {
      properties: {
        order_id: {
          type: 'keyword',
        },
        created_at: {
          type: 'date',
        },
        order_data: {
          type: 'object',
          dynamic: true,
        },
        pricing_data: {
          type: 'object',
          dynamic: true,
        },
      },
    };
    const indexName = `${projectPrefix}_yandex_delivery_orders`;
    return await this.searchService.ensureIndexExists(indexName, mapping);
  }

  async sendOrderToYandex(id: string, user: users) {
    await this.checkYandexDeliveryIndex();
    const order = await this.prismaService.orders.findUnique({
      where: {
        id,
      },
      include: {
        orders_terminals: true,
        orders_customers: true,
      },
    });

    const yandexSenderName = await this.systemConfigsService.systemConfigByKey('yandex_sender_name');
    const yandexSenderPhone = await this.systemConfigsService.systemConfigByKey('yandex_sender_phone');

    const yandexData = {
      callback_properties: {
        callback_url: `https://${this.configService.get('API_DOMAIN')}/api/external/yandex-callback`,
      },
      client_requirements: {
        cargo_options: ['thermobag'],
        door_to_door: true,
        taxi_class: 'express',
      },
      emergency_contact: {
        name: yandexSenderName ? yandexSenderName.value : order.orders_terminals.manager_name,
        phone: yandexSenderPhone ? yandexSenderPhone.value : order.orders_terminals.phone,
      },
      items: [],
      route_points: [
        {
          address: {
            coordinates: [order.orders_terminals.longitude, order.orders_terminals.latitude],
            fullname: order.orders_terminals.address,
          },
          contact: {
            name: yandexSenderName ? yandexSenderName.value : order.orders_terminals.manager_name,
            phone: yandexSenderPhone ? yandexSenderPhone.value : order.orders_terminals.phone,
          },
          type: 'source',
          skip_confirmation: true,
          visit_order: 1,
          point_id: 1,
        },
        {
          address: {
            coordinates: [order.to_lon, order.to_lat],
            fullname: order.delivery_address,
          },
          contact: {
            name: order.orders_customers.name,
            phone: order.orders_customers.phone,
          },
          external_order_id: order.order_number,
          point_id: 2,
          skip_confirmation: true,
          type: 'destination',
          visit_order: 2,
        },
        {
          address: {
            coordinates: [order.orders_terminals.longitude, order.orders_terminals.latitude],
            fullname: order.orders_terminals.address,
          },
          contact: {
            name: yandexSenderName ? yandexSenderName.value : order.orders_terminals.manager_name,
            phone: yandexSenderPhone ? yandexSenderPhone.value : order.orders_terminals.phone,
          },
          type: 'return',
          skip_confirmation: true,
          visit_order: 3,
          point_id: 3,
        },
      ],
      skip_client_notify: false,
      skip_door_to_door: false,
    };
    const items = JSON.parse(order.order_items as string);
    items.forEach((item) => {
      yandexData.items.push({
        pickup_point: 1,
        droppof_point: 2,
        cost_currency: 'UZS',
        cost_value: item.price,
        title: item.name,
        quantity: item.quantity,
        weight: 0,
      });
    });

    const yandexUrl = `https://b2b.taxi.yandex.net/b2b/cargo/integration/v2/claims/create?request_id=${order.id}`;

    const yandexResponse = await lastValueFrom(
      this.httpService
        .post(yandexUrl, yandexData, {
          headers: {
            'Accept-Language': 'ru',
            Authorization: `Bearer ${this.configService.get('YANDEX_DELIVERY_TOKEN')}`,
          },
        })
        .pipe(map((response) => response.data)),
    );

    console.log('yandexResponse', yandexResponse);

    await sleep(400);

    const approveUrl = `https://b2b.taxi.yandex.net/b2b/cargo/integration/v2/claims/accept?claim_id=${yandexResponse.id}`;
    const approveResponse = await lastValueFrom(
      this.httpService
        .post(
          approveUrl,
          {
            version: yandexResponse.version,
          },
          {
            headers: {
              'Accept-Language': 'ru',
              Authorization: `Bearer ${this.configService.get('YANDEX_DELIVERY_TOKEN')}`,
            },
          },
        )
        .pipe(map((response) => response.data)),
    );
    console.log('approveResponse', approveResponse);

    const yandexCourier = await this.prismaService.users.findUnique({
      where: {
        phone: '+998908251218',
      },
      select: {
        id: true,
      },
    });

    await this.prismaService.orders.update({
      where: {
        id,
      },
      data: {
        courier_id: yandexCourier.id,
      },
    });

    await this.searchService.indexYandexDeliveryOrder(
      id,
      {
        ...yandexResponse,
        ...approveResponse,
      },
      {},
      user,
    );
    await this.orderIndexQueue.add('processOrderIndex', {
      orderId: id,
    });

    return true;
  }

  async myNewOrdersRouted(user: users) {
    const currentUser = await this.prismaService.users.findUnique({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        is_online: true,
        max_active_order_count: true,
      },
    });

    if (!currentUser.is_online) {
      return [];
    }

    const userTerminals = await this.prismaService.users_terminals.findMany({
      where: {
        user_id: user.id,
      },
      select: {
        terminal_id: true,
        terminals: {
          select: {
            latitude: true,
            longitude: true,
          },
        },
      },
    });

    const terminalIds = userTerminals.map((terminal) => terminal.terminal_id);
    const allTerminals = await this.cacheControl.getTerminals();
    const terminals = allTerminals.filter((terminal) => terminalIds.includes(terminal.id));
    const terminalsOrganizations = terminals.map((terminal) => terminal.organization_id);
    const listOfOrganizations = await this.cacheControl.getOrganizations();

    const orderStatuses = await this.cacheControl.getOrderStatuses();
    let orders = [];

    const orgIds = [...new Set(terminalsOrganizations)];

    // get organization from cache

    for (const orgId of orgIds) {
      const organizationsOrderStatuses = orderStatuses.filter(
        (orderStatus) => orderStatus.organization_id == orgId && orderStatus.sort == 1,
      );
      const orderStatusIds = organizationsOrderStatuses.map((orderStatus) => orderStatus.id);
      const currentOrg = listOfOrganizations.find((org) => org.id == orgId);
      const searchOrgOrders = await this.searchService.searchOrgOrders(orgId, terminalIds, orderStatusIds);
      orders.push(
        ...searchOrgOrders.map((item: any) => {
          item.orders_organization.support_chat_url = currentOrg.support_chat_url;
          item.orders_organization.icon_url = currentOrg.icon_url;
          item.from_lat = item.from_location.lat;
          item.from_lon = item.from_location.lon;
          item.to_lat = item.to_location.lat;
          item.to_lon = item.to_location.lon;
          return item;
        }),
      );
    }
    orders = sort(orders, (item) => item.created_at);
    orders = orders.map((item) => {
      item.highlight = false;
      return item;
    });
    if (orders.length > 0) {
      let maxActiveOrderCount = 0;
      if (!currentUser.max_active_order_count) {
        const firstOrganization = listOfOrganizations[0];
        maxActiveOrderCount = firstOrganization.max_active_order_count;
      } else {
        maxActiveOrderCount = currentUser.max_active_order_count;
      }

      const lastCurrentOrder = await this.searchService.getMyLastOrder(user.id);
      let fromLat = 0;
      let fromLon = 0;
      if (lastCurrentOrder && lastCurrentOrder.length > 0) {
        fromLat = lastCurrentOrder[0].from_location.lat;
        fromLon = lastCurrentOrder[0].from_location.lon;
      } else {
        const terminal = userTerminals[0];
        fromLat = terminal.terminals.latitude;
        fromLon = terminal.terminals.longitude;
      }

      const locations = [`${fromLon},${fromLat}`];
      const indexes = [];
      const indexByLocation = {};
      for (let i = 1; i <= orders.length; i++) {
        indexes.push(i);
      }

      for (const order of orders) {
        locations.push(`${order.to_lon},${order.to_lat}`);
      }

      const routePath = `${locations.join(';')}?sources=0&destinations=${indexes.join(';')}`;
      const data = await lastValueFrom(
        this.httpService
          .get(`http://localhost:5000/table/v1/driving/${routePath}`)
          .pipe(map((response) => response.data)),
      );

      data?.destinations.forEach((destination, index) => {
        indexByLocation[`${destination.location[1]},${destination.location[0]}`] = index;
      });

      orders = orders.map((order, i) => {
        const index = indexByLocation[`${order.to_lon},${order.to_lat}`];
        order.sort = index;
        if (i < maxActiveOrderCount - 1) {
          order.highlight = true;
        } else {
          order.highlight = false;
        }
        return order;
      });

      orders = sort(orders, (item) => item.sort);
    }

    orders = orders.map((order) => {
      order.created_at = dayjs(order.created_at).tz('Asia/Tashkent').add(5, 'hours').toISOString();
      return order;
    });
    return orders;
  }

  async subscribeToReports(apiToken: string, reportType: string, action: string) {
    const user = await this.prismaService.users.findFirst({
      where: {
        api_token: apiToken,
      },
    });

    if (!user) {
      return new BadRequestException('User not found');
    }

    if (user.status != user_status.active) {
      return new BadRequestException('User is not active');
    }

    const report = await this.prismaService.scheduled_reports.findFirst({
      where: {
        code: reportType,
      },
    });

    if (!report) {
      return new BadRequestException('Report not found');
    }

    if (action == 'subscribe') {
      const existingReport = await this.prismaService.scheduled_reports_subscription.findFirst({
        where: {
          user_id: user.id,
          report_id: report.id,
        },
      });

      return existingReport
        ? existingReport
        : await this.prismaService.scheduled_reports_subscription.create({
            data: {
              user_id: user.id,
              report_id: report.id,
            },
          });
    } else {
      const existingReport = await this.prismaService.scheduled_reports_subscription.findFirst({
        where: {
          user_id: user.id,
          report_id: report.id,
        },
      });
      await this.prismaService.scheduled_reports_subscription.deleteMany({
        where: {
          user_id: user.id,
          report_id: report.id,
        },
      });
      return existingReport;
    }
  }

  async checkPriceOrderToYandex(id: string, user: users) {
    await this.checkYandexDeliveryIndex();
    const order = await this.prismaService.orders.findUnique({
      where: {
        id,
      },
      include: {
        orders_terminals: true,
        orders_customers: true,
      },
    });

    const yandexData = {
      requirements: {
        cargo_options: ['thermobag'],
        door_to_door: true,
        taxi_class: 'express',
      },
      items: [],
      route_points: [
        {
          coordinates: [order.orders_terminals.longitude, order.orders_terminals.latitude],
          fullname: order.orders_terminals.address,
          contact: {
            name: order.orders_terminals.manager_name,
            phone: order.orders_terminals.phone,
          },
          type: 'source',
          skip_confirmation: true,
          visit_order: 1,
          point_id: 1,
        },
        {
          coordinates: [order.to_lon, order.to_lat],
          fullname: order.delivery_address,
          contact: {
            name: order.orders_customers.name,
            phone: order.orders_customers.phone,
          },
          external_order_id: order.order_number,
          point_id: 2,
          skip_confirmation: true,
          type: 'destination',
          visit_order: 2,
        },
      ],
      skip_client_notify: false,
      skip_door_to_door: false,
    };
    const items = JSON.parse(order.order_items as string);
    items.forEach((item) => {
      yandexData.items.push({
        pickup_point: 1,
        droppof_point: 2,
        cost_currency: 'UZS',
        cost_value: item.price,
        title: item.name,
        quantity: item.quantity,
        weight: 0,
      });
    });

    const yandexUrl = `https://b2b.taxi.yandex.net/b2b/cargo/integration/v2/check-price`;
    let yandexResponse = {};
    try {
      console.log('ddd', yandexData);
      yandexResponse = await lastValueFrom(
        this.httpService
          .post(yandexUrl, yandexData, {
            headers: {
              'Accept-Language': 'ru',
              Authorization: `Bearer ${this.configService.get('YANDEX_DELIVERY_TOKEN')}`,
            },
          })
          .pipe(map((response) => response.data)),
      );
    } catch (error) {
      console.log('error', error);
      throw new BadRequestException(error.response.data.message);
    }

    console.log('yandexResponse', yandexResponse);

    const yandexCourier = await this.prismaService.users.findUnique({
      where: {
        phone: '+998908251218',
      },
      select: {
        id: true,
      },
    });

    await this.prismaService.orders.update({
      where: {
        id,
      },
      data: {
        courier_id: yandexCourier.id,
      },
    });

    await this.searchService.indexYandexDeliveryOrder(id, {}, yandexResponse, user);
    await this.orderIndexQueue.add('processOrderIndex', {
      orderId: id,
    });

    return true;
  }

  async cancelOrderToYandex(id: string) {
    await this.prismaService.orders.update({
      where: {
        id: id,
      },
      data: {
        orders_couriers: {
          disconnect: true,
        },
      },
      select: {
        id: true,
      },
    });

    await this.searchService.deleteYandexDeliveryOrder(id);
    await this.orderIndexQueue.add('processOrderIndex', {
      orderId: id,
    });

    return true;
  }

  // @Cron('0 */3 * * * *')

  async checkYandexDeliveryOrderStatus() {
    /**
     * 1. Get orders from elasticsearch index arryt_yandex_delivery_orders for yesterday and today
     * 2. Get order from elasticsearch index arryt_orders by order_id from array_yandex_delivery_orders
     * 3. Get order_statuses where finish = false and cancel = false
     * 4. Get orderIds from orders of step 2 where status_id in step 3
     * 5. Get orders from yandex delivery by orderIds from step 4
     * 6. Get order status from yandex api https://b2b.taxi.yandex.net/b2b/cargo/integration/v2/claims/bulk_info with POST method and with body { "claim_ids": [ "string" ] }
     * 7. Update order status in elasticsearch index arryt_yandex_delivery_orders to field order_data
     */
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const today = new Date();
    const yandexDeliveryOrders = await this.searchService.getYandexDeliveryOrders(yesterday, today);
    const orderIds = yandexDeliveryOrders.map((order) => order.order_id);
    const orders = await this.searchService.getOrdersByIds(orderIds);
    const organizationIdByOrderId = orders.reduce((acc, order) => {
      acc[order.id] = order.organization_id;
      return acc;
    }, {});
    const orderStatuses = await this.cacheControl.getOrderStatuses();
    const orderStatusIds = orderStatuses
      .filter((status) => !status.finish && !status.cancel)
      .map((status) => status.id);
    const ordersForYandex = orders.filter((order) => orderStatusIds.includes(order.order_status_id));
    const yandexOrderIds = ordersForYandex.map((order) => order.id);
    const yandexOrdersByClaimIds = yandexDeliveryOrders.reduce((acc, order) => {
      if (order.order_data && order.order_data.id) {
        acc[order.order_data.id] = order;
      }
      return acc;
    }, {});
    const yandexClaimIds = yandexDeliveryOrders
      .filter((order) => yandexOrderIds.includes(order.order_id))
      .filter((order) => order.order_data && order.order_data.id)
      .map((order) => order.order_data.id);
    const yandexOrderIdsByClaimIds = yandexDeliveryOrders
      .filter((order) => yandexClaimIds.includes(order.order_data.id))
      .filter((order) => order.order_data && order.order_data.id)
      .reduce((acc, order) => {
        acc[order.order_data.id] = order.order_id;
        return acc;
      }, {});
    const yandexUrl = `https://b2b.taxi.yandex.net/b2b/cargo/integration/v2/claims/bulk_info`;
    let yandexResponse: any = {};
    if (yandexClaimIds.length === 0) {
      return;
    }
    try {
      yandexResponse = await lastValueFrom(
        this.httpService
          .post(
            yandexUrl,
            { claim_ids: yandexClaimIds },
            {
              headers: {
                'Accept-Language': 'ru',
                Authorization: `Bearer ${this.configService.get('YANDEX_DELIVERY_TOKEN')}`,
              },
            },
          )
          .pipe(map((response) => response.data)),
      );
    } catch (error) {
      console.log('error', error);
      throw new BadRequestException(error.response.data.message);
    }

    const yandexOrders = yandexResponse.claims;
    const yandexOrdersForUpdate = yandexOrders.map((order) => {
      return {
        order_id: yandexOrderIdsByClaimIds[order.id],
        id: order.id,
        order_data: order,
      };
    });

    await this.searchService.updateYandexDeliveryOrders(yandexOrdersForUpdate);

    const orderStatusByOrganization = orderStatuses.reduce((acc, status) => {
      if (!acc[status.organization_id]) {
        acc[status.organization_id] = {};
      }
      if (status.yandex_delivery_statuses) {
        status.yandex_delivery_statuses.split(',').forEach((stat) => {
          acc[status.organization_id][stat] = status.id;
        });
      }
      return acc;
    }, {});

    for (const order of yandexOrdersForUpdate) {
      const organizationId = organizationIdByOrderId[order.order_id];
      const orderStatusId = orderStatusByOrganization[organizationId][order.order_data.status];

      // courier searching statuses
      const courierSearchingStatuses = ['performer_lookup', 'performer_draft', 'performer_not_found'];

      const orderDate = dayjs(yandexOrdersByClaimIds[order.id].created_at);

      // get date difference in minutes using dayjs
      const dateDiff = dayjs().diff(orderDate, 'minute');

      const yandexCourierWaitTime = +(await this.systemConfigsService.systemConfigByKey('yandex_courier_wait_time'))
        .value;

      console.log('order.order_id', order.order_id);
      console.log('dateDiff', dateDiff);

      if (
        yandexCourierWaitTime &&
        dateDiff >= yandexCourierWaitTime &&
        courierSearchingStatuses.includes(order.order_data.status)
      ) {
        const approveUrl = `https://b2b.taxi.yandex.net/b2b/cargo/integration/v2/claims/cancel?claim_id=${order.order_data.id}`;
        const approveResponse = await lastValueFrom(
          this.httpService
            .post(
              approveUrl,
              {
                cancel_state: 'free',
                version: order.order_data.version,
              },
              {
                headers: {
                  'Accept-Language': 'ru',
                  Authorization: `Bearer ${this.configService.get('YANDEX_DELIVERY_TOKEN')}`,
                },
              },
            )
            .pipe(map((response) => response.data)),
        );
        await this.cancelOrderToYandex(order.order_id);
      } else if (orderStatusId) {
        await this.prismaService.orders.update({
          where: {
            id: order.order_id,
          },
          data: {
            order_status_id: orderStatusId,
          },
        });
        await this.orderIndexQueue.add('processOrderIndex', {
          orderId: order.order_id,
        });
      }
    }

    return true;
  }
  // @Cron('0 */5 * * * *')

  async sendReports() {
    const reportSubscribers = await this.prismaService.scheduled_reports_subscription.findMany({
      select: {
        user_id: true,
        scheduled_reports_subscription_reports: {
          select: {
            code: true,
          },
        },
      },
    });

    const subscribersUserIds = reportSubscribers
      .map((subscriber) => subscriber.user_id)
      .filter((value, index, self) => self.indexOf(value) === index);

    const users = await this.prismaService.users.findMany({
      where: {
        id: {
          in: subscribersUserIds,
        },
        status: {
          equals: 'active',
        },
        tg_id: {
          not: null,
        },
      },
      select: {
        id: true,
        tg_id: true,
      },
    });

    const activeUserIds = users.map((user) => user.id);

    const tgIdByUserId = users.reduce((acc, user) => {
      acc[user.id] = user.tg_id;
      return acc;
    }, {});

    const activeSubscribers = reportSubscribers.filter((subscriber) => activeUserIds.includes(subscriber.user_id));

    const reportCodes = {};

    activeSubscribers.forEach((subscriber) => {
      if (!reportCodes[subscriber.scheduled_reports_subscription_reports.code]) {
        reportCodes[subscriber.scheduled_reports_subscription_reports.code] = [];
      }
      reportCodes[subscriber.scheduled_reports_subscription_reports.code].push(tgIdByUserId[subscriber.user_id]);
    });

    console.log(reportCodes);

    Object.keys(reportCodes).forEach((reportCode) => {
      switch (reportCode) {
        case 'courier_withdraws':
          this.sendCourierWithdrawsReport(reportCodes[reportCode]);
          break;
        default:
          break;
      }
    });

    return true;
  }

  async checkSentReportIndex() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const mapping = {
      properties: {
        created_at: {
          type: 'date',
        },
        report_code: {
          type: 'keyword',
        },
      },
    };
    const indexName = `${projectPrefix}_sent_reports`;
    return await this.searchService.ensureIndexExists(indexName, mapping);
  }

  async sendCourierWithdrawsReport(tgIds: string[]) {
    await this.checkSentReportIndex();
    const scheduledReport = await this.prismaService.scheduled_reports.findFirst({
      where: {
        code: {
          equals: 'courier_withdraws',
        },
      },
    });

    const crontabPattern = scheduledReport.cron;
    const isTimeToRun = cron.validate(crontabPattern, new Date());
    if (isTimeToRun) {
      // startDate using dayjs library 2 hours earlier
      const startDate = dayjs().startOf('d').toISOString();
      const endDate = dayjs().endOf('d').toISOString();
      const existingSentReport = await this.searchService.getSentReportByCodeAndDate(
        'courier_withdraws',
        startDate,
        endDate,
      );

      if (existingSentReport && existingSentReport.length > 0) {
        return;
      }

      const workStartTime = new Date(await this.cacheControl.getSetting('work_start_time')).getHours();
      const workEndTime = new Date(await this.cacheControl.getSetting('work_end_time')).getHours();
      console.log('workStartTime', workStartTime);
      console.log('workEndTime', workEndTime);
      const courierWithdraws = await this.prismaService.manager_withdraw.findMany({
        where: {
          created_at: {
            gte: dayjs().subtract(1, 'day').hour(workStartTime).toISOString(),
            lte: dayjs().hour(workEndTime).toISOString(),
          },
        },
        select: {
          id: true,
          amount: true,
          created_at: true,
          manager_withdraw_managers: {
            select: {
              id: true,
              first_name: true,
              last_name: true,
            },
          },
          manager_withdraw_couriers: {
            select: {
              id: true,
              first_name: true,
              last_name: true,
            },
          },
          manager_withdraw_terminals: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      const courierTerminalWithdraws = {};
      courierWithdraws.forEach((withdraw) => {
        if (
          !courierTerminalWithdraws[
            `${withdraw.manager_withdraw_terminals.id}_${withdraw.manager_withdraw_couriers.id}`
          ]
        ) {
          courierTerminalWithdraws[
            `${withdraw.manager_withdraw_terminals.id}_${withdraw.manager_withdraw_couriers.id}`
          ] = {
            terminal_name: withdraw.manager_withdraw_terminals.name,
            courier_name: `${withdraw.manager_withdraw_couriers.first_name} ${withdraw.manager_withdraw_couriers.last_name}`,
            courier_id: withdraw.manager_withdraw_couriers.id,
            amount: 0,
            manager_name: `${withdraw.manager_withdraw_managers.first_name} ${withdraw.manager_withdraw_managers.last_name}`,
          };
        }
        courierTerminalWithdraws[
          `${withdraw.manager_withdraw_terminals.id}_${withdraw.manager_withdraw_couriers.id}`
        ].amount += withdraw.amount;
      });

      // console.log('courierTerminalWithdraws', courierTerminalWithdraws);

      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Courier withdraws');

      worksheet.columns = [
        { header: 'Филиал', key: 'terminal_name', width: 30 },
        { header: 'Менеджер', key: 'manager_name', width: 30 },
        { header: 'Курьер', key: 'courier_name', width: 30 },
        {
          header: 'Сумма',
          key: 'amount',
          width: 30,
        },
      ];

      const result = sortBy(Object.values(courierTerminalWithdraws), 'terminal_name');
      result.forEach((item) => {
        worksheet.addRow(item);
      });

      const buffer = await workbook.xlsx.writeBuffer();
      // console.log('file buffer', buffer);
      const fileName = `Выплаты курьерам ${dayjs().subtract(1, 'day').format('DD.MM.YYYY')}.xlsx`;

      // send to telegram
      const sendFileUrl = `${this.configService.get('REPORT_BOT_API_URL')}/sendFile`;
      // send tgIds, buffer and fileName using axios post request in multipart/form-data format
      const formData = new FormData();
      const contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      formData.append('file', encode(buffer));
      formData.append('tgIds', tgIds.join(','));
      formData.append('fileName', fileName);
      const sendFileResponse = await axios.post(sendFileUrl, formData, {
        headers: formData.getHeaders(),
      });

      // save sent report to elasticsearch
      await this.searchService.saveSentReport({
        report_code: 'courier_withdraws',
        created_at: new Date(),
      });

      return true;
    }
  }

  async incrementOrderLocations() {
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
     *   1. Get all documents from index where increment is not set
     *   2. Get last increment from index or set it to 0
     *   3. Set increment by itterating over documents
     *   4. Update documents in index
     */
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const indexName = `${projectPrefix}_order_locations`;

    const documents = await this.searchService.getDocumentsByQuery(indexName, {
      query: {
        bool: {
          must_not: {
            exists: {
              field: 'increment',
            },
          },
        },
      },
    });

    if (documents && documents.length > 0) {
      const lastIncrement = await this.searchService.getOrderLocationLastIncrement(indexName);
      let increment = lastIncrement || 0;
      const bulkUpdateBody = [];
      documents.forEach((document) => {
        increment++;
        bulkUpdateBody.push({
          update: {
            _index: indexName,
            _id: document.id,
          },
        });
        // update by painless script
        bulkUpdateBody.push({
          script: {
            source: 'ctx._source.increment = params.increment',
            lang: 'painless',
            params: {
              increment,
            },
          },
        });
      });
      await this.searchService.bulkUpdate(bulkUpdateBody);
    }

    return true;
  }

  async deleteOrderLocationWithoutOrder() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const indexName = `${projectPrefix}_order_locations`;

    const documents = await this.searchService.getDocumentsByQuery(indexName, {
      query: {
        bool: {
          must_not: {
            exists: {
              field: 'order_id',
            },
          },
        },
      },
    });

    if (documents && documents.length > 0) {
      const bulkDeleteBody = [];
      documents.forEach((document) => {
        bulkDeleteBody.push({
          delete: {
            _index: indexName,
            _id: document.id,
          },
        });
      });
      await this.searchService.bulkUpdate(bulkDeleteBody);
    }

    return true;
  }

  async sendDavrNotification() {
    const operators = await this.prismaService.users.findMany({
      where: {
        users_roles_usersTousers_roles_user_id: {
          some: {
            roles: {
              code: {
                in: ['operator', 'admin', 'super_admin'],
              },
            },
          },
        },
        fcm_token: {
          not: null,
        },
      },
      select: {
        id: true,
        fcm_token: true,
      },
    });
    const serverKey = await this.configService.get('FCM_SERVER_KEY');
    const data = await sendNotification(
      serverKey,
      operators.map((user) => user.fcm_token),
      {
        notification: {
          title: 'Курьеры не приняли заказы',
          body: `Курьеры не приняли 5 заказов`,
          data: {
            url: `/orders`,
          },
        },
      },
    );
    return true;
  }
}
