import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_work_schedulesWhereUniqueInput } from './users-work-schedules-where-unique.input';
import { Type } from 'class-transformer';
import { users_work_schedulesUpdateWithoutUsersInput } from './users-work-schedules-update-without-users.input';

@InputType()
export class users_work_schedulesUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => users_work_schedulesWhereUniqueInput, {nullable:false})
    @Type(() => users_work_schedulesWhereUniqueInput)
    where!: users_work_schedulesWhereUniqueInput;

    @Field(() => users_work_schedulesUpdateWithoutUsersInput, {nullable:false})
    @Type(() => users_work_schedulesUpdateWithoutUsersInput)
    data!: users_work_schedulesUpdateWithoutUsersInput;
}
