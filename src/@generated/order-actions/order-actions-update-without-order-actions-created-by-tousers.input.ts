import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ordersUpdateOneRequiredWithoutOrder_actions_ordersNestedInput } from '../orders/orders-update-one-required-without-order-actions-orders-nested.input';
import { terminalsUpdateOneRequiredWithoutOrder_actions_terminalsNestedInput } from '../terminals/terminals-update-one-required-without-order-actions-terminals-nested.input';

@InputType()
export class order_actionsUpdateWithoutOrder_actions_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => String, {nullable:true})
    action?: string;

    @Field(() => String, {nullable:true})
    action_text?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => ordersUpdateOneRequiredWithoutOrder_actions_ordersNestedInput, {nullable:true})
    order_actions_orders?: ordersUpdateOneRequiredWithoutOrder_actions_ordersNestedInput;

    @Field(() => terminalsUpdateOneRequiredWithoutOrder_actions_terminalsNestedInput, {nullable:true})
    order_actions_terminals?: terminalsUpdateOneRequiredWithoutOrder_actions_terminalsNestedInput;
}
