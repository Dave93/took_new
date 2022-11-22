import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Outside_requestsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    request_type!: number;

    @Field(() => Int, {nullable:false})
    request_data!: number;

    @Field(() => Int, {nullable:false})
    response_data!: number;

    @Field(() => Int, {nullable:false})
    response_status!: number;

    @Field(() => Int, {nullable:false})
    external_url!: number;

    @Field(() => Int, {nullable:false})
    model_name!: number;

    @Field(() => Int, {nullable:false})
    model_id!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    updated_by!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
