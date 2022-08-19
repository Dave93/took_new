import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsCreateWithoutRolesInput } from './roles-permissions-create-without-roles.input';
import { Type } from 'class-transformer';
import { roles_permissionsCreateOrConnectWithoutRolesInput } from './roles-permissions-create-or-connect-without-roles.input';
import { roles_permissionsUpsertWithWhereUniqueWithoutRolesInput } from './roles-permissions-upsert-with-where-unique-without-roles.input';
import { roles_permissionsCreateManyRolesInputEnvelope } from './roles-permissions-create-many-roles-input-envelope.input';
import { roles_permissionsWhereUniqueInput } from './roles-permissions-where-unique.input';
import { roles_permissionsUpdateWithWhereUniqueWithoutRolesInput } from './roles-permissions-update-with-where-unique-without-roles.input';
import { roles_permissionsUpdateManyWithWhereWithoutRolesInput } from './roles-permissions-update-many-with-where-without-roles.input';
import { roles_permissionsScalarWhereInput } from './roles-permissions-scalar-where.input';

@InputType()
export class roles_permissionsUncheckedUpdateManyWithoutRolesNestedInput {

    @Field(() => [roles_permissionsCreateWithoutRolesInput], {nullable:true})
    @Type(() => roles_permissionsCreateWithoutRolesInput)
    create?: Array<roles_permissionsCreateWithoutRolesInput>;

    @Field(() => [roles_permissionsCreateOrConnectWithoutRolesInput], {nullable:true})
    @Type(() => roles_permissionsCreateOrConnectWithoutRolesInput)
    connectOrCreate?: Array<roles_permissionsCreateOrConnectWithoutRolesInput>;

    @Field(() => [roles_permissionsUpsertWithWhereUniqueWithoutRolesInput], {nullable:true})
    @Type(() => roles_permissionsUpsertWithWhereUniqueWithoutRolesInput)
    upsert?: Array<roles_permissionsUpsertWithWhereUniqueWithoutRolesInput>;

    @Field(() => roles_permissionsCreateManyRolesInputEnvelope, {nullable:true})
    @Type(() => roles_permissionsCreateManyRolesInputEnvelope)
    createMany?: roles_permissionsCreateManyRolesInputEnvelope;

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

    @Field(() => [roles_permissionsUpdateWithWhereUniqueWithoutRolesInput], {nullable:true})
    @Type(() => roles_permissionsUpdateWithWhereUniqueWithoutRolesInput)
    update?: Array<roles_permissionsUpdateWithWhereUniqueWithoutRolesInput>;

    @Field(() => [roles_permissionsUpdateManyWithWhereWithoutRolesInput], {nullable:true})
    @Type(() => roles_permissionsUpdateManyWithWhereWithoutRolesInput)
    updateMany?: Array<roles_permissionsUpdateManyWithWhereWithoutRolesInput>;

    @Field(() => [roles_permissionsScalarWhereInput], {nullable:true})
    @Type(() => roles_permissionsScalarWhereInput)
    deleteMany?: Array<roles_permissionsScalarWhereInput>;
}
