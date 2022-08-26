import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutUsers_work_schedulesInput } from './users-update-without-users-work-schedules.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutUsers_work_schedulesInput } from './users-create-without-users-work-schedules.input';

@InputType()
export class usersUpsertWithoutUsers_work_schedulesInput {

    @Field(() => usersUpdateWithoutUsers_work_schedulesInput, {nullable:false})
    @Type(() => usersUpdateWithoutUsers_work_schedulesInput)
    update!: usersUpdateWithoutUsers_work_schedulesInput;

    @Field(() => usersCreateWithoutUsers_work_schedulesInput, {nullable:false})
    @Type(() => usersCreateWithoutUsers_work_schedulesInput)
    create!: usersCreateWithoutUsers_work_schedulesInput;
}
