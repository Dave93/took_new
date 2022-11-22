import { Resolver, Query, Mutation, Args, Int, Subscription, Context, Float } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order, OrderMobilePeriodStat } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { orders } from 'src/@generated/orders/orders.model';
import { FindManyordersArgs } from 'src/@generated/orders/find-manyorders.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { work_schedulesWhereInput } from 'src/@generated/work-schedules/work-schedules-where.input';
import { ordersWhereInput } from 'src/@generated/orders/orders-where.input';
import { Inject, SetMetadata, UseGuards } from '@nestjs/common';
import { CurrentUser, JwtAuthGuard, Permissions } from '@auth';
import { users } from '../../@generated/users/users.model';
import { PubSubEngine } from 'graphql-subscriptions';
import { PUB_SUB } from '@modules/pubsub/pubsub.module';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { OrderItems } from '@modules/orders_locations/dto/order_items';

@Resolver(() => orders)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService, @Inject(PUB_SUB) private readonly pubSub: RedisPubSub) {}

  // @Mutation(() => Order)
  // createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
  //   return this.ordersService.create(createOrderInput);
  // }

  @Query(() => PrismaAggregateCount, { name: 'ordersConnection' })
  @Permissions('orders.list')
  ordersConnection(@Args('where') where: ordersWhereInput) {
    return this.ordersService.ordersConnection(where);
  }

  @Query(() => [orders], { name: 'orders' })
  @Permissions('orders.list')
  findAll(@Args() params: FindManyordersArgs) {
    return this.ordersService.findAll(params);
  }

  @Query(() => orders, { name: 'order' })
  @Permissions('orders.show')
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.ordersService.findOne(id);
  }

  // @Mutation(() => Order)
  // updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
  //   return this.ordersService.update(updateOrderInput.id, updateOrderInput);
  // }

  // @Mutation(() => Order)
  // removeOrder(@Args('id', { type: () => Int }) id: number) {
  //   return this.ordersService.remove(id);
  // }

  @Query(() => [users], { name: 'getCouriersForOrder' })
  @Permissions('orders.changeCourier')
  getCouriersForOrder(@Args('terminalId', { type: () => String }) terminalId: string) {
    return this.ordersService.getCouriersForOrder(terminalId);
  }

  @Mutation(() => orders, { name: 'changeOrderCourier' })
  @Permissions('orders.changeCourier')
  async changeOrderCourier(
    @Args('orderId', { type: () => String }) orderId: string,
    @Args('courierId', { type: () => String }) courierId: string,
  ) {
    const res = await this.ordersService.changeOrderCourier(orderId, courierId);
    await this.pubSub.publish('deletedCurrentOrder', { deletedCurrentOrder: res.existingOrder });
    await this.pubSub.publish('addedNewCurrentOrder', { addedNewCurrentOrder: res.newOrder });
    return res.newOrder;
  }

  @Subscription((returns) => orders, {
    filter: (payload, variables) => payload.orderUpdate.courier_id === variables.courier_id,
  })
  orderUpdate(@Args('courier_id') courierId: string) {
    return this.pubSub.asyncIterator('orderUpdate');
  }

  @Subscription((returns) => orders)
  deletedCurrentOrder() {
    return this.pubSub.asyncIterator('deletedCurrentOrder');
  }

  @Subscription((returns) => orders)
  deletedWaitingOrder() {
    return this.pubSub.asyncIterator('deletedWaitingOrder');
  }

  @Subscription((returns) => Order, {
    filter: (payload, variables) => payload.addedNewCurrentOrder.courier_id === variables.courier_id,
  })
  addedNewCurrentOrder(@Args('courier_id') courierId: string) {
    return this.pubSub.asyncIterator('addedNewCurrentOrder');
  }

  @Subscription((returns) => orders, {
    filter: (payload, variables) => variables.terminal_id.includes(payload.newApproveOrder.terminal_id),
  })
  newApproveOrder(@Args({ name: 'terminal_id', type: () => [String] }) terminalId: string[]) {
    return this.pubSub.asyncIterator('newApproveOrder');
  }

  @Query(() => [Order], { name: 'myCurrentOrders' })
  @UseGuards(JwtAuthGuard)
  @Permissions('orders.list')
  myCurrentOrders(@CurrentUser() user: users) {
    return this.ordersService.myCurrentOrders(user);
  }

  @Query(() => [OrderItems], { name: 'orderItems' })
  @UseGuards(JwtAuthGuard)
  async getOrderItems(@Args('orderId', { type: () => String }) orderId: string) {
    const res = await this.ordersService.getOrderItems(orderId);
    return res;
  }

  @Mutation(() => Order, { name: 'setOrderStatus' })
  @UseGuards(JwtAuthGuard)
  setOrderStatus(
    @Args('orderId', { type: () => String }) orderId: string,
    @Args('orderStatusId', { type: () => String }) orderStatusId: string,
    @CurrentUser() user: users,
    @Args('latitude', { type: () => Float, nullable: true }) latitude?: number,
    @Args('longitude', { type: () => Float, nullable: true }) longitude?: number,
    @Args('cancelReason', { type: () => String, nullable: true }) cancelReason?: string,
    @Args('sentSmsToCustomer', { type: () => Boolean, nullable: true }) sentSmsToCustomer?: boolean,
  ) {
    return this.ordersService.setOrderStatus(
      orderId,
      orderStatusId,
      latitude,
      longitude,
      user,
      cancelReason,
      sentSmsToCustomer,
    );
  }

  @Mutation(() => [orders], { name: 'changeMultipleOrderStatus' })
  @Permissions('orders.change_multiple_status')
  changeMultipleOrderStatus(
    @Args('orderIds', { type: () => [String] }) orderIds: string[],
    @Args('orderStatusId', { type: () => String }) orderStatusId: string,
  ) {
    return this.ordersService.changeMultipleOrderStatus(orderIds, orderStatusId);
  }

  @Query(() => [Order], { name: 'myNewOrders' })
  @UseGuards(JwtAuthGuard)
  @Permissions('orders.list')
  myNewOrders(@CurrentUser() user: users) {
    return this.ordersService.myNewOrders(user);
  }

  @Mutation(() => Order, { name: 'approveOrder' })
  @UseGuards(JwtAuthGuard)
  approveOrder(@Args('orderId', { type: () => String }) orderId: string, @CurrentUser() user: users) {
    return this.ordersService.approveOrder(orderId, user);
  }

  @Query(() => [OrderMobilePeriodStat], { name: 'orderMobilePeriodStat' })
  @UseGuards(JwtAuthGuard)
  @Permissions('orders.list')
  orderMobilePeriodStat(@CurrentUser() user: users) {
    return this.ordersService.orderMobilePeriodStat(user);
  }
}
