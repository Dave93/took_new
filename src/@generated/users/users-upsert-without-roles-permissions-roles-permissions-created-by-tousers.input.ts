import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutRoles_permissions_roles_permissions_created_byTousersInput } from './users-update-without-roles-permissions-roles-permissions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutRoles_permissions_roles_permissions_created_byTousersInput } from './users-create-without-roles-permissions-roles-permissions-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutRoles_permissions_roles_permissions_created_byTousersInput {

    @Field(() => usersUpdateWithoutRoles_permissions_roles_permissions_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutRoles_permissions_roles_permissions_created_byTousersInput)
    update!: usersUpdateWithoutRoles_permissions_roles_permissions_created_byTousersInput;

    @Field(() => usersCreateWithoutRoles_permissions_roles_permissions_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutRoles_permissions_roles_permissions_created_byTousersInput)
    create!: usersCreateWithoutRoles_permissions_roles_permissions_created_byTousersInput;
}
