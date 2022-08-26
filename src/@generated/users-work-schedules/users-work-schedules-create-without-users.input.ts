import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesCreateNestedOneWithoutUsers_work_schedulesInput } from '../work-schedules/work-schedules-create-nested-one-without-users-work-schedules.input';

@InputType()
export class users_work_schedulesCreateWithoutUsersInput {

    @Field(() => work_schedulesCreateNestedOneWithoutUsers_work_schedulesInput, {nullable:false})
    work_schedules!: work_schedulesCreateNestedOneWithoutUsers_work_schedulesInput;
}
