import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_work_schedulesWhereUniqueInput } from './users-work-schedules-where-unique.input';
import { Type } from 'class-transformer';
import { users_work_schedulesCreateWithoutUsersInput } from './users-work-schedules-create-without-users.input';

@InputType()
export class users_work_schedulesCreateOrConnectWithoutUsersInput {

    @Field(() => users_work_schedulesWhereUniqueInput, {nullable:false})
    @Type(() => users_work_schedulesWhereUniqueInput)
    where!: users_work_schedulesWhereUniqueInput;

    @Field(() => users_work_schedulesCreateWithoutUsersInput, {nullable:false})
    @Type(() => users_work_schedulesCreateWithoutUsersInput)
    create!: users_work_schedulesCreateWithoutUsersInput;
}
