import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { usersUpdateOneWithoutOrder_actions_created_byTousersNestedInput } from '../users/users-update-one-without-order-actions-created-by-tousers-nested.input';
import { ordersUpdateOneRequiredWithoutOrder_actions_ordersNestedInput } from '../orders/orders-update-one-required-without-order-actions-orders-nested.input';
import { terminalsUpdateOneRequiredWithoutOrder_actions_terminalsNestedInput } from '../terminals/terminals-update-one-required-without-order-actions-terminals-nested.input';

@InputType()
export class order_actionsUpdateInput {

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

    @Field(() => usersUpdateOneWithoutOrder_actions_created_byTousersNestedInput, {nullable:true})
    order_actions_created_byTousers?: usersUpdateOneWithoutOrder_actions_created_byTousersNestedInput;

    @Field(() => ordersUpdateOneRequiredWithoutOrder_actions_ordersNestedInput, {nullable:true})
    order_actions_orders?: ordersUpdateOneRequiredWithoutOrder_actions_ordersNestedInput;

    @Field(() => terminalsUpdateOneRequiredWithoutOrder_actions_terminalsNestedInput, {nullable:true})
    order_actions_terminals?: terminalsUpdateOneRequiredWithoutOrder_actions_terminalsNestedInput;
}
