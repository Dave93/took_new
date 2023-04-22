import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Work_schedulesCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    active!: number;

    @Field(() => Int, {nullable:false})
    organization_id!: number;

    @Field(() => Int, {nullable:false})
    days!: number;

    @Field(() => Int, {nullable:false})
    start_time!: number;

    @Field(() => Int, {nullable:false})
    end_time!: number;

    @Field(() => Int, {nullable:false})
    max_start_time!: number;

    @Field(() => Int, {nullable:false})
    bonus_price!: number;

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
