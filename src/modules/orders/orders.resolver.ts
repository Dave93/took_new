import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { orders } from 'src/@generated/orders/orders.model';
import { FindManyordersArgs } from 'src/@generated/orders/find-manyorders.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { work_schedulesWhereInput } from 'src/@generated/work-schedules/work-schedules-where.input';
import { ordersWhereInput } from 'src/@generated/orders/orders-where.input';

@Resolver(() => orders)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  // @Mutation(() => Order)
  // createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
  //   return this.ordersService.create(createOrderInput);
  // }

  @Query(() => PrismaAggregateCount, { name: 'ordersConnection' })
  ordersConnection(@Args('where') where: ordersWhereInput) {
    return this.ordersService.ordersConnection(where);
  }

  @Query(() => [orders], { name: 'orders' })
  findAll(@Args() params: FindManyordersArgs) {
    return this.ordersService.findAll(params);
  }

  @Query(() => orders, { name: 'order' })
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
}
