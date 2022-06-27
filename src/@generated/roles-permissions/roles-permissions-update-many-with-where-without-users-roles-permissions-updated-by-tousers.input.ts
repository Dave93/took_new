import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsScalarWhereInput } from './roles-permissions-scalar-where.input';
import { Type } from 'class-transformer';
import { roles_permissionsUncheckedUpdateManyWithoutRoles_permissions_roles_permissions_updated_byTousersInput } from './roles-permissions-unchecked-update-many-without-roles-permissions-roles-permissions-updated-by-tousers.input';

@InputType()
export class roles_permissionsUpdateManyWithWhereWithoutUsers_roles_permissions_updated_byTousersInput {

    @Field(() => roles_permissionsScalarWhereInput, {nullable:false})
    @Type(() => roles_permissionsScalarWhereInput)
    where!: roles_permissionsScalarWhereInput;

    @Field(() => roles_permissionsUncheckedUpdateManyWithoutRoles_permissions_roles_permissions_updated_byTousersInput, {nullable:false})
    @Type(() => roles_permissionsUncheckedUpdateManyWithoutRoles_permissions_roles_permissions_updated_byTousersInput)
    data!: roles_permissionsUncheckedUpdateManyWithoutRoles_permissions_roles_permissions_updated_byTousersInput;
}
