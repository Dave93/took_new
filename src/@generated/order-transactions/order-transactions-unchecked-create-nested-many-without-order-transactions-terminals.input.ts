import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsCreateWithoutOrder_transactions_terminalsInput } from './order-transactions-create-without-order-transactions-terminals.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateOrConnectWithoutOrder_transactions_terminalsInput } from './order-transactions-create-or-connect-without-order-transactions-terminals.input';
import { order_transactionsCreateManyOrder_transactions_terminalsInputEnvelope } from './order-transactions-create-many-order-transactions-terminals-input-envelope.input';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';

@InputType()
export class order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_terminalsInput {

    @Field(() => [order_transactionsCreateWithoutOrder_transactions_terminalsInput], {nullable:true})
    @Type(() => order_transactionsCreateWithoutOrder_transactions_terminalsInput)
    create?: Array<order_transactionsCreateWithoutOrder_transactions_terminalsInput>;

    @Field(() => [order_transactionsCreateOrConnectWithoutOrder_transactions_terminalsInput], {nullable:true})
    @Type(() => order_transactionsCreateOrConnectWithoutOrder_transactions_terminalsInput)
    connectOrCreate?: Array<order_transactionsCreateOrConnectWithoutOrder_transactions_terminalsInput>;

    @Field(() => order_transactionsCreateManyOrder_transactions_terminalsInputEnvelope, {nullable:true})
    @Type(() => order_transactionsCreateManyOrder_transactions_terminalsInputEnvelope)
    createMany?: order_transactionsCreateManyOrder_transactions_terminalsInputEnvelope;

    @Field(() => [order_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => order_transactionsWhereUniqueInput)
    connect?: Array<order_transactionsWhereUniqueInput>;
}
