import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_created_byNestedInput } from '../users/users-update-one-without-users-permissions-users-tousers-permissions-created-by-nested.input';
import { usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_updated_byNestedInput } from '../users/users-update-one-without-users-permissions-users-tousers-permissions-updated-by-nested.input';
import { usersUpdateOneRequiredWithoutUsers_permissions_usersTousers_permissions_user_idNestedInput } from '../users/users-update-one-required-without-users-permissions-users-tousers-permissions-user-id-nested.input';

@InputType()
export class users_permissionsUpdateWithoutPermissionsInput {

    @Field(() => usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_created_byNestedInput, {nullable:true})
    users_usersTousers_permissions_created_by?: usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_created_byNestedInput;

    @Field(() => usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_updated_byNestedInput, {nullable:true})
    users_usersTousers_permissions_updated_by?: usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_updated_byNestedInput;

    @Field(() => usersUpdateOneRequiredWithoutUsers_permissions_usersTousers_permissions_user_idNestedInput, {nullable:true})
    users_usersTousers_permissions_user_id?: usersUpdateOneRequiredWithoutUsers_permissions_usersTousers_permissions_user_idNestedInput;
}
