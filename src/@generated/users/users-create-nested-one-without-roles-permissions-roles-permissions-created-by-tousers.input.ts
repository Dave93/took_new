import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutRoles_permissions_roles_permissions_created_byTousersInput } from './users-create-without-roles-permissions-roles-permissions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutRoles_permissions_roles_permissions_created_byTousersInput } from './users-create-or-connect-without-roles-permissions-roles-permissions-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutRoles_permissions_roles_permissions_created_byTousersInput {

    @Field(() => usersCreateWithoutRoles_permissions_roles_permissions_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutRoles_permissions_roles_permissions_created_byTousersInput)
    create?: usersCreateWithoutRoles_permissions_roles_permissions_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutRoles_permissions_roles_permissions_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutRoles_permissions_roles_permissions_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutRoles_permissions_roles_permissions_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
