import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { work_schedules } from '../work-schedules/work-schedules.model';

@ObjectType()
export class users_work_schedules {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    work_schedule_id!: string;

    @Field(() => users, {nullable:false})
    users?: users;

    @Field(() => work_schedules, {nullable:false})
    work_schedules?: work_schedules;
}
