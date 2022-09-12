import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ordersCreateNestedOneWithoutOrder_actions_ordersInput } from '../orders/orders-create-nested-one-without-order-actions-orders.input';
import { terminalsCreateNestedOneWithoutOrder_actions_terminalsInput } from '../terminals/terminals-create-nested-one-without-order-actions-terminals.input';

@InputType()
export class order_actionsCreateWithoutOrder_actions_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => String, {nullable:true})
    action?: string;

    @Field(() => String, {nullable:false})
    action_text!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => ordersCreateNestedOneWithoutOrder_actions_ordersInput, {nullable:false})
    order_actions_orders!: ordersCreateNestedOneWithoutOrder_actions_ordersInput;

    @Field(() => terminalsCreateNestedOneWithoutOrder_actions_terminalsInput, {nullable:false})
    order_actions_terminals!: terminalsCreateNestedOneWithoutOrder_actions_terminalsInput;
}
