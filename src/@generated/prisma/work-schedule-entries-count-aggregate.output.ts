import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Work_schedule_entriesCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Int, {nullable:false})
    work_schedule_id!: number;

    @Field(() => Int, {nullable:false})
    date_start!: number;

    @Field(() => Int, {nullable:false})
    date_finish!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Int, {nullable:false})
    ip_open!: number;

    @Field(() => Int, {nullable:false})
    ip_close!: number;

    @Field(() => Int, {nullable:false})
    lat_open!: number;

    @Field(() => Int, {nullable:false})
    lat_close!: number;

    @Field(() => Int, {nullable:false})
    lon_open!: number;

    @Field(() => Int, {nullable:false})
    lon_close!: number;

    @Field(() => Int, {nullable:false})
    current_status!: number;

    @Field(() => Int, {nullable:false})
    late!: number;

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
