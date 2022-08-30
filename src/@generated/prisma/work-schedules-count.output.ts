import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Work_schedulesCount {

    @Field(() => Int, {nullable:false})
    users_work_schedules!: number;

    @Field(() => Int, {nullable:false})
    work_schedule_entries_work_schedules!: number;
}
