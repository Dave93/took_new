import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutUsers_work_schedulesInput } from '../users/users-create-nested-one-without-users-work-schedules.input';
import { work_schedulesCreateNestedOneWithoutUsers_work_schedulesInput } from '../work-schedules/work-schedules-create-nested-one-without-users-work-schedules.input';

@InputType()
export class users_work_schedulesCreateInput {

    @Field(() => usersCreateNestedOneWithoutUsers_work_schedulesInput, {nullable:false})
    users!: usersCreateNestedOneWithoutUsers_work_schedulesInput;

    @Field(() => work_schedulesCreateNestedOneWithoutUsers_work_schedulesInput, {nullable:false})
    work_schedules!: work_schedulesCreateNestedOneWithoutUsers_work_schedulesInput;
}
