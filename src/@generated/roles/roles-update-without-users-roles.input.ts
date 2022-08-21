import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutRoles_roles_created_byTousersNestedInput } from '../users/users-update-one-without-roles-roles-created-by-tousers-nested.input';
import { usersUpdateOneWithoutRoles_roles_updated_byTousersNestedInput } from '../users/users-update-one-without-roles-roles-updated-by-tousers-nested.input';
import { roles_permissionsUpdateManyWithoutRolesNestedInput } from '../roles-permissions/roles-permissions-update-many-without-roles-nested.input';

@InputType()
export class rolesUpdateWithoutUsers_rolesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneWithoutRoles_roles_created_byTousersNestedInput, {nullable:true})
    users_roles_created_byTousers?: usersUpdateOneWithoutRoles_roles_created_byTousersNestedInput;

    @Field(() => usersUpdateOneWithoutRoles_roles_updated_byTousersNestedInput, {nullable:true})
    users_roles_updated_byTousers?: usersUpdateOneWithoutRoles_roles_updated_byTousersNestedInput;

    @Field(() => roles_permissionsUpdateManyWithoutRolesNestedInput, {nullable:true})
    roles_permissions?: roles_permissionsUpdateManyWithoutRolesNestedInput;
}
