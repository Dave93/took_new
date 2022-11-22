import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrder_transactions_ordersInput } from './orders-create-without-order-transactions-orders.input';

@InputType()
export class ordersCreateOrConnectWithoutOrder_transactions_ordersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersCreateWithoutOrder_transactions_ordersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrder_transactions_ordersInput)
    create!: ordersCreateWithoutOrder_transactions_ordersInput;
}
