import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesWhereUniqueInput } from './users-roles-where-unique.input';
import { Type } from 'class-transformer';
import { users_rolesCreateWithoutUsers_usersTousers_roles_user_idInput } from './users-roles-create-without-users-users-tousers-roles-user-id.input';

@InputType()
export class users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_user_idInput {

    @Field(() => users_rolesWhereUniqueInput, {nullable:false})
    @Type(() => users_rolesWhereUniqueInput)
    where!: users_rolesWhereUniqueInput;

    @Field(() => users_rolesCreateWithoutUsers_usersTousers_roles_user_idInput, {nullable:false})
    @Type(() => users_rolesCreateWithoutUsers_usersTousers_roles_user_idInput)
    create!: users_rolesCreateWithoutUsers_usersTousers_roles_user_idInput;
}
