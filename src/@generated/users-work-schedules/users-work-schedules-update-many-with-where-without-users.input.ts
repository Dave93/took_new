import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_work_schedulesScalarWhereInput } from './users-work-schedules-scalar-where.input';
import { Type } from 'class-transformer';
import { users_work_schedulesUncheckedUpdateManyWithoutUsers_work_schedulesInput } from './users-work-schedules-unchecked-update-many-without-users-work-schedules.input';

@InputType()
export class users_work_schedulesUpdateManyWithWhereWithoutUsersInput {

    @Field(() => users_work_schedulesScalarWhereInput, {nullable:false})
    @Type(() => users_work_schedulesScalarWhereInput)
    where!: users_work_schedulesScalarWhereInput;

    @Field(() => users_work_schedulesUncheckedUpdateManyWithoutUsers_work_schedulesInput, {nullable:false})
    @Type(() => users_work_schedulesUncheckedUpdateManyWithoutUsers_work_schedulesInput)
    data!: users_work_schedulesUncheckedUpdateManyWithoutUsers_work_schedulesInput;
}
