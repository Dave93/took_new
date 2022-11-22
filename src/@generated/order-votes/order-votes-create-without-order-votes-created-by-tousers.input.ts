import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateNestedOneWithoutOrder_votes_ordersInput } from '../orders/orders-create-nested-one-without-order-votes-orders.input';
import { terminalsCreateNestedOneWithoutOrder_votes_terminalsInput } from '../terminals/terminals-create-nested-one-without-order-votes-terminals.input';
import { usersCreateNestedOneWithoutOrder_votes_couriersInput } from '../users/users-create-nested-one-without-order-votes-couriers.input';

@InputType()
export class order_votesCreateWithoutOrder_votes_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    is_voting?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_chosen?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => ordersCreateNestedOneWithoutOrder_votes_ordersInput, {nullable:false})
    order_votes_orders!: ordersCreateNestedOneWithoutOrder_votes_ordersInput;

    @Field(() => terminalsCreateNestedOneWithoutOrder_votes_terminalsInput, {nullable:false})
    order_votes_terminals!: terminalsCreateNestedOneWithoutOrder_votes_terminalsInput;

    @Field(() => usersCreateNestedOneWithoutOrder_votes_couriersInput, {nullable:false})
    order_votes_couriers!: usersCreateNestedOneWithoutOrder_votes_couriersInput;
}
