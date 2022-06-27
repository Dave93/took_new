import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutRoles_permissions_roles_permissions_created_byTousersInput } from '../users/users-update-one-without-roles-permissions-roles-permissions-created-by-tousers.input';
import { permissionsUpdateOneRequiredWithoutRoles_permissionsInput } from '../permissions/permissions-update-one-required-without-roles-permissions.input';
import { usersUpdateOneWithoutRoles_permissions_roles_permissions_updated_byTousersInput } from '../users/users-update-one-without-roles-permissions-roles-permissions-updated-by-tousers.input';

@InputType()
export class roles_permissionsUpdateWithoutRolesInput {

    @Field(() => usersUpdateOneWithoutRoles_permissions_roles_permissions_created_byTousersInput, {nullable:true})
    users_roles_permissions_created_byTousers?: usersUpdateOneWithoutRoles_permissions_roles_permissions_created_byTousersInput;

    @Field(() => permissionsUpdateOneRequiredWithoutRoles_permissionsInput, {nullable:true})
    permissions?: permissionsUpdateOneRequiredWithoutRoles_permissionsInput;

    @Field(() => usersUpdateOneWithoutRoles_permissions_roles_permissions_updated_byTousersInput, {nullable:true})
    users_roles_permissions_updated_byTousers?: usersUpdateOneWithoutRoles_permissions_roles_permissions_updated_byTousersInput;
}
