import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsUncheckedCreateNestedManyWithoutRolesInput } from '../roles-permissions/roles-permissions-unchecked-create-nested-many-without-roles.input';
import { users_rolesUncheckedCreateNestedManyWithoutRolesInput } from '../users-roles/users-roles-unchecked-create-nested-many-without-roles.input';

@InputType()
export class rolesUncheckedCreateWithoutUsers_roles_created_byTousersInput {

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

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => roles_permissionsUncheckedCreateNestedManyWithoutRolesInput, {nullable:true})
    roles_permissions?: roles_permissionsUncheckedCreateNestedManyWithoutRolesInput;

    @Field(() => users_rolesUncheckedCreateNestedManyWithoutRolesInput, {nullable:true})
    users_roles?: users_rolesUncheckedCreateNestedManyWithoutRolesInput;
}
