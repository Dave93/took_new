import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesWhereUniqueInput } from './users-roles-where-unique.input';
import { Type } from 'class-transformer';
import { users_rolesUpdateWithoutUsers_usersTousers_roles_created_byInput } from './users-roles-update-without-users-users-tousers-roles-created-by.input';

@InputType()
export class users_rolesUpdateWithWhereUniqueWithoutUsers_usersTousers_roles_created_byInput {

    @Field(() => users_rolesWhereUniqueInput, {nullable:false})
    @Type(() => users_rolesWhereUniqueInput)
    where!: users_rolesWhereUniqueInput;

    @Field(() => users_rolesUpdateWithoutUsers_usersTousers_roles_created_byInput, {nullable:false})
    @Type(() => users_rolesUpdateWithoutUsers_usersTousers_roles_created_byInput)
    data!: users_rolesUpdateWithoutUsers_usersTousers_roles_created_byInput;
}
