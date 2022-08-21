import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsUpdateOneRequiredWithoutRoles_permissionsNestedInput } from '../permissions/permissions-update-one-required-without-roles-permissions-nested.input';
import { rolesUpdateOneRequiredWithoutRoles_permissionsNestedInput } from '../roles/roles-update-one-required-without-roles-permissions-nested.input';
import { usersUpdateOneWithoutRoles_permissions_roles_permissions_updated_byTousersNestedInput } from '../users/users-update-one-without-roles-permissions-roles-permissions-updated-by-tousers-nested.input';

@InputType()
export class roles_permissionsUpdateWithoutUsers_roles_permissions_created_byTousersInput {

    @Field(() => permissionsUpdateOneRequiredWithoutRoles_permissionsNestedInput, {nullable:true})
    permissions?: permissionsUpdateOneRequiredWithoutRoles_permissionsNestedInput;

    @Field(() => rolesUpdateOneRequiredWithoutRoles_permissionsNestedInput, {nullable:true})
    roles?: rolesUpdateOneRequiredWithoutRoles_permissionsNestedInput;

    @Field(() => usersUpdateOneWithoutRoles_permissions_roles_permissions_updated_byTousersNestedInput, {nullable:true})
    users_roles_permissions_updated_byTousers?: usersUpdateOneWithoutRoles_permissions_roles_permissions_updated_byTousersNestedInput;
}
