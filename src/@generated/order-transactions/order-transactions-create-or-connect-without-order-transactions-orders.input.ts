import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateWithoutOrder_transactions_ordersInput } from './order-transactions-create-without-order-transactions-orders.input';

@InputType()
export class order_transactionsCreateOrConnectWithoutOrder_transactions_ordersInput {

    @Field(() => order_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => order_transactionsWhereUniqueInput)
    where!: order_transactionsWhereUniqueInput;

    @Field(() => order_transactionsCreateWithoutOrder_transactions_ordersInput, {nullable:false})
    @Type(() => order_transactionsCreateWithoutOrder_transactions_ordersInput)
    create!: order_transactionsCreateWithoutOrder_transactions_ordersInput;
}
