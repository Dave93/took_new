import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesWhereUniqueInput } from './users-roles-where-unique.input';
import { Type } from 'class-transformer';
import { users_rolesCreateWithoutRolesInput } from './users-roles-create-without-roles.input';

@InputType()
export class users_rolesCreateOrConnectWithoutRolesInput {

    @Field(() => users_rolesWhereUniqueInput, {nullable:false})
    @Type(() => users_rolesWhereUniqueInput)
    where!: users_rolesWhereUniqueInput;

    @Field(() => users_rolesCreateWithoutRolesInput, {nullable:false})
    @Type(() => users_rolesCreateWithoutRolesInput)
    create!: users_rolesCreateWithoutRolesInput;
}
