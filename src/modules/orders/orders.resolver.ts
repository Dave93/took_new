import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { orders } from 'src/@generated/orders/orders.model';
import { FindManyordersArgs } from 'src/@generated/orders/find-manyorders.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { work_schedulesWhereInput } from 'src/@generated/work-schedules/work-schedules-where.input';
import { ordersWhereInput } from 'src/@generated/orders/orders-where.input';
import { SetMetadata, UseGuards } from '@nestjs/common';
import { Permissions } from '@auth';
import { users } from '../../@generated/users/users.model';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => orders)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

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
  changeOrderCourier(
    @Args('orderId', { type: () => String }) orderId: string,
    @Args('courierId', { type: () => String }) courierId: string,
  ) {
    const res = this.ordersService.changeOrderCourier(orderId, courierId);
    pubSub.publish('orderUpdate', { orderUpdate: res });
    return res;
  }

  @Subscription((returns) => orders, {
    filter: (payload, variables) => payload.orderUpdate.courier_id === variables.courier_id,
  })
  orderUpdate(@Args('courier_id') courierId: string) {
    return pubSub.asyncIterator('orderUpdate');
  }
}
