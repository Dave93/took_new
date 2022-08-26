import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutUsers_work_schedulesInput } from '../users/users-create-nested-one-without-users-work-schedules.input';

@InputType()
export class users_work_schedulesCreateWithoutWork_schedulesInput {

    @Field(() => usersCreateNestedOneWithoutUsers_work_schedulesInput, {nullable:false})
    users!: usersCreateNestedOneWithoutUsers_work_schedulesInput;
}
