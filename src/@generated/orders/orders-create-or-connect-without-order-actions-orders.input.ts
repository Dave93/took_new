import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrder_actions_ordersInput } from './orders-create-without-order-actions-orders.input';

@InputType()
export class ordersCreateOrConnectWithoutOrder_actions_ordersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersCreateWithoutOrder_actions_ordersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrder_actions_ordersInput)
    create!: ordersCreateWithoutOrder_actions_ordersInput;
}
