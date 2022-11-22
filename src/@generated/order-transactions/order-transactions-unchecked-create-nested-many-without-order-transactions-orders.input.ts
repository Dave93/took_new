import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsCreateWithoutOrder_transactions_ordersInput } from './order-transactions-create-without-order-transactions-orders.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateOrConnectWithoutOrder_transactions_ordersInput } from './order-transactions-create-or-connect-without-order-transactions-orders.input';
import { order_transactionsCreateManyOrder_transactions_ordersInputEnvelope } from './order-transactions-create-many-order-transactions-orders-input-envelope.input';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';

@InputType()
export class order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_ordersInput {

    @Field(() => [order_transactionsCreateWithoutOrder_transactions_ordersInput], {nullable:true})
    @Type(() => order_transactionsCreateWithoutOrder_transactions_ordersInput)
    create?: Array<order_transactionsCreateWithoutOrder_transactions_ordersInput>;

    @Field(() => [order_transactionsCreateOrConnectWithoutOrder_transactions_ordersInput], {nullable:true})
    @Type(() => order_transactionsCreateOrConnectWithoutOrder_transactions_ordersInput)
    connectOrCreate?: Array<order_transactionsCreateOrConnectWithoutOrder_transactions_ordersInput>;

    @Field(() => order_transactionsCreateManyOrder_transactions_ordersInputEnvelope, {nullable:true})
    @Type(() => order_transactionsCreateManyOrder_transactions_ordersInputEnvelope)
    createMany?: order_transactionsCreateManyOrder_transactions_ordersInputEnvelope;

    @Field(() => [order_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => order_transactionsWhereUniqueInput)
    connect?: Array<order_transactionsWhereUniqueInput>;
}
