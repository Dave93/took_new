import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsWhereUniqueInput } from './users-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { users_permissionsUpdateWithoutUsers_usersTousers_permissions_user_idInput } from './users-permissions-update-without-users-users-tousers-permissions-user-id.input';
import { users_permissionsCreateWithoutUsers_usersTousers_permissions_user_idInput } from './users-permissions-create-without-users-users-tousers-permissions-user-id.input';

@InputType()
export class users_permissionsUpsertWithWhereUniqueWithoutUsers_usersTousers_permissions_user_idInput {

    @Field(() => users_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => users_permissionsWhereUniqueInput)
    where!: users_permissionsWhereUniqueInput;

    @Field(() => users_permissionsUpdateWithoutUsers_usersTousers_permissions_user_idInput, {nullable:false})
    @Type(() => users_permissionsUpdateWithoutUsers_usersTousers_permissions_user_idInput)
    update!: users_permissionsUpdateWithoutUsers_usersTousers_permissions_user_idInput;

    @Field(() => users_permissionsCreateWithoutUsers_usersTousers_permissions_user_idInput, {nullable:false})
    @Type(() => users_permissionsCreateWithoutUsers_usersTousers_permissions_user_idInput)
    create!: users_permissionsCreateWithoutUsers_usersTousers_permissions_user_idInput;
}
