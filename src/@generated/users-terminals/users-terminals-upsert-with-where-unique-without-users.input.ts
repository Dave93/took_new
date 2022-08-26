import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsWhereUniqueInput } from './users-terminals-where-unique.input';
import { Type } from 'class-transformer';
import { users_terminalsUpdateWithoutUsersInput } from './users-terminals-update-without-users.input';
import { users_terminalsCreateWithoutUsersInput } from './users-terminals-create-without-users.input';

@InputType()
export class users_terminalsUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => users_terminalsWhereUniqueInput, {nullable:false})
    @Type(() => users_terminalsWhereUniqueInput)
    where!: users_terminalsWhereUniqueInput;

    @Field(() => users_terminalsUpdateWithoutUsersInput, {nullable:false})
    @Type(() => users_terminalsUpdateWithoutUsersInput)
    update!: users_terminalsUpdateWithoutUsersInput;

    @Field(() => users_terminalsCreateWithoutUsersInput, {nullable:false})
    @Type(() => users_terminalsCreateWithoutUsersInput)
    create!: users_terminalsCreateWithoutUsersInput;
}
