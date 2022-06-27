import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsCreateWithoutUsers_roles_permissions_created_byTousersInput } from './roles-permissions-create-without-users-roles-permissions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { roles_permissionsCreateOrConnectWithoutUsers_roles_permissions_created_byTousersInput } from './roles-permissions-create-or-connect-without-users-roles-permissions-created-by-tousers.input';
import { roles_permissionsUpsertWithWhereUniqueWithoutUsers_roles_permissions_created_byTousersInput } from './roles-permissions-upsert-with-where-unique-without-users-roles-permissions-created-by-tousers.input';
import { roles_permissionsCreateManyUsers_roles_permissions_created_byTousersInputEnvelope } from './roles-permissions-create-many-users-roles-permissions-created-by-tousers-input-envelope.input';
import { roles_permissionsWhereUniqueInput } from './roles-permissions-where-unique.input';
import { roles_permissionsUpdateWithWhereUniqueWithoutUsers_roles_permissions_created_byTousersInput } from './roles-permissions-update-with-where-unique-without-users-roles-permissions-created-by-tousers.input';
import { roles_permissionsUpdateManyWithWhereWithoutUsers_roles_permissions_created_byTousersInput } from './roles-permissions-update-many-with-where-without-users-roles-permissions-created-by-tousers.input';
import { roles_permissionsScalarWhereInput } from './roles-permissions-scalar-where.input';

@InputType()
export class roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_created_byTousersInput {

    @Field(() => [roles_permissionsCreateWithoutUsers_roles_permissions_created_byTousersInput], {nullable:true})
    @Type(() => roles_permissionsCreateWithoutUsers_roles_permissions_created_byTousersInput)
    create?: Array<roles_permissionsCreateWithoutUsers_roles_permissions_created_byTousersInput>;

    @Field(() => [roles_permissionsCreateOrConnectWithoutUsers_roles_permissions_created_byTousersInput], {nullable:true})
    @Type(() => roles_permissionsCreateOrConnectWithoutUsers_roles_permissions_created_byTousersInput)
    connectOrCreate?: Array<roles_permissionsCreateOrConnectWithoutUsers_roles_permissions_created_byTousersInput>;

    @Field(() => [roles_permissionsUpsertWithWhereUniqueWithoutUsers_roles_permissions_created_byTousersInput], {nullable:true})
    @Type(() => roles_permissionsUpsertWithWhereUniqueWithoutUsers_roles_permissions_created_byTousersInput)
    upsert?: Array<roles_permissionsUpsertWithWhereUniqueWithoutUsers_roles_permissions_created_byTousersInput>;

    @Field(() => roles_permissionsCreateManyUsers_roles_permissions_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => roles_permissionsCreateManyUsers_roles_permissions_created_byTousersInputEnvelope)
    createMany?: roles_permissionsCreateManyUsers_roles_permissions_created_byTousersInputEnvelope;

    @Field(() => [roles_permissionsWhereUniqueInput], {nullable:true})
    @Type(() => roles_permissionsWhereUniqueInput)
    set?: Array<roles_permissionsWhereUniqueInput>;

    @Field(() => [roles_permissionsWhereUniqueInput], {nullable:true})
    @Type(() => roles_permissionsWhereUniqueInput)
    disconnect?: Array<roles_permissionsWhereUniqueInput>;

    @Field(() => [roles_permissionsWhereUniqueInput], {nullable:true})
    @Type(() => roles_permissionsWhereUniqueInput)
    delete?: Array<roles_permissionsWhereUniqueInput>;

    @Field(() => [roles_permissionsWhereUniqueInput], {nullable:true})
    @Type(() => roles_permissionsWhereUniqueInput)
    connect?: Array<roles_permissionsWhereUniqueInput>;

    @Field(() => [roles_permissionsUpdateWithWhereUniqueWithoutUsers_roles_permissions_created_byTousersInput], {nullable:true})
    @Type(() => roles_permissionsUpdateWithWhereUniqueWithoutUsers_roles_permissions_created_byTousersInput)
    update?: Array<roles_permissionsUpdateWithWhereUniqueWithoutUsers_roles_permissions_created_byTousersInput>;

    @Field(() => [roles_permissionsUpdateManyWithWhereWithoutUsers_roles_permissions_created_byTousersInput], {nullable:true})
    @Type(() => roles_permissionsUpdateManyWithWhereWithoutUsers_roles_permissions_created_byTousersInput)
    updateMany?: Array<roles_permissionsUpdateManyWithWhereWithoutUsers_roles_permissions_created_byTousersInput>;

    @Field(() => [roles_permissionsScalarWhereInput], {nullable:true})
    @Type(() => roles_permissionsScalarWhereInput)
    deleteMany?: Array<roles_permissionsScalarWhereInput>;
}
