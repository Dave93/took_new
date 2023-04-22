import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Order_bonus_pricingCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    active!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    start_time!: number;

    @Field(() => Int, {nullable:false})
    end_time!: number;

    @Field(() => Int, {nullable:false})
    rules!: number;

    @Field(() => Int, {nullable:false})
    min_distance_km!: number;

    @Field(() => Int, {nullable:false})
    organization_id!: number;

    @Field(() => Int, {nullable:false})
    terminal_id!: number;

    @Field(() => Int, {nullable:false})
    courier_id!: number;

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
