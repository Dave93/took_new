import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Order_bonus_pricingCountAggregate } from './order-bonus-pricing-count-aggregate.output';
import { Order_bonus_pricingAvgAggregate } from './order-bonus-pricing-avg-aggregate.output';
import { Order_bonus_pricingSumAggregate } from './order-bonus-pricing-sum-aggregate.output';
import { Order_bonus_pricingMinAggregate } from './order-bonus-pricing-min-aggregate.output';
import { Order_bonus_pricingMaxAggregate } from './order-bonus-pricing-max-aggregate.output';

@ObjectType()
export class AggregateOrder_bonus_pricing {

    @Field(() => Order_bonus_pricingCountAggregate, {nullable:true})
    _count?: Order_bonus_pricingCountAggregate;

    @Field(() => Order_bonus_pricingAvgAggregate, {nullable:true})
    _avg?: Order_bonus_pricingAvgAggregate;

    @Field(() => Order_bonus_pricingSumAggregate, {nullable:true})
    _sum?: Order_bonus_pricingSumAggregate;

    @Field(() => Order_bonus_pricingMinAggregate, {nullable:true})
    _min?: Order_bonus_pricingMinAggregate;

    @Field(() => Order_bonus_pricingMaxAggregate, {nullable:true})
    _max?: Order_bonus_pricingMaxAggregate;
}
