import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Order_statusCountAggregate } from './order-status-count-aggregate.output';
import { Order_statusAvgAggregate } from './order-status-avg-aggregate.output';
import { Order_statusSumAggregate } from './order-status-sum-aggregate.output';
import { Order_statusMinAggregate } from './order-status-min-aggregate.output';
import { Order_statusMaxAggregate } from './order-status-max-aggregate.output';

@ObjectType()
export class AggregateOrder_status {

    @Field(() => Order_statusCountAggregate, {nullable:true})
    _count?: Order_statusCountAggregate;

    @Field(() => Order_statusAvgAggregate, {nullable:true})
    _avg?: Order_statusAvgAggregate;

    @Field(() => Order_statusSumAggregate, {nullable:true})
    _sum?: Order_statusSumAggregate;

    @Field(() => Order_statusMinAggregate, {nullable:true})
    _min?: Order_statusMinAggregate;

    @Field(() => Order_statusMaxAggregate, {nullable:true})
    _max?: Order_statusMaxAggregate;
}
