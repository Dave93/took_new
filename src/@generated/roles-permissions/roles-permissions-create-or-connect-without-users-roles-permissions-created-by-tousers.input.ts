import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsWhereUniqueInput } from './roles-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { roles_permissionsCreateWithoutUsers_roles_permissions_created_byTousersInput } from './roles-permissions-create-without-users-roles-permissions-created-by-tousers.input';

@InputType()
export class roles_permissionsCreateOrConnectWithoutUsers_roles_permissions_created_byTousersInput {

    @Field(() => roles_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => roles_permissionsWhereUniqueInput)
    where!: roles_permissionsWhereUniqueInput;

    @Field(() => roles_permissionsCreateWithoutUsers_roles_permissions_created_byTousersInput, {nullable:false})
    @Type(() => roles_permissionsCreateWithoutUsers_roles_permissions_created_byTousersInput)
    create!: roles_permissionsCreateWithoutUsers_roles_permissions_created_byTousersInput;
}
