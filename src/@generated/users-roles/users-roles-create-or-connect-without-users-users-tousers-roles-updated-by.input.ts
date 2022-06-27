import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesWhereUniqueInput } from './users-roles-where-unique.input';
import { Type } from 'class-transformer';
import { users_rolesCreateWithoutUsers_usersTousers_roles_updated_byInput } from './users-roles-create-without-users-users-tousers-roles-updated-by.input';

@InputType()
export class users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_updated_byInput {

    @Field(() => users_rolesWhereUniqueInput, {nullable:false})
    @Type(() => users_rolesWhereUniqueInput)
    where!: users_rolesWhereUniqueInput;

    @Field(() => users_rolesCreateWithoutUsers_usersTousers_roles_updated_byInput, {nullable:false})
    @Type(() => users_rolesCreateWithoutUsers_usersTousers_roles_updated_byInput)
    create!: users_rolesCreateWithoutUsers_usersTousers_roles_updated_byInput;
}
