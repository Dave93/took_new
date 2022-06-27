import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsCreateWithoutUsers_roles_permissions_created_byTousersInput } from './roles-permissions-create-without-users-roles-permissions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { roles_permissionsCreateOrConnectWithoutUsers_roles_permissions_created_byTousersInput } from './roles-permissions-create-or-connect-without-users-roles-permissions-created-by-tousers.input';
import { roles_permissionsCreateManyUsers_roles_permissions_created_byTousersInputEnvelope } from './roles-permissions-create-many-users-roles-permissions-created-by-tousers-input-envelope.input';
import { roles_permissionsWhereUniqueInput } from './roles-permissions-where-unique.input';

@InputType()
export class roles_permissionsCreateNestedManyWithoutUsers_roles_permissions_created_byTousersInput {

    @Field(() => [roles_permissionsCreateWithoutUsers_roles_permissions_created_byTousersInput], {nullable:true})
    @Type(() => roles_permissionsCreateWithoutUsers_roles_permissions_created_byTousersInput)
    create?: Array<roles_permissionsCreateWithoutUsers_roles_permissions_created_byTousersInput>;

    @Field(() => [roles_permissionsCreateOrConnectWithoutUsers_roles_permissions_created_byTousersInput], {nullable:true})
    @Type(() => roles_permissionsCreateOrConnectWithoutUsers_roles_permissions_created_byTousersInput)
    connectOrCreate?: Array<roles_permissionsCreateOrConnectWithoutUsers_roles_permissions_created_byTousersInput>;

    @Field(() => roles_permissionsCreateManyUsers_roles_permissions_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => roles_permissionsCreateManyUsers_roles_permissions_created_byTousersInputEnvelope)
    createMany?: roles_permissionsCreateManyUsers_roles_permissions_created_byTousersInputEnvelope;

    @Field(() => [roles_permissionsWhereUniqueInput], {nullable:true})
    @Type(() => roles_permissionsWhereUniqueInput)
    connect?: Array<roles_permissionsWhereUniqueInput>;
}
