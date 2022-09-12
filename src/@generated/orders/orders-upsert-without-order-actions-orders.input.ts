import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersUpdateWithoutOrder_actions_ordersInput } from './orders-update-without-order-actions-orders.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrder_actions_ordersInput } from './orders-create-without-order-actions-orders.input';

@InputType()
export class ordersUpsertWithoutOrder_actions_ordersInput {

    @Field(() => ordersUpdateWithoutOrder_actions_ordersInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrder_actions_ordersInput)
    update!: ordersUpdateWithoutOrder_actions_ordersInput;

    @Field(() => ordersCreateWithoutOrder_actions_ordersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrder_actions_ordersInput)
    create!: ordersCreateWithoutOrder_actions_ordersInput;
}
