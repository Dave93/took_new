import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Delivery_pricingCountAggregate } from './delivery-pricing-count-aggregate.output';
import { Delivery_pricingAvgAggregate } from './delivery-pricing-avg-aggregate.output';
import { Delivery_pricingSumAggregate } from './delivery-pricing-sum-aggregate.output';
import { Delivery_pricingMinAggregate } from './delivery-pricing-min-aggregate.output';
import { Delivery_pricingMaxAggregate } from './delivery-pricing-max-aggregate.output';

@ObjectType()
export class AggregateDelivery_pricing {

    @Field(() => Delivery_pricingCountAggregate, {nullable:true})
    _count?: Delivery_pricingCountAggregate;

    @Field(() => Delivery_pricingAvgAggregate, {nullable:true})
    _avg?: Delivery_pricingAvgAggregate;

    @Field(() => Delivery_pricingSumAggregate, {nullable:true})
    _sum?: Delivery_pricingSumAggregate;

    @Field(() => Delivery_pricingMinAggregate, {nullable:true})
    _min?: Delivery_pricingMinAggregate;

    @Field(() => Delivery_pricingMaxAggregate, {nullable:true})
    _max?: Delivery_pricingMaxAggregate;
}
