import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsWhereUniqueInput } from './users-terminals-where-unique.input';
import { Type } from 'class-transformer';
import { users_terminalsUpdateWithoutUsersInput } from './users-terminals-update-without-users.input';

@InputType()
export class users_terminalsUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => users_terminalsWhereUniqueInput, {nullable:false})
    @Type(() => users_terminalsWhereUniqueInput)
    where!: users_terminalsWhereUniqueInput;

    @Field(() => users_terminalsUpdateWithoutUsersInput, {nullable:false})
    @Type(() => users_terminalsUpdateWithoutUsersInput)
    data!: users_terminalsUpdateWithoutUsersInput;
}
