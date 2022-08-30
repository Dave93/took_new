import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutRoles_roles_created_byTousersInput } from '../users/users-create-nested-one-without-roles-roles-created-by-tousers.input';
import { roles_permissionsCreateNestedManyWithoutRolesInput } from '../roles-permissions/roles-permissions-create-nested-many-without-roles.input';
import { users_rolesCreateNestedManyWithoutRolesInput } from '../users-roles/users-roles-create-nested-many-without-roles.input';

@InputType()
export class rolesCreateWithoutUsers_roles_updated_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutRoles_roles_created_byTousersInput, {nullable:true})
    users_roles_created_byTousers?: usersCreateNestedOneWithoutRoles_roles_created_byTousersInput;

    @Field(() => roles_permissionsCreateNestedManyWithoutRolesInput, {nullable:true})
    roles_permissions?: roles_permissionsCreateNestedManyWithoutRolesInput;

    @Field(() => users_rolesCreateNestedManyWithoutRolesInput, {nullable:true})
    users_roles?: users_rolesCreateNestedManyWithoutRolesInput;
}
