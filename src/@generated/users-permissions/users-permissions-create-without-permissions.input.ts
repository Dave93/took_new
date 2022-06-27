import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_created_byInput } from '../users/users-create-nested-one-without-users-permissions-users-tousers-permissions-created-by.input';
import { usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_updated_byInput } from '../users/users-create-nested-one-without-users-permissions-users-tousers-permissions-updated-by.input';
import { usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_user_idInput } from '../users/users-create-nested-one-without-users-permissions-users-tousers-permissions-user-id.input';

@InputType()
export class users_permissionsCreateWithoutPermissionsInput {

    @Field(() => usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_created_byInput, {nullable:true})
    users_usersTousers_permissions_created_by?: usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_created_byInput;

    @Field(() => usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_updated_byInput, {nullable:true})
    users_usersTousers_permissions_updated_by?: usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_updated_byInput;

    @Field(() => usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_user_idInput, {nullable:false})
    users_usersTousers_permissions_user_id!: usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_user_idInput;
}
