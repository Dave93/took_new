import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_created_byInput } from '../users/users-create-nested-one-without-users-permissions-users-tousers-permissions-created-by.input';
import { permissionsCreateNestedOneWithoutUsers_permissionsInput } from '../permissions/permissions-create-nested-one-without-users-permissions.input';
import { usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_updated_byInput } from '../users/users-create-nested-one-without-users-permissions-users-tousers-permissions-updated-by.input';

@InputType()
export class users_permissionsCreateWithoutUsers_usersTousers_permissions_user_idInput {

    @Field(() => usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_created_byInput, {nullable:true})
    users_usersTousers_permissions_created_by?: usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_created_byInput;

    @Field(() => permissionsCreateNestedOneWithoutUsers_permissionsInput, {nullable:false})
    permissions!: permissionsCreateNestedOneWithoutUsers_permissionsInput;

    @Field(() => usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_updated_byInput, {nullable:true})
    users_usersTousers_permissions_updated_by?: usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_updated_byInput;
}
