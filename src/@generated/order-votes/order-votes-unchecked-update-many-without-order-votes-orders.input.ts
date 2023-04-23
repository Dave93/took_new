import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class order_votesUncheckedUpdateManyWithoutOrder_votes_ordersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    terminal_id?: string;

    @Field(() => String, {nullable:true})
    courier_id?: string;

    @Field(() => Boolean, {nullable:true})
    is_voting?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_chosen?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;
}