import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesUpdateOneRequiredWithoutUsers_work_schedulesNestedInput } from '../work-schedules/work-schedules-update-one-required-without-users-work-schedules-nested.input';

@InputType()
export class users_work_schedulesUpdateWithoutUsersInput {

    @Field(() => work_schedulesUpdateOneRequiredWithoutUsers_work_schedulesNestedInput, {nullable:true})
    work_schedules?: work_schedulesUpdateOneRequiredWithoutUsers_work_schedulesNestedInput;
}
