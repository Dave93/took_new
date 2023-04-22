import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderTransactionsService } from './order_transactions.service';
import { OrderTransaction } from './entities/order_transaction.entity';
import { CreateOrderTransactionInput } from './dto/create-order_transaction.input';
import { UpdateOrderTransactionInput } from './dto/update-order_transaction.input';
import { CurrentUser, JwtAuthGuard, Permissions } from '@auth';
import { order_transactions } from '../../@generated/order-transactions/order-transactions.model';
import { FindManyorderTransactionsArgs } from '../../@generated/prisma/find-manyorder-transactions.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { permissionsWhereInput } from '../../@generated/permissions/permissions-where.input';
import { order_transactionsWhereInput } from '../../@generated/order-transactions/order-transactions-where.input';
import { UpdateOneorderTransactionsArgs } from '../../@generated/prisma/update-oneorder-transactions.args';
import { CreateOneorderTransactionsArgs } from '../../helpers/create-one.args';
import { UseGuards } from '@nestjs/common';
import { users } from '../../@generated/users/users.model';

@Resolver(() => OrderTransaction)
export class OrderTransactionsResolver {
  constructor(private readonly orderTransactionsService: OrderTransactionsService) {}

  @Mutation(() => order_transactions)
  @Permissions('order_transactions.create')
  @UseGuards(JwtAuthGuard)
  orderTransactionCreate(
    @Args() createOrderTransactionInput: CreateOneorderTransactionsArgs,
    @CurrentUser() user: users,
  ) {
    return this.orderTransactionsService.create(createOrderTransactionInput, user);
  }

  @Query(() => [order_transactions], { name: 'orderTransactions' })
  @Permissions('order_transactions.list')
  findAll(@Args() params: FindManyorderTransactionsArgs) {
    return this.orderTransactionsService.findAll(params);
  }

  @Query(() => PrismaAggregateCount, { name: 'orderTransactionsConnection' })
  @Permissions('order_transactions.list')
  orderTransactionsConnection(@Args('where') where: order_transactionsWhereInput) {
    return this.orderTransactionsService.orderTransactionsConnection(where);
  }

  @Query(() => order_transactions, { name: 'orderTransaction' })
  @Permissions('order_transactions.show')
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.orderTransactionsService.findOne(id);
  }

  @Mutation(() => order_transactions)
  @Permissions('order_transactions.edit')
  updateOrderTransaction(@Args() updateOrderTransactionInput: UpdateOneorderTransactionsArgs) {
    return this.orderTransactionsService.update(updateOrderTransactionInput);
  }

  @Mutation(() => OrderTransaction)
  removeOrderTransaction(@Args('id', { type: () => Int }) id: number) {
    return this.orderTransactionsService.remove(id);
  }
}
