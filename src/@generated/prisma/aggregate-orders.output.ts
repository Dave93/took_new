import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrdersCountAggregate } from './orders-count-aggregate.output';
import { OrdersAvgAggregate } from './orders-avg-aggregate.output';
import { OrdersSumAggregate } from './orders-sum-aggregate.output';
import { OrdersMinAggregate } from './orders-min-aggregate.output';
import { OrdersMaxAggregate } from './orders-max-aggregate.output';

@ObjectType()
export class AggregateOrders {

    @Field(() => OrdersCountAggregate, {nullable:true})
    _count?: OrdersCountAggregate;

    @Field(() => OrdersAvgAggregate, {nullable:true})
    _avg?: OrdersAvgAggregate;

    @Field(() => OrdersSumAggregate, {nullable:true})
    _sum?: OrdersSumAggregate;

    @Field(() => OrdersMinAggregate, {nullable:true})
    _min?: OrdersMinAggregate;

    @Field(() => OrdersMaxAggregate, {nullable:true})
    _max?: OrdersMaxAggregate;
}
