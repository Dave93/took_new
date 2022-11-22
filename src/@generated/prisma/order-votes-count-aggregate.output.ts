import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Order_votesCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    order_id!: number;

    @Field(() => Int, {nullable:false})
    terminal_id!: number;

    @Field(() => Int, {nullable:false})
    courier_id!: number;

    @Field(() => Int, {nullable:false})
    is_voting!: number;

    @Field(() => Int, {nullable:false})
    is_chosen!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
