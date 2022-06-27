import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_created_byInput } from '../users/users-update-one-without-users-permissions-users-tousers-permissions-created-by.input';
import { usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_updated_byInput } from '../users/users-update-one-without-users-permissions-users-tousers-permissions-updated-by.input';
import { usersUpdateOneRequiredWithoutUsers_permissions_usersTousers_permissions_user_idInput } from '../users/users-update-one-required-without-users-permissions-users-tousers-permissions-user-id.input';

@InputType()
export class users_permissionsUpdateWithoutPermissionsInput {

    @Field(() => usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_created_byInput, {nullable:true})
    users_usersTousers_permissions_created_by?: usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_created_byInput;

    @Field(() => usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_updated_byInput, {nullable:true})
    users_usersTousers_permissions_updated_by?: usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_updated_byInput;

    @Field(() => usersUpdateOneRequiredWithoutUsers_permissions_usersTousers_permissions_user_idInput, {nullable:true})
    users_usersTousers_permissions_user_id?: usersUpdateOneRequiredWithoutUsers_permissions_usersTousers_permissions_user_idInput;
}
