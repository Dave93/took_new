import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutRoles_permissions_roles_permissions_created_byTousersInput } from '../users/users-create-nested-one-without-roles-permissions-roles-permissions-created-by-tousers.input';
import { rolesCreateNestedOneWithoutRoles_permissionsInput } from '../roles/roles-create-nested-one-without-roles-permissions.input';
import { usersCreateNestedOneWithoutRoles_permissions_roles_permissions_updated_byTousersInput } from '../users/users-create-nested-one-without-roles-permissions-roles-permissions-updated-by-tousers.input';

@InputType()
export class roles_permissionsCreateWithoutPermissionsInput {

    @Field(() => usersCreateNestedOneWithoutRoles_permissions_roles_permissions_created_byTousersInput, {nullable:true})
    users_roles_permissions_created_byTousers?: usersCreateNestedOneWithoutRoles_permissions_roles_permissions_created_byTousersInput;

    @Field(() => rolesCreateNestedOneWithoutRoles_permissionsInput, {nullable:false})
    roles!: rolesCreateNestedOneWithoutRoles_permissionsInput;

    @Field(() => usersCreateNestedOneWithoutRoles_permissions_roles_permissions_updated_byTousersInput, {nullable:true})
    users_roles_permissions_updated_byTousers?: usersCreateNestedOneWithoutRoles_permissions_roles_permissions_updated_byTousersInput;
}
