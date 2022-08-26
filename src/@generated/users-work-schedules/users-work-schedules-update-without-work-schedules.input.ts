import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneRequiredWithoutUsers_work_schedulesNestedInput } from '../users/users-update-one-required-without-users-work-schedules-nested.input';

@InputType()
export class users_work_schedulesUpdateWithoutWork_schedulesInput {

    @Field(() => usersUpdateOneRequiredWithoutUsers_work_schedulesNestedInput, {nullable:true})
    users?: usersUpdateOneRequiredWithoutUsers_work_schedulesNestedInput;
}
