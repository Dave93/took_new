import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutUsers_roles_usersTousers_roles_user_idInput } from './users-update-without-users-roles-users-tousers-roles-user-id.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput } from './users-create-without-users-roles-users-tousers-roles-user-id.input';

@InputType()
export class usersUpsertWithoutUsers_roles_usersTousers_roles_user_idInput {

    @Field(() => usersUpdateWithoutUsers_roles_usersTousers_roles_user_idInput, {nullable:false})
    @Type(() => usersUpdateWithoutUsers_roles_usersTousers_roles_user_idInput)
    update!: usersUpdateWithoutUsers_roles_usersTousers_roles_user_idInput;

    @Field(() => usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput, {nullable:false})
    @Type(() => usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput)
    create!: usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput;
}
