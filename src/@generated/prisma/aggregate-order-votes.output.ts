import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Order_votesCountAggregate } from './order-votes-count-aggregate.output';
import { Order_votesMinAggregate } from './order-votes-min-aggregate.output';
import { Order_votesMaxAggregate } from './order-votes-max-aggregate.output';

@ObjectType()
export class AggregateOrder_votes {

    @Field(() => Order_votesCountAggregate, {nullable:true})
    _count?: Order_votesCountAggregate;

    @Field(() => Order_votesMinAggregate, {nullable:true})
    _min?: Order_votesMinAggregate;

    @Field(() => Order_votesMaxAggregate, {nullable:true})
    _max?: Order_votesMaxAggregate;
}
