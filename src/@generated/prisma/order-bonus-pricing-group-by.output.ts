import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { Order_bonus_pricingCountAggregate } from './order-bonus-pricing-count-aggregate.output';
import { Order_bonus_pricingAvgAggregate } from './order-bonus-pricing-avg-aggregate.output';
import { Order_bonus_pricingSumAggregate } from './order-bonus-pricing-sum-aggregate.output';
import { Order_bonus_pricingMinAggregate } from './order-bonus-pricing-min-aggregate.output';
import { Order_bonus_pricingMaxAggregate } from './order-bonus-pricing-max-aggregate.output';

@ObjectType()
export class Order_bonus_pricingGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    start_time!: Date | string;

    @Field(() => Date, {nullable:false})
    end_time!: Date | string;

    @Field(() => GraphQLJSON, {nullable:false})
    rules!: any;

    @Field(() => Int, {nullable:false})
    min_distance_km!: number;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:true})
    terminal_id?: string;

    @Field(() => String, {nullable:true})
    courier_id?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

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
