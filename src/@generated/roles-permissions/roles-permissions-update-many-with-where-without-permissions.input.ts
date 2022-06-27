import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsScalarWhereInput } from './roles-permissions-scalar-where.input';
import { Type } from 'class-transformer';
import { roles_permissionsUncheckedUpdateManyWithoutRoles_permissionsInput } from './roles-permissions-unchecked-update-many-without-roles-permissions.input';

@InputType()
export class roles_permissionsUpdateManyWithWhereWithoutPermissionsInput {

    @Field(() => roles_permissionsScalarWhereInput, {nullable:false})
    @Type(() => roles_permissionsScalarWhereInput)
    where!: roles_permissionsScalarWhereInput;

    @Field(() => roles_permissionsUncheckedUpdateManyWithoutRoles_permissionsInput, {nullable:false})
    @Type(() => roles_permissionsUncheckedUpdateManyWithoutRoles_permissionsInput)
    data!: roles_permissionsUncheckedUpdateManyWithoutRoles_permissionsInput;
}
