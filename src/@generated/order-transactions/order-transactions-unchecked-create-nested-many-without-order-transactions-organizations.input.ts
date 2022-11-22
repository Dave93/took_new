import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsCreateWithoutOrder_transactions_organizationsInput } from './order-transactions-create-without-order-transactions-organizations.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateOrConnectWithoutOrder_transactions_organizationsInput } from './order-transactions-create-or-connect-without-order-transactions-organizations.input';
import { order_transactionsCreateManyOrder_transactions_organizationsInputEnvelope } from './order-transactions-create-many-order-transactions-organizations-input-envelope.input';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';

@InputType()
export class order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_organizationsInput {

    @Field(() => [order_transactionsCreateWithoutOrder_transactions_organizationsInput], {nullable:true})
    @Type(() => order_transactionsCreateWithoutOrder_transactions_organizationsInput)
    create?: Array<order_transactionsCreateWithoutOrder_transactions_organizationsInput>;

    @Field(() => [order_transactionsCreateOrConnectWithoutOrder_transactions_organizationsInput], {nullable:true})
    @Type(() => order_transactionsCreateOrConnectWithoutOrder_transactions_organizationsInput)
    connectOrCreate?: Array<order_transactionsCreateOrConnectWithoutOrder_transactions_organizationsInput>;

    @Field(() => order_transactionsCreateManyOrder_transactions_organizationsInputEnvelope, {nullable:true})
    @Type(() => order_transactionsCreateManyOrder_transactions_organizationsInputEnvelope)
    createMany?: order_transactionsCreateManyOrder_transactions_organizationsInputEnvelope;

    @Field(() => [order_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => order_transactionsWhereUniqueInput)
    connect?: Array<order_transactionsWhereUniqueInput>;
}
