import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsCreateWithoutOrder_transactions_couriersInput } from './order-transactions-create-without-order-transactions-couriers.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateOrConnectWithoutOrder_transactions_couriersInput } from './order-transactions-create-or-connect-without-order-transactions-couriers.input';
import { order_transactionsUpsertWithWhereUniqueWithoutOrder_transactions_couriersInput } from './order-transactions-upsert-with-where-unique-without-order-transactions-couriers.input';
import { order_transactionsCreateManyOrder_transactions_couriersInputEnvelope } from './order-transactions-create-many-order-transactions-couriers-input-envelope.input';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';
import { order_transactionsUpdateWithWhereUniqueWithoutOrder_transactions_couriersInput } from './order-transactions-update-with-where-unique-without-order-transactions-couriers.input';
import { order_transactionsUpdateManyWithWhereWithoutOrder_transactions_couriersInput } from './order-transactions-update-many-with-where-without-order-transactions-couriers.input';
import { order_transactionsScalarWhereInput } from './order-transactions-scalar-where.input';

@InputType()
export class order_transactionsUncheckedUpdateManyWithoutOrder_transactions_couriersNestedInput {

    @Field(() => [order_transactionsCreateWithoutOrder_transactions_couriersInput], {nullable:true})
    @Type(() => order_transactionsCreateWithoutOrder_transactions_couriersInput)
    create?: Array<order_transactionsCreateWithoutOrder_transactions_couriersInput>;

    @Field(() => [order_transactionsCreateOrConnectWithoutOrder_transactions_couriersInput], {nullable:true})
    @Type(() => order_transactionsCreateOrConnectWithoutOrder_transactions_couriersInput)
    connectOrCreate?: Array<order_transactionsCreateOrConnectWithoutOrder_transactions_couriersInput>;

    @Field(() => [order_transactionsUpsertWithWhereUniqueWithoutOrder_transactions_couriersInput], {nullable:true})
    @Type(() => order_transactionsUpsertWithWhereUniqueWithoutOrder_transactions_couriersInput)
    upsert?: Array<order_transactionsUpsertWithWhereUniqueWithoutOrder_transactions_couriersInput>;

    @Field(() => order_transactionsCreateManyOrder_transactions_couriersInputEnvelope, {nullable:true})
    @Type(() => order_transactionsCreateManyOrder_transactions_couriersInputEnvelope)
    createMany?: order_transactionsCreateManyOrder_transactions_couriersInputEnvelope;

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

    @Field(() => [order_transactionsUpdateWithWhereUniqueWithoutOrder_transactions_couriersInput], {nullable:true})
    @Type(() => order_transactionsUpdateWithWhereUniqueWithoutOrder_transactions_couriersInput)
    update?: Array<order_transactionsUpdateWithWhereUniqueWithoutOrder_transactions_couriersInput>;

    @Field(() => [order_transactionsUpdateManyWithWhereWithoutOrder_transactions_couriersInput], {nullable:true})
    @Type(() => order_transactionsUpdateManyWithWhereWithoutOrder_transactions_couriersInput)
    updateMany?: Array<order_transactionsUpdateManyWithWhereWithoutOrder_transactions_couriersInput>;

    @Field(() => [order_transactionsScalarWhereInput], {nullable:true})
    @Type(() => order_transactionsScalarWhereInput)
    deleteMany?: Array<order_transactionsScalarWhereInput>;
}
