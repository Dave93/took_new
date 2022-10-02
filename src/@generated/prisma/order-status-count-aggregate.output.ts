import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Order_statusCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    sort!: number;

    @Field(() => Int, {nullable:false})
    organization_id!: number;

    @Field(() => Int, {nullable:false})
    color!: number;

    @Field(() => Int, {nullable:false})
    finish!: number;

    @Field(() => Int, {nullable:false})
    cancel!: number;

    @Field(() => Int, {nullable:false})
    waiting!: number;

    @Field(() => Int, {nullable:false})
    need_location!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
