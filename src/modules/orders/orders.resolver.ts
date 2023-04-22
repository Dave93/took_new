import { Resolver, Query, Mutation, Args, Int, Subscription, Context, Float } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { MissedOrderEntity, Order, OrderMobilePeriodStat, OrdersHistory } from './entities/order.entity';
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
import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';
import { DateScalar } from '../../helpers/date.scalar';
import {
  CourierEfficiencyReportItem,
  CourierEfficiencyReportPerDayItem,
  GarantReportItem,
} from '@modules/orders/dto/garant_report_item';
import { manager_withdraw } from '../../@generated/manager-withdraw/manager-withdraw.model';
import {
  FindManynotificationsArgs,
  notificationsWhereInput,
} from '@modules/notifications/dto/find-many-notifications-args';
import { Notification } from '@modules/notifications/entities/notification.entity';
import { FindManymissedOrdersArgs, missedOrdersWhereInput } from '@modules/orders/dto/find-many-missed0orders-args';
import { scheduled_reports_subscription } from '../../@generated/scheduled-reports-subscription/scheduled-reports-subscription.model';

@Resolver(() => orders)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService, @Inject(PUB_SUB) private readonly pubSub: RedisPubSub) {}

  // @Mutation(() => Order)
  // createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
  //   return this.ordersService.create(createOrderInput);
  // }

  @Query(() => PrismaAggregateCount, { name: 'ordersConnection' })
  @Permissions('orders.list')
  @UseGuards(JwtAuthGuard)
  ordersConnection(@Args('where') where: ordersWhereInput, @CurrentUser() user: users) {
    return this.ordersService.ordersConnection(where, user);
  }

  @Query(() => [orders], { name: 'orders' })
  @Permissions('orders.list')
  @UseGuards(JwtAuthGuard)
  findAll(@Args() params: FindManyordersArgs, @CurrentUser() user: users) {
    return this.ordersService.findAll(params, user);
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
  @UseGuards(JwtAuthGuard)
  async changeOrderCourier(
    @Args('orderId', { type: () => String }) orderId: string,
    @Args('courierId', { type: () => String }) courierId: string,
    @CurrentUser() user: users,
  ) {
    const res = await this.ordersService.changeOrderCourier(orderId, courierId, user);
    await this.pubSub.publish('deletedCurrentOrder', { deletedCurrentOrder: res.existingOrder });
    await this.pubSub.publish('addedNewCurrentOrder', { addedNewCurrentOrder: res.newOrder });
    return res.newOrder;
  }
  @Mutation(() => orders, { name: 'clearCourier' })
  @Permissions('orders.clear_courier')
  @UseGuards(JwtAuthGuard)
  async clearCourier(@Args('orderId', { type: () => String }) orderId: string, @CurrentUser() user: users) {
    const res = await this.ordersService.clearCourier(orderId, user);
    await this.pubSub.publish('deletedCurrentOrder', { deletedCurrentOrder: res.existingOrder });
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

  @Mutation(() => Boolean)
  @Permissions('orders.change_multiple_status')
  changeMultipleOrderStatusByPeriod(
    @Args('startDate', { type: () => Date }) startDate: Date,
    @Args('endDate', { type: () => Date }) endDate: Date,
    @Args('organizationId', { type: () => String }) organizationId: string,
    @Args('orderStatusId', { type: () => String }) orderStatusId: string,
  ) {
    return this.ordersService.changeMultipleOrderStatusByPeriod(startDate, endDate, organizationId, orderStatusId);
  }

  @Query(() => [Order], { name: 'myNewOrders' })
  @UseGuards(JwtAuthGuard)
  @Permissions('orders.list')
  myNewOrders(@CurrentUser() user: users) {
    return this.ordersService.myNewOrders(user);
  }

  @Query(() => [Order], { name: 'myNewOrdersRouted' })
  @UseGuards(JwtAuthGuard)
  @Permissions('orders.list')
  myNewOrdersRouted(@CurrentUser() user: users) {
    return this.ordersService.myNewOrdersRouted(user);
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

  @Query(() => String, { name: 'buildRouteForOrders' })
  buildRouteForOrders(
    @Args('terminalId', { type: () => String }) terminalId: string,
    @Args('orderIds', { type: () => [String] }) orderIds: string[],
  ) {
    return this.ordersService.buildRouteForOrders(terminalId, orderIds);
  }

  @Mutation(() => Order, { name: 'cancelOrderByVoice' })
  @UseGuards(JwtAuthGuard)
  cancelOrderByVoice(
    @Args('orderId', { type: () => String }) orderId: string,
    @Args('orderStatusId', { type: () => String }) orderStatusId: string,
    @CurrentUser() user: users,
    @Args('file', { type: () => GraphQLUpload }) file: FileUpload,
  ) {
    return this.ordersService.cancelOrderByVoice(orderId, orderStatusId, user, file);
  }

  @Mutation(() => Order, { name: 'cancelOrderByText' })
  @UseGuards(JwtAuthGuard)
  cancelOrderByText(
    @Args('orderId', { type: () => String }) orderId: string,
    @Args('orderStatusId', { type: () => String }) orderStatusId: string,
    @CurrentUser() user: users,
    @Args('cancelText', { type: () => String }) cancelText: string,
  ) {
    return this.ordersService.cancelOrderByText(orderId, orderStatusId, user, cancelText);
  }

  @Query(() => OrdersHistory, { name: 'myOrdersHistory' })
  @UseGuards(JwtAuthGuard)
  myOrdersHistory(
    @Args('startDate', { type: () => Date }) startDate: Date,
    @Args('endDate', { type: () => Date }) endDate: Date,
    @Args('page', { type: () => Int }) page: number,
    @Args('limit', { type: () => Int }) limit: number,
    @CurrentUser() user: users,
  ) {
    return this.ordersService.myOrdersHistory(startDate, endDate, page, limit, user);
  }

  @Query(() => OrdersHistory, { name: 'managerPendingOrders' })
  @UseGuards(JwtAuthGuard)
  managerPendingOrders(
    @Args('page', { type: () => Int }) page: number,
    @Args('limit', { type: () => Int }) limit: number,
    @CurrentUser() user: users,
  ) {
    return this.ordersService.managerPendingOrders(page, limit, user);
  }

  @Mutation(() => orders, { name: 'assignOrderCourier' })
  @UseGuards(JwtAuthGuard)
  async assignOrderCourier(
    @Args('orderId', { type: () => String }) orderId: string,
    @Args('courierId', { type: () => String }) courierId: string,
    @CurrentUser() user: users,
  ) {
    const res = await this.ordersService.assignOrderCourier(orderId, courierId, user);
    await this.pubSub.publish('deletedCurrentOrder', { deletedCurrentOrder: res.existingOrder });
    await this.pubSub.publish('addedNewCurrentOrder', { addedNewCurrentOrder: res.newOrder });
    return res.newOrder;
  }

  @Mutation(() => orders, { name: 'updateOrderStatus' })
  @Permissions('orders.edit')
  @UseGuards(JwtAuthGuard)
  async updateOrderStatus(
    @Args('orderId', { type: () => String }) orderId: string,
    @Args('orderStatusId', { type: () => String }) orderStatusId: string,
    @CurrentUser() user: users,
  ) {
    const res = await this.ordersService.updateOrderStatus(orderId, orderStatusId, user);
    await this.pubSub.publish('deletedCurrentOrder', { deletedCurrentOrder: res });
    await this.pubSub.publish('addedNewCurrentOrder', { addedNewCurrentOrder: res });
    return res;
  }

  @Mutation(() => Boolean, { name: 'fixBalancesByDate' })
  @Permissions('orders.edit')
  @UseGuards(JwtAuthGuard)
  async fixBalancesByDate(
    @Args('startDate', { type: () => Date }) startDate: Date,
    @Args('endDate', { type: () => Date }) endDate: Date,
    @CurrentUser() user: users,
  ) {
    return await this.ordersService.fixBalancesByDate(startDate, endDate, user);
  }
  @Mutation(() => Boolean, { name: 'fixOrderIndex' })
  @Permissions('orders.edit')
  @UseGuards(JwtAuthGuard)
  async fixOrderIndex(
    @Args('startDate', { type: () => Date }) startDate: Date,
    @Args('endDate', { type: () => Date }) endDate: Date,
    @CurrentUser() user: users,
  ) {
    return await this.ordersService.fixOrderIndex(startDate, endDate, user);
  }

  @Query(() => String, { name: 'getDeliveryMapType' })
  @Permissions('orders.list')
  async getDeliveryMapType(@Args('order_id', { type: () => String }) orderId: string) {
    const res = await this.ordersService.getDeliveryMapType(orderId);
    return res;
  }

  @Query(() => [GarantReportItem], { name: 'calculateGarant' })
  @Permissions('orders_garant_report.list')
  async calculateGarant(
    @Args('startDate', { type: () => Date }) startDate: Date,
    @Args('endDate', { type: () => Date }) endDate: Date,
    @CurrentUser() user: users,
    @Args('courier_id', { type: () => [String], nullable: true }) courierId?: string[],
    @Args('terminal_id', { type: () => [String], nullable: true }) terminalId?: string[],
    @Args('walletEndDate', { type: () => Date, nullable: true }) walletEndDate?: Date,
  ) {
    return await this.ordersService.calculateGarant(startDate, endDate, user, courierId, terminalId, walletEndDate);
  }

  @Query(() => GarantReportItem, { name: 'calculateGarantByCourier' })
  @UseGuards(JwtAuthGuard)
  async calculateGarantByCourier(
    @Args('startDate', { type: () => Date }) startDate: Date,
    @Args('endDate', { type: () => Date }) endDate: Date,
    @CurrentUser() user: users,
  ) {
    return await this.ordersService.calculateGarantByCourier(startDate, endDate, user);
  }

  @Query(() => [Order], { name: 'mySuccessOrders' })
  @UseGuards(JwtAuthGuard)
  async mySuccessOrders(
    @Args('startDate', { type: () => Date }) startDate: Date,
    @Args('endDate', { type: () => Date }) endDate: Date,
    @CurrentUser() user: users,
  ) {
    return await this.ordersService.mySuccessOrders(startDate, endDate, user);
  }

  @Query(() => [manager_withdraw], { name: 'courierWithdraws' })
  @UseGuards(JwtAuthGuard)
  async courierWithdraws(
    @Args('startDate', { type: () => Date }) startDate: Date,
    @Args('endDate', { type: () => Date }) endDate: Date,
    @CurrentUser() user: users,
  ) {
    return await this.ordersService.courierWithdraws(startDate, endDate, user);
  }

  @Mutation(() => Boolean, { name: 'addOrderNotes' })
  @Permissions('orders.edit')
  @UseGuards(JwtAuthGuard)
  async addOrderNotes(
    @Args('orderId', { type: () => String }) orderId: string,
    @Args('notes', { type: () => String }) notes: string,
    @CurrentUser() user: users,
  ) {
    return await this.ordersService.addOrderNotes(orderId, notes, user);
  }

  @Query(() => [CourierEfficiencyReportItem], { name: 'getCouriersEfficiency' })
  @Permissions('courier_efficiency.list')
  async getCouriersEfficiency(
    @Args('startDate', { type: () => Date }) startDate: Date,
    @Args('endDate', { type: () => Date }) endDate: Date,
    @CurrentUser() user: users,
    @Args('status', { type: () => [String], nullable: true }) status: string[],
    @Args('courier_id', { type: () => [String], nullable: true }) courierId?: string[],
    @Args('terminal_id', { type: () => [String], nullable: true }) terminalId?: string[],
  ) {
    return await this.ordersService.getCouriersEfficiency(startDate, endDate, user, status, courierId, terminalId);
  }

  @Query(() => [CourierEfficiencyReportPerDayItem], { name: 'getCouriersEfficiencyByPeriod' })
  @Permissions('courier_efficiency.list')
  async getCouriersEfficiencyByPeriod(
    @Args('startDate', { type: () => Date }) startDate: Date,
    @Args('endDate', { type: () => Date }) endDate: Date,
    @Args('courierId', { type: () => String }) courierId: string,
    @CurrentUser() user: users,
  ) {
    return await this.ordersService.getCouriersEfficiencyByPeriod(startDate, endDate, courierId, user);
  }
  @Query(() => [CourierEfficiencyReportPerDayItem], { name: 'getCouriersEfficiencyByHour' })
  @Permissions('courier_efficiency.list')
  async getCouriersEfficiencyByHour(
    @Args('startDate', { type: () => Date }) startDate: Date,
    @Args('endDate', { type: () => Date }) endDate: Date,
    @Args('courierId', { type: () => String }) courierId: string,
    @CurrentUser() user: users,
  ) {
    return await this.ordersService.getCouriersEfficiencyByHour(startDate, endDate, courierId, user);
  }

  // @Mutation(() => Boolean, { name: 'sendOperatorNotification' })
  // @UseGuards(JwtAuthGuard)
  // sendOperatorNotification(@Args('message', { type: () => String }) message: string, @CurrentUser() user: users) {
  //   return this.ordersService.sendOperatorNotification(message, user);
  // }

  @Query(() => PrismaAggregateCount, { name: 'missedOrdersConnection' })
  @Permissions('orders.list')
  @UseGuards(JwtAuthGuard)
  missedOrdersConnection(@Args('where') where: missedOrdersWhereInput, @CurrentUser() user: users) {
    return this.ordersService.missedOrdersConnection(where, user);
  }

  @Query(() => [MissedOrderEntity], { name: 'missedOrders' })
  @Permissions('orders.list')
  findAllMissedOrders(@Args() params: FindManymissedOrdersArgs) {
    return this.ordersService.findAllMissedOrders(params);
  }

  @Mutation(() => Boolean, { name: 'updateMissedOrder' })
  @Permissions('orders.edit')
  @UseGuards(JwtAuthGuard)
  async updateMissedOrder(
    @Args('id', { type: () => String }) id: string,
    @Args('status', { type: () => String }) status: string,
    @CurrentUser() user: users,
  ) {
    return await this.ordersService.updateMissedOrder(id, status, user);
  }

  @Mutation(() => Boolean, { name: 'sendOrderToYandex' })
  @Permissions('orders.edit')
  @UseGuards(JwtAuthGuard)
  async sendOrderToYandex(@Args('id', { type: () => String }) id: string, @CurrentUser() user: users) {
    return await this.ordersService.sendOrderToYandex(id, user);
  }

  @Mutation(() => Boolean, { name: 'checkPriceOrderToYandex' })
  @Permissions('orders.edit')
  @UseGuards(JwtAuthGuard)
  async checkPriceOrderToYandex(@Args('id', { type: () => String }) id: string, @CurrentUser() user: users) {
    return await this.ordersService.checkPriceOrderToYandex(id, user);
  }

  @Mutation(() => scheduled_reports_subscription, { name: 'subscribeToReports' })
  async subscribeToReports(
    @Args('apiToken', { type: () => String }) apiToken: string,
    @Args('reportType', { type: () => String }) reportType: string,
    @Args('action', { type: () => String }) action: string,
  ) {
    return await this.ordersService.subscribeToReports(apiToken, reportType, action);
  }

  @Mutation(() => Boolean, { name: 'cancelOrderToYandex' })
  @Permissions('orders.edit')
  @UseGuards(JwtAuthGuard)
  async cancelOrderToYandex(@Args('id', { type: () => String }) id: string, @CurrentUser() user: users) {
    return await this.ordersService.cancelOrderToYandex(id);
  }

  // @Mutation(() => Boolean, { name: 'checkYandexDeliveryOrderStatus' })
  // @Permissions('orders.edit')
  // @UseGuards(JwtAuthGuard)
  // async checkYandexDeliveryOrderStatus() {
  //   return await this.ordersService.checkYandexDeliveryOrderStatus();
  // }

  // @Mutation(() => Boolean, { name: 'sendReports' })
  // @Permissions('orders.edit')
  // @UseGuards(JwtAuthGuard)
  // async sendReports() {
  //   return await this.ordersService.sendReports();
  // }

  @Mutation(() => Boolean, { name: 'sendOperatorNotificationOfNewOrder' })
  @Permissions('orders.edit')
  async sendOperatorNotificationOfNewOrder() {
    return await this.ordersService.sendOperatorNotificationOfNewOrder();
  }

  @Mutation(() => Boolean, { name: 'incrementOrderLocations' })
  @Permissions('orders.edit')
  @UseGuards(JwtAuthGuard)
  async incrementOrderLocations() {
    return await this.ordersService.incrementOrderLocations();
  }

  @Mutation(() => Boolean, { name: 'deleteOrderLocationWithoutOrder' })
  @Permissions('orders.edit')
  @UseGuards(JwtAuthGuard)
  async deleteOrderLocationWithoutOrder() {
    return await this.ordersService.deleteOrderLocationWithoutOrder();
  }

  @Mutation(() => Boolean, { name: 'sendDavrNotification' })
  @Permissions('orders.edit')
  @UseGuards(JwtAuthGuard)
  async sendDavrNotification() {
    return await this.ordersService.sendDavrNotification();
  }
}
