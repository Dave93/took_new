import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Users_work_schedulesCountAggregate {

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Int, {nullable:false})
    work_schedule_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
