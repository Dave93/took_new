import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutOrder_votes_created_byTousersNestedInput } from '../users/users-update-one-without-order-votes-created-by-tousers-nested.input';
import { ordersUpdateOneRequiredWithoutOrder_votes_ordersNestedInput } from '../orders/orders-update-one-required-without-order-votes-orders-nested.input';
import { usersUpdateOneRequiredWithoutOrder_votes_couriersNestedInput } from '../users/users-update-one-required-without-order-votes-couriers-nested.input';

@InputType()
export class order_votesUpdateWithoutOrder_votes_terminalsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    is_voting?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_chosen?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => usersUpdateOneWithoutOrder_votes_created_byTousersNestedInput, {nullable:true})
    order_votes_created_byTousers?: usersUpdateOneWithoutOrder_votes_created_byTousersNestedInput;

    @Field(() => ordersUpdateOneRequiredWithoutOrder_votes_ordersNestedInput, {nullable:true})
    order_votes_orders?: ordersUpdateOneRequiredWithoutOrder_votes_ordersNestedInput;

    @Field(() => usersUpdateOneRequiredWithoutOrder_votes_couriersNestedInput, {nullable:true})
    order_votes_couriers?: usersUpdateOneRequiredWithoutOrder_votes_couriersNestedInput;
}
