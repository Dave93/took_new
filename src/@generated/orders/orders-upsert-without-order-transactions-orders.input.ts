import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersUpdateWithoutOrder_transactions_ordersInput } from './orders-update-without-order-transactions-orders.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrder_transactions_ordersInput } from './orders-create-without-order-transactions-orders.input';

@InputType()
export class ordersUpsertWithoutOrder_transactions_ordersInput {

    @Field(() => ordersUpdateWithoutOrder_transactions_ordersInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrder_transactions_ordersInput)
    update!: ordersUpdateWithoutOrder_transactions_ordersInput;

    @Field(() => ordersCreateWithoutOrder_transactions_ordersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrder_transactions_ordersInput)
    create!: ordersCreateWithoutOrder_transactions_ordersInput;
}
