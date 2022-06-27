import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutRoles_permissions_roles_permissions_updated_byTousersInput } from './users-create-without-roles-permissions-roles-permissions-updated-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutRoles_permissions_roles_permissions_updated_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutRoles_permissions_roles_permissions_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutRoles_permissions_roles_permissions_updated_byTousersInput)
    create!: usersCreateWithoutRoles_permissions_roles_permissions_updated_byTousersInput;
}
