import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Order_locationsCountAggregate } from './order-locations-count-aggregate.output';
import { Order_locationsAvgAggregate } from './order-locations-avg-aggregate.output';
import { Order_locationsSumAggregate } from './order-locations-sum-aggregate.output';
import { Order_locationsMinAggregate } from './order-locations-min-aggregate.output';
import { Order_locationsMaxAggregate } from './order-locations-max-aggregate.output';

@ObjectType()
export class AggregateOrder_locations {

    @Field(() => Order_locationsCountAggregate, {nullable:true})
    _count?: Order_locationsCountAggregate;

    @Field(() => Order_locationsAvgAggregate, {nullable:true})
    _avg?: Order_locationsAvgAggregate;

    @Field(() => Order_locationsSumAggregate, {nullable:true})
    _sum?: Order_locationsSumAggregate;

    @Field(() => Order_locationsMinAggregate, {nullable:true})
    _min?: Order_locationsMinAggregate;

    @Field(() => Order_locationsMaxAggregate, {nullable:true})
    _max?: Order_locationsMaxAggregate;
}
