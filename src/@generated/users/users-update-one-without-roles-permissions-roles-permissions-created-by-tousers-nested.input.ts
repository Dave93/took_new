import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutRoles_permissions_roles_permissions_created_byTousersInput } from './users-create-without-roles-permissions-roles-permissions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutRoles_permissions_roles_permissions_created_byTousersInput } from './users-create-or-connect-without-roles-permissions-roles-permissions-created-by-tousers.input';
import { usersUpsertWithoutRoles_permissions_roles_permissions_created_byTousersInput } from './users-upsert-without-roles-permissions-roles-permissions-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutRoles_permissions_roles_permissions_created_byTousersInput } from './users-update-without-roles-permissions-roles-permissions-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutRoles_permissions_roles_permissions_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutRoles_permissions_roles_permissions_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutRoles_permissions_roles_permissions_created_byTousersInput)
    create?: usersCreateWithoutRoles_permissions_roles_permissions_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutRoles_permissions_roles_permissions_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutRoles_permissions_roles_permissions_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutRoles_permissions_roles_permissions_created_byTousersInput;

    @Field(() => usersUpsertWithoutRoles_permissions_roles_permissions_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutRoles_permissions_roles_permissions_created_byTousersInput)
    upsert?: usersUpsertWithoutRoles_permissions_roles_permissions_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutRoles_permissions_roles_permissions_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutRoles_permissions_roles_permissions_created_byTousersInput)
    update?: usersUpdateWithoutRoles_permissions_roles_permissions_created_byTousersInput;
}
