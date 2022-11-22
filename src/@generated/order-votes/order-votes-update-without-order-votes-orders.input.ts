import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutOrder_votes_created_byTousersNestedInput } from '../users/users-update-one-without-order-votes-created-by-tousers-nested.input';
import { terminalsUpdateOneRequiredWithoutOrder_votes_terminalsNestedInput } from '../terminals/terminals-update-one-required-without-order-votes-terminals-nested.input';
import { usersUpdateOneRequiredWithoutOrder_votes_couriersNestedInput } from '../users/users-update-one-required-without-order-votes-couriers-nested.input';

@InputType()
export class order_votesUpdateWithoutOrder_votes_ordersInput {

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

    @Field(() => terminalsUpdateOneRequiredWithoutOrder_votes_terminalsNestedInput, {nullable:true})
    order_votes_terminals?: terminalsUpdateOneRequiredWithoutOrder_votes_terminalsNestedInput;

    @Field(() => usersUpdateOneRequiredWithoutOrder_votes_couriersNestedInput, {nullable:true})
    order_votes_couriers?: usersUpdateOneRequiredWithoutOrder_votes_couriersNestedInput;
}
