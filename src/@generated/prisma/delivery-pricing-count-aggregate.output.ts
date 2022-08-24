import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Delivery_pricingCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    active!: number;

    @Field(() => Int, {nullable:false})
    default!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    drive_type!: number;

    @Field(() => Int, {nullable:false})
    days!: number;

    @Field(() => Int, {nullable:false})
    start_time!: number;

    @Field(() => Int, {nullable:false})
    end_time!: number;

    @Field(() => Int, {nullable:false})
    min_price!: number;

    @Field(() => Int, {nullable:false})
    rules!: number;

    @Field(() => Int, {nullable:false})
    price_per_km!: number;

    @Field(() => Int, {nullable:false})
    organization_id!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    updated_by!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
