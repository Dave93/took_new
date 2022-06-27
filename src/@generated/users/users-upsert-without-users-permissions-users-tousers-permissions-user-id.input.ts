import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutUsers_permissions_usersTousers_permissions_user_idInput } from './users-update-without-users-permissions-users-tousers-permissions-user-id.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutUsers_permissions_usersTousers_permissions_user_idInput } from './users-create-without-users-permissions-users-tousers-permissions-user-id.input';

@InputType()
export class usersUpsertWithoutUsers_permissions_usersTousers_permissions_user_idInput {

    @Field(() => usersUpdateWithoutUsers_permissions_usersTousers_permissions_user_idInput, {nullable:false})
    @Type(() => usersUpdateWithoutUsers_permissions_usersTousers_permissions_user_idInput)
    update!: usersUpdateWithoutUsers_permissions_usersTousers_permissions_user_idInput;

    @Field(() => usersCreateWithoutUsers_permissions_usersTousers_permissions_user_idInput, {nullable:false})
    @Type(() => usersCreateWithoutUsers_permissions_usersTousers_permissions_user_idInput)
    create!: usersCreateWithoutUsers_permissions_usersTousers_permissions_user_idInput;
}
