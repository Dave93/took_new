import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Order_votesCountAggregate } from './order-votes-count-aggregate.output';
import { Order_votesMinAggregate } from './order-votes-min-aggregate.output';
import { Order_votesMaxAggregate } from './order-votes-max-aggregate.output';

@ObjectType()
export class Order_votesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    order_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => Boolean, {nullable:false})
    is_voting!: boolean;

    @Field(() => Boolean, {nullable:false})
    is_chosen!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Order_votesCountAggregate, {nullable:true})
    _count?: Order_votesCountAggregate;

    @Field(() => Order_votesMinAggregate, {nullable:true})
    _min?: Order_votesMinAggregate;

    @Field(() => Order_votesMaxAggregate, {nullable:true})
    _max?: Order_votesMaxAggregate;
}
