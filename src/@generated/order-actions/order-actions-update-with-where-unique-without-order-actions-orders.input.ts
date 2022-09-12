import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsWhereUniqueInput } from './order-actions-where-unique.input';
import { Type } from 'class-transformer';
import { order_actionsUpdateWithoutOrder_actions_ordersInput } from './order-actions-update-without-order-actions-orders.input';

@InputType()
export class order_actionsUpdateWithWhereUniqueWithoutOrder_actions_ordersInput {

    @Field(() => order_actionsWhereUniqueInput, {nullable:false})
    @Type(() => order_actionsWhereUniqueInput)
    where!: order_actionsWhereUniqueInput;

    @Field(() => order_actionsUpdateWithoutOrder_actions_ordersInput, {nullable:false})
    @Type(() => order_actionsUpdateWithoutOrder_actions_ordersInput)
    data!: order_actionsUpdateWithoutOrder_actions_ordersInput;
}
