import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsUncheckedUpdateManyWithoutRolesNestedInput } from '../roles-permissions/roles-permissions-unchecked-update-many-without-roles-nested.input';
import { users_rolesUncheckedUpdateManyWithoutRolesNestedInput } from '../users-roles/users-roles-unchecked-update-many-without-roles-nested.input';

@InputType()
export class rolesUncheckedUpdateInput {

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

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => roles_permissionsUncheckedUpdateManyWithoutRolesNestedInput, {nullable:true})
    roles_permissions?: roles_permissionsUncheckedUpdateManyWithoutRolesNestedInput;

    @Field(() => users_rolesUncheckedUpdateManyWithoutRolesNestedInput, {nullable:true})
    users_roles?: users_rolesUncheckedUpdateManyWithoutRolesNestedInput;
}
