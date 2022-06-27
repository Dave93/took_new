import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutRoles_roles_created_byTousersInput } from '../users/users-create-nested-one-without-roles-roles-created-by-tousers.input';
import { usersCreateNestedOneWithoutRoles_roles_updated_byTousersInput } from '../users/users-create-nested-one-without-roles-roles-updated-by-tousers.input';
import { roles_permissionsCreateNestedManyWithoutRolesInput } from '../roles-permissions/roles-permissions-create-nested-many-without-roles.input';

@InputType()
export class rolesCreateWithoutUsers_rolesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutRoles_roles_created_byTousersInput, {nullable:true})
    users_roles_created_byTousers?: usersCreateNestedOneWithoutRoles_roles_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutRoles_roles_updated_byTousersInput, {nullable:true})
    users_roles_updated_byTousers?: usersCreateNestedOneWithoutRoles_roles_updated_byTousersInput;

    @Field(() => roles_permissionsCreateNestedManyWithoutRolesInput, {nullable:true})
    roles_permissions?: roles_permissionsCreateNestedManyWithoutRolesInput;
}
