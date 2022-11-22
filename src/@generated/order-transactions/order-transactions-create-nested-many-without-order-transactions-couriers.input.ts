import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsCreateWithoutOrder_transactions_couriersInput } from './order-transactions-create-without-order-transactions-couriers.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateOrConnectWithoutOrder_transactions_couriersInput } from './order-transactions-create-or-connect-without-order-transactions-couriers.input';
import { order_transactionsCreateManyOrder_transactions_couriersInputEnvelope } from './order-transactions-create-many-order-transactions-couriers-input-envelope.input';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';

@InputType()
export class order_transactionsCreateNestedManyWithoutOrder_transactions_couriersInput {

    @Field(() => [order_transactionsCreateWithoutOrder_transactions_couriersInput], {nullable:true})
    @Type(() => order_transactionsCreateWithoutOrder_transactions_couriersInput)
    create?: Array<order_transactionsCreateWithoutOrder_transactions_couriersInput>;

    @Field(() => [order_transactionsCreateOrConnectWithoutOrder_transactions_couriersInput], {nullable:true})
    @Type(() => order_transactionsCreateOrConnectWithoutOrder_transactions_couriersInput)
    connectOrCreate?: Array<order_transactionsCreateOrConnectWithoutOrder_transactions_couriersInput>;

    @Field(() => order_transactionsCreateManyOrder_transactions_couriersInputEnvelope, {nullable:true})
    @Type(() => order_transactionsCreateManyOrder_transactions_couriersInputEnvelope)
    createMany?: order_transactionsCreateManyOrder_transactions_couriersInputEnvelope;

    @Field(() => [order_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => order_transactionsWhereUniqueInput)
    connect?: Array<order_transactionsWhereUniqueInput>;
}
