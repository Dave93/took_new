import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderStatusService } from './order_status.service';
import { OrderStatus } from './entities/order_status.entity';
import { CreateOrderStatusInput } from './dto/create-order_status.input';
import { UpdateOrderStatusInput } from './dto/update-order_status.input';
import { order_status } from 'src/@generated/order-status/order-status.model';
import { CreateOneorderStatusArgs } from 'src/@generated/prisma/create-oneorder-status.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { order_statusWhereInput } from 'src/@generated/order-status/order-status-where.input';
import { FindManyorderStatusArgs } from 'src/@generated/prisma/find-manyorder-status.args';
import { UpdateOneorderStatusArgs } from 'src/@generated/prisma/update-oneorder-status.args';
import { order_statusCreateArgs } from 'src/helpers/create-one.args';
import { Permissions } from '@auth';

@Resolver(() => OrderStatus)
export class OrderStatusResolver {
  constructor(private readonly orderStatusService: OrderStatusService) {}

  @Mutation(() => order_status)
  @Permissions('order_status.create')
  orderStatusCreate(@Args() createOrderStatusInput: order_statusCreateArgs) {
    return this.orderStatusService.create(createOrderStatusInput);
  }

  @Query(() => PrismaAggregateCount, { name: 'orderStatusesConnection' })
  @Permissions('order_status.list')
  orderStatusConnection(@Args('where') where: order_statusWhereInput) {
    return this.orderStatusService.orderStatusConnection(where);
  }

  @Query(() => [order_status], { name: 'orderStatuses' })
  @Permissions('order_status.list')
  findAll(@Args() params: FindManyorderStatusArgs) {
    return this.orderStatusService.findAll(params);
  }

  @Query(() => [order_status], { name: 'cachedOrderStatuses' })
  @Permissions('order_status.list')
  getAllCached() {
    return this.orderStatusService.getAllCached();
  }

  @Query(() => order_status, { name: 'orderStatus' })
  @Permissions('order_status.show')
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.orderStatusService.findOne(id);
  }

  @Mutation(() => order_status)
  @Permissions('order_status.edit')
  updateOrderStatus(@Args() updateOrderStatusInput: UpdateOneorderStatusArgs) {
    return this.orderStatusService.update(updateOrderStatusInput);
  }

  @Mutation(() => OrderStatus)
  @Permissions('order_status.delete')
  removeOrderStatus(@Args('id', { type: () => Int }) id: number) {
    return this.orderStatusService.remove(id);
  }
}
