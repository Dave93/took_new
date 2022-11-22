import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrder_transactions_ordersInput } from './orders-create-without-order-transactions-orders.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrder_transactions_ordersInput } from './orders-create-or-connect-without-order-transactions-orders.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersCreateNestedOneWithoutOrder_transactions_ordersInput {

    @Field(() => ordersCreateWithoutOrder_transactions_ordersInput, {nullable:true})
    @Type(() => ordersCreateWithoutOrder_transactions_ordersInput)
    create?: ordersCreateWithoutOrder_transactions_ordersInput;

    @Field(() => ordersCreateOrConnectWithoutOrder_transactions_ordersInput, {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrder_transactions_ordersInput)
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_transactions_ordersInput;

    @Field(() => ordersWhereUniqueInput, {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: ordersWhereUniqueInput;
}
