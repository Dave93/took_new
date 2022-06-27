import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PostCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    updated_by!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    price_type!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    sale_type!: number;

    @Field(() => Int, {nullable:false})
    latitude!: number;

    @Field(() => Int, {nullable:false})
    longitude!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    comments_count!: number;

    @Field(() => Int, {nullable:false})
    city_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
