import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindManyordersArgs } from 'src/@generated/orders/find-manyorders.args';
import { ordersWhereInput } from 'src/@generated/orders/orders-where.input';
import { sort } from 'radash';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { users } from '@prisma/client';
import { orders } from '../../@generated/orders/orders.model';
import { PUB_SUB } from '@modules/pubsub/pubsub.module';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { getDistance } from 'geolib';
import { SearchService } from '@modules/search/search.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cacheControl: CacheControlService,
    private readonly searchService: SearchService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
    @InjectQueue('order_index') private readonly orderIndexQueue: Queue,
    @InjectQueue('order_complete_actions') private readonly orderCompleteQueue: Queue,
  ) {}
  create(createOrderInput: CreateOrderInput) {
    return 'This action adds a new order';
  }

  findAll(params: FindManyordersArgs) {
    return this.prismaService.orders.findMany({
      ...params,
      include: {
        orders_organization: {
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

  ordersConnection(where: ordersWhereInput) {
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

  async changeOrderCourier(orderId: string, courierId: string) {
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
      },
    });
    // console.log('res', res);
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
      // console.log(orderStatusesByOrganization[order.organization_id]);
      // console.log(orderStatusIndex);
      // get next order status
      let nextOrderStatus = orderStatusesByOrganization[order.organization_id][orderStatusIndex + 1];
      if (!nextOrderStatus) {
        // get last order status
        nextOrderStatus = orderStatusesByOrganization[order.organization_id][orderStatusIndex];
      }
      // console.log(nextOrderStatus);
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

    // if (orderStatus.waiting || orderStatus.finish) {
    //   if (!latitude) {
    //     throw new BadRequestException('Локация обязательна для смены статуса');
    //   }
    //
    //   // get organization
    //   const organization = await this.cacheControl.getOrganization(order.organization_id);
    //
    //   const distance = getDistance({ latitude: order.to_lat, longitude: order.to_lon }, { latitude, longitude });
    //   if (distance > organization.max_order_close_distance) {
    //     throw new BadRequestException('Вы находитесь слишком далеко от заказа');
    //   }
    // }

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
      },
    });
    // console.log(orderData);
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
      await this.orderIndexQueue.add('processOrderComplete', {
        order: orderData,
      });
    }

    return result[0];
  }

  async myNewOrders(user: users) {
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

    let orders = [];

    const orgIds = [...new Set(terminalsOrganizations)];

    // get organization from cache

    for (const orgId of orgIds) {
      const organizationsOrderStatuses = orderStatuses.filter(
        (orderStatus) => orderStatus.organization_id == orgId && !orderStatus.finish && !orderStatus.cancel,
      );
      const orderStatusIds = organizationsOrderStatuses.map((orderStatus) => orderStatus.id);
      const orgOrders = await this.prismaService.orders.findMany({
        where: {
          organization_id: orgId,
          courier_id: null,
          terminal_id: {
            in: terminalIds,
          },
          order_status_id: {
            in: orderStatusIds,
          },
        },
        select: {
          id: true,
          order_number: true,
          organization_id: true,
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
        },
        orderBy: {
          created_at: 'asc',
        },
      });
      orders.push(...orgOrders);
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
      },
    });
    const result = await this.prepareOrdersNextButton([orderData]);
    console.log(JSON.stringify(result));
    await this.pubSub.publish('addedNewCurrentOrder', { addedNewCurrentOrder: result[0] });
    await this.orderIndexQueue.add('processOrderIndex', {
      orderId,
    });
    return updatedOrder;
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
        courier_id: true,
      },
    });
    if (orderStatus.finish || orderStatus.cancel) {
      for (const order of orders) {
        await this.pubSub.publish('deletedCurrentOrder', { deletedCurrentOrder: order });
        await this.pubSub.publish('deletedWaitingOrder', { deletedWaitingOrder: order });
      }
    }

    return orders;
  }

  orderMobilePeriodStat(user: users) {
    return this.searchService.orderMobilePeriodStat(user);
  }
}
