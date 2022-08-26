import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutUsers_work_schedulesInput } from './users-create-without-users-work-schedules.input';

@InputType()
export class usersCreateOrConnectWithoutUsers_work_schedulesInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutUsers_work_schedulesInput, {nullable:false})
    @Type(() => usersCreateWithoutUsers_work_schedulesInput)
    create!: usersCreateWithoutUsers_work_schedulesInput;
}
