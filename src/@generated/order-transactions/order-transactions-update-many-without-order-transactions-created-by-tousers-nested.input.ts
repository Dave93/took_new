import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsCreateWithoutOrder_transactions_created_byTousersInput } from './order-transactions-create-without-order-transactions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateOrConnectWithoutOrder_transactions_created_byTousersInput } from './order-transactions-create-or-connect-without-order-transactions-created-by-tousers.input';
import { order_transactionsUpsertWithWhereUniqueWithoutOrder_transactions_created_byTousersInput } from './order-transactions-upsert-with-where-unique-without-order-transactions-created-by-tousers.input';
import { order_transactionsCreateManyOrder_transactions_created_byTousersInputEnvelope } from './order-transactions-create-many-order-transactions-created-by-tousers-input-envelope.input';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';
import { order_transactionsUpdateWithWhereUniqueWithoutOrder_transactions_created_byTousersInput } from './order-transactions-update-with-where-unique-without-order-transactions-created-by-tousers.input';
import { order_transactionsUpdateManyWithWhereWithoutOrder_transactions_created_byTousersInput } from './order-transactions-update-many-with-where-without-order-transactions-created-by-tousers.input';
import { order_transactionsScalarWhereInput } from './order-transactions-scalar-where.input';

@InputType()
export class order_transactionsUpdateManyWithoutOrder_transactions_created_byTousersNestedInput {

    @Field(() => [order_transactionsCreateWithoutOrder_transactions_created_byTousersInput], {nullable:true})
    @Type(() => order_transactionsCreateWithoutOrder_transactions_created_byTousersInput)
    create?: Array<order_transactionsCreateWithoutOrder_transactions_created_byTousersInput>;

    @Field(() => [order_transactionsCreateOrConnectWithoutOrder_transactions_created_byTousersInput], {nullable:true})
    @Type(() => order_transactionsCreateOrConnectWithoutOrder_transactions_created_byTousersInput)
    connectOrCreate?: Array<order_transactionsCreateOrConnectWithoutOrder_transactions_created_byTousersInput>;

    @Field(() => [order_transactionsUpsertWithWhereUniqueWithoutOrder_transactions_created_byTousersInput], {nullable:true})
    @Type(() => order_transactionsUpsertWithWhereUniqueWithoutOrder_transactions_created_byTousersInput)
    upsert?: Array<order_transactionsUpsertWithWhereUniqueWithoutOrder_transactions_created_byTousersInput>;

    @Field(() => order_transactionsCreateManyOrder_transactions_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => order_transactionsCreateManyOrder_transactions_created_byTousersInputEnvelope)
    createMany?: order_transactionsCreateManyOrder_transactions_created_byTousersInputEnvelope;

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

    @Field(() => [order_transactionsUpdateWithWhereUniqueWithoutOrder_transactions_created_byTousersInput], {nullable:true})
    @Type(() => order_transactionsUpdateWithWhereUniqueWithoutOrder_transactions_created_byTousersInput)
    update?: Array<order_transactionsUpdateWithWhereUniqueWithoutOrder_transactions_created_byTousersInput>;

    @Field(() => [order_transactionsUpdateManyWithWhereWithoutOrder_transactions_created_byTousersInput], {nullable:true})
    @Type(() => order_transactionsUpdateManyWithWhereWithoutOrder_transactions_created_byTousersInput)
    updateMany?: Array<order_transactionsUpdateManyWithWhereWithoutOrder_transactions_created_byTousersInput>;

    @Field(() => [order_transactionsScalarWhereInput], {nullable:true})
    @Type(() => order_transactionsScalarWhereInput)
    deleteMany?: Array<order_transactionsScalarWhereInput>;
}
