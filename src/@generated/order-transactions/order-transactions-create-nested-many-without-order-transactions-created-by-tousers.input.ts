import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsCreateWithoutOrder_transactions_created_byTousersInput } from './order-transactions-create-without-order-transactions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateOrConnectWithoutOrder_transactions_created_byTousersInput } from './order-transactions-create-or-connect-without-order-transactions-created-by-tousers.input';
import { order_transactionsCreateManyOrder_transactions_created_byTousersInputEnvelope } from './order-transactions-create-many-order-transactions-created-by-tousers-input-envelope.input';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';

@InputType()
export class order_transactionsCreateNestedManyWithoutOrder_transactions_created_byTousersInput {

    @Field(() => [order_transactionsCreateWithoutOrder_transactions_created_byTousersInput], {nullable:true})
    @Type(() => order_transactionsCreateWithoutOrder_transactions_created_byTousersInput)
    create?: Array<order_transactionsCreateWithoutOrder_transactions_created_byTousersInput>;

    @Field(() => [order_transactionsCreateOrConnectWithoutOrder_transactions_created_byTousersInput], {nullable:true})
    @Type(() => order_transactionsCreateOrConnectWithoutOrder_transactions_created_byTousersInput)
    connectOrCreate?: Array<order_transactionsCreateOrConnectWithoutOrder_transactions_created_byTousersInput>;

    @Field(() => order_transactionsCreateManyOrder_transactions_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => order_transactionsCreateManyOrder_transactions_created_byTousersInputEnvelope)
    createMany?: order_transactionsCreateManyOrder_transactions_created_byTousersInputEnvelope;

    @Field(() => [order_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => order_transactionsWhereUniqueInput)
    connect?: Array<order_transactionsWhereUniqueInput>;
}
