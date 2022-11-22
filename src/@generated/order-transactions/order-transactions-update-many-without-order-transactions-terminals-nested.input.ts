import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsCreateWithoutOrder_transactions_terminalsInput } from './order-transactions-create-without-order-transactions-terminals.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateOrConnectWithoutOrder_transactions_terminalsInput } from './order-transactions-create-or-connect-without-order-transactions-terminals.input';
import { order_transactionsUpsertWithWhereUniqueWithoutOrder_transactions_terminalsInput } from './order-transactions-upsert-with-where-unique-without-order-transactions-terminals.input';
import { order_transactionsCreateManyOrder_transactions_terminalsInputEnvelope } from './order-transactions-create-many-order-transactions-terminals-input-envelope.input';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';
import { order_transactionsUpdateWithWhereUniqueWithoutOrder_transactions_terminalsInput } from './order-transactions-update-with-where-unique-without-order-transactions-terminals.input';
import { order_transactionsUpdateManyWithWhereWithoutOrder_transactions_terminalsInput } from './order-transactions-update-many-with-where-without-order-transactions-terminals.input';
import { order_transactionsScalarWhereInput } from './order-transactions-scalar-where.input';

@InputType()
export class order_transactionsUpdateManyWithoutOrder_transactions_terminalsNestedInput {

    @Field(() => [order_transactionsCreateWithoutOrder_transactions_terminalsInput], {nullable:true})
    @Type(() => order_transactionsCreateWithoutOrder_transactions_terminalsInput)
    create?: Array<order_transactionsCreateWithoutOrder_transactions_terminalsInput>;

    @Field(() => [order_transactionsCreateOrConnectWithoutOrder_transactions_terminalsInput], {nullable:true})
    @Type(() => order_transactionsCreateOrConnectWithoutOrder_transactions_terminalsInput)
    connectOrCreate?: Array<order_transactionsCreateOrConnectWithoutOrder_transactions_terminalsInput>;

    @Field(() => [order_transactionsUpsertWithWhereUniqueWithoutOrder_transactions_terminalsInput], {nullable:true})
    @Type(() => order_transactionsUpsertWithWhereUniqueWithoutOrder_transactions_terminalsInput)
    upsert?: Array<order_transactionsUpsertWithWhereUniqueWithoutOrder_transactions_terminalsInput>;

    @Field(() => order_transactionsCreateManyOrder_transactions_terminalsInputEnvelope, {nullable:true})
    @Type(() => order_transactionsCreateManyOrder_transactions_terminalsInputEnvelope)
    createMany?: order_transactionsCreateManyOrder_transactions_terminalsInputEnvelope;

    @Field(() => [order_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => order_transactionsWhereUniqueInput)
    set?: Array<order_transactionsWhereUniqueInput>;

    @Field(() => [order_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => order_transactionsWhereUniqueInput)
    disconnect?: Array<order_transactionsWhereUniqueInput>;

    @Field(() => [order_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => order_transactionsWhereUniqueInput)
    delete?: Array<order_transactionsWhereUniqueInput>;

    @Field(() => [order_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => order_transactionsWhereUniqueInput)
    connect?: Array<order_transactionsWhereUniqueInput>;

    @Field(() => [order_transactionsUpdateWithWhereUniqueWithoutOrder_transactions_terminalsInput], {nullable:true})
    @Type(() => order_transactionsUpdateWithWhereUniqueWithoutOrder_transactions_terminalsInput)
    update?: Array<order_transactionsUpdateWithWhereUniqueWithoutOrder_transactions_terminalsInput>;

    @Field(() => [order_transactionsUpdateManyWithWhereWithoutOrder_transactions_terminalsInput], {nullable:true})
    @Type(() => order_transactionsUpdateManyWithWhereWithoutOrder_transactions_terminalsInput)
    updateMany?: Array<order_transactionsUpdateManyWithWhereWithoutOrder_transactions_terminalsInput>;

    @Field(() => [order_transactionsScalarWhereInput], {nullable:true})
    @Type(() => order_transactionsScalarWhereInput)
    deleteMany?: Array<order_transactionsScalarWhereInput>;
}
