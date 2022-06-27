import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsWhereUniqueInput } from './roles-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { roles_permissionsUpdateWithoutUsers_roles_permissions_updated_byTousersInput } from './roles-permissions-update-without-users-roles-permissions-updated-by-tousers.input';
import { roles_permissionsCreateWithoutUsers_roles_permissions_updated_byTousersInput } from './roles-permissions-create-without-users-roles-permissions-updated-by-tousers.input';

@InputType()
export class roles_permissionsUpsertWithWhereUniqueWithoutUsers_roles_permissions_updated_byTousersInput {

    @Field(() => roles_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => roles_permissionsWhereUniqueInput)
    where!: roles_permissionsWhereUniqueInput;

    @Field(() => roles_permissionsUpdateWithoutUsers_roles_permissions_updated_byTousersInput, {nullable:false})
    @Type(() => roles_permissionsUpdateWithoutUsers_roles_permissions_updated_byTousersInput)
    update!: roles_permissionsUpdateWithoutUsers_roles_permissions_updated_byTousersInput;

    @Field(() => roles_permissionsCreateWithoutUsers_roles_permissions_updated_byTousersInput, {nullable:false})
    @Type(() => roles_permissionsCreateWithoutUsers_roles_permissions_updated_byTousersInput)
    create!: roles_permissionsCreateWithoutUsers_roles_permissions_updated_byTousersInput;
}
