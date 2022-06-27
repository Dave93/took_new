import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesWhereUniqueInput } from './users-roles-where-unique.input';
import { Type } from 'class-transformer';
import { users_rolesCreateWithoutUsers_usersTousers_roles_created_byInput } from './users-roles-create-without-users-users-tousers-roles-created-by.input';

@InputType()
export class users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_created_byInput {

    @Field(() => users_rolesWhereUniqueInput, {nullable:false})
    @Type(() => users_rolesWhereUniqueInput)
    where!: users_rolesWhereUniqueInput;

    @Field(() => users_rolesCreateWithoutUsers_usersTousers_roles_created_byInput, {nullable:false})
    @Type(() => users_rolesCreateWithoutUsers_usersTousers_roles_created_byInput)
    create!: users_rolesCreateWithoutUsers_usersTousers_roles_created_byInput;
}
