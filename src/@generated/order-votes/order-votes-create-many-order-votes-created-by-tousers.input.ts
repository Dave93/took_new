import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class order_votesCreateManyOrder_votes_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    order_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => Boolean, {nullable:true})
    is_voting?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_chosen?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
