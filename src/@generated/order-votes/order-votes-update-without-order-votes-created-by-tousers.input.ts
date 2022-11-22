import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersUpdateOneRequiredWithoutOrder_votes_ordersNestedInput } from '../orders/orders-update-one-required-without-order-votes-orders-nested.input';
import { terminalsUpdateOneRequiredWithoutOrder_votes_terminalsNestedInput } from '../terminals/terminals-update-one-required-without-order-votes-terminals-nested.input';
import { usersUpdateOneRequiredWithoutOrder_votes_couriersNestedInput } from '../users/users-update-one-required-without-order-votes-couriers-nested.input';

@InputType()
export class order_votesUpdateWithoutOrder_votes_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    is_voting?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_chosen?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => ordersUpdateOneRequiredWithoutOrder_votes_ordersNestedInput, {nullable:true})
    order_votes_orders?: ordersUpdateOneRequiredWithoutOrder_votes_ordersNestedInput;

    @Field(() => terminalsUpdateOneRequiredWithoutOrder_votes_terminalsNestedInput, {nullable:true})
    order_votes_terminals?: terminalsUpdateOneRequiredWithoutOrder_votes_terminalsNestedInput;

    @Field(() => usersUpdateOneRequiredWithoutOrder_votes_couriersNestedInput, {nullable:true})
    order_votes_couriers?: usersUpdateOneRequiredWithoutOrder_votes_couriersNestedInput;
}
