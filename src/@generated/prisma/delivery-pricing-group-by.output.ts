import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { drive_type } from './drive-type.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Delivery_pricingCountAggregate } from './delivery-pricing-count-aggregate.output';
import { Delivery_pricingAvgAggregate } from './delivery-pricing-avg-aggregate.output';
import { Delivery_pricingSumAggregate } from './delivery-pricing-sum-aggregate.output';
import { Delivery_pricingMinAggregate } from './delivery-pricing-min-aggregate.output';
import { Delivery_pricingMaxAggregate } from './delivery-pricing-max-aggregate.output';

@ObjectType()
export class Delivery_pricingGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Boolean, {nullable:false})
    default!: boolean;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => drive_type, {nullable:false})
    drive_type!: keyof typeof drive_type;

    @Field(() => [String], {nullable:true})
    days?: Array<string>;

    @Field(() => Date, {nullable:false})
    start_time!: Date | string;

    @Field(() => Date, {nullable:false})
    end_time!: Date | string;

    @Field(() => Int, {nullable:true})
    min_price?: number;

    @Field(() => GraphQLJSON, {nullable:false})
    rules!: any;

    @Field(() => Int, {nullable:false})
    price_per_km!: number;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

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
