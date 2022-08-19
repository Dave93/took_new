import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_created_byNestedInput } from '../users/users-update-one-without-users-permissions-users-tousers-permissions-created-by-nested.input';
import { permissionsUpdateOneRequiredWithoutUsers_permissionsNestedInput } from '../permissions/permissions-update-one-required-without-users-permissions-nested.input';
import { usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_updated_byNestedInput } from '../users/users-update-one-without-users-permissions-users-tousers-permissions-updated-by-nested.input';

@InputType()
export class users_permissionsUpdateWithoutUsers_usersTousers_permissions_user_idInput {

    @Field(() => usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_created_byNestedInput, {nullable:true})
    users_usersTousers_permissions_created_by?: usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_created_byNestedInput;

    @Field(() => permissionsUpdateOneRequiredWithoutUsers_permissionsNestedInput, {nullable:true})
    permissions?: permissionsUpdateOneRequiredWithoutUsers_permissionsNestedInput;

    @Field(() => usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_updated_byNestedInput, {nullable:true})
    users_usersTousers_permissions_updated_by?: usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_updated_byNestedInput;
}
