import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Order_locationsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    order_id!: number;

    @Field(() => Int, {nullable:false})
    terminal_id!: number;

    @Field(() => Int, {nullable:false})
    courier_id!: number;

    @Field(() => Int, {nullable:false})
    order_status_id!: number;

    @Field(() => Int, {nullable:false})
    lat!: number;

    @Field(() => Int, {nullable:false})
    lon!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
