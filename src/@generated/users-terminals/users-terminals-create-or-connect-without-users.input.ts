import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsWhereUniqueInput } from './users-terminals-where-unique.input';
import { Type } from 'class-transformer';
import { users_terminalsCreateWithoutUsersInput } from './users-terminals-create-without-users.input';

@InputType()
export class users_terminalsCreateOrConnectWithoutUsersInput {

    @Field(() => users_terminalsWhereUniqueInput, {nullable:false})
    @Type(() => users_terminalsWhereUniqueInput)
    where!: users_terminalsWhereUniqueInput;

    @Field(() => users_terminalsCreateWithoutUsersInput, {nullable:false})
    @Type(() => users_terminalsCreateWithoutUsersInput)
    create!: users_terminalsCreateWithoutUsersInput;
}
