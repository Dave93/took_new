import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsCreateWithoutPermissionsInput } from './roles-permissions-create-without-permissions.input';
import { Type } from 'class-transformer';
import { roles_permissionsCreateOrConnectWithoutPermissionsInput } from './roles-permissions-create-or-connect-without-permissions.input';
import { roles_permissionsUpsertWithWhereUniqueWithoutPermissionsInput } from './roles-permissions-upsert-with-where-unique-without-permissions.input';
import { roles_permissionsCreateManyPermissionsInputEnvelope } from './roles-permissions-create-many-permissions-input-envelope.input';
import { roles_permissionsWhereUniqueInput } from './roles-permissions-where-unique.input';
import { roles_permissionsUpdateWithWhereUniqueWithoutPermissionsInput } from './roles-permissions-update-with-where-unique-without-permissions.input';
import { roles_permissionsUpdateManyWithWhereWithoutPermissionsInput } from './roles-permissions-update-many-with-where-without-permissions.input';
import { roles_permissionsScalarWhereInput } from './roles-permissions-scalar-where.input';

@InputType()
export class roles_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput {

    @Field(() => [roles_permissionsCreateWithoutPermissionsInput], {nullable:true})
    @Type(() => roles_permissionsCreateWithoutPermissionsInput)
    create?: Array<roles_permissionsCreateWithoutPermissionsInput>;

    @Field(() => [roles_permissionsCreateOrConnectWithoutPermissionsInput], {nullable:true})
    @Type(() => roles_permissionsCreateOrConnectWithoutPermissionsInput)
    connectOrCreate?: Array<roles_permissionsCreateOrConnectWithoutPermissionsInput>;

    @Field(() => [roles_permissionsUpsertWithWhereUniqueWithoutPermissionsInput], {nullable:true})
    @Type(() => roles_permissionsUpsertWithWhereUniqueWithoutPermissionsInput)
    upsert?: Array<roles_permissionsUpsertWithWhereUniqueWithoutPermissionsInput>;

    @Field(() => roles_permissionsCreateManyPermissionsInputEnvelope, {nullable:true})
    @Type(() => roles_permissionsCreateManyPermissionsInputEnvelope)
    createMany?: roles_permissionsCreateManyPermissionsInputEnvelope;

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

    @Field(() => [roles_permissionsUpdateWithWhereUniqueWithoutPermissionsInput], {nullable:true})
    @Type(() => roles_permissionsUpdateWithWhereUniqueWithoutPermissionsInput)
    update?: Array<roles_permissionsUpdateWithWhereUniqueWithoutPermissionsInput>;

    @Field(() => [roles_permissionsUpdateManyWithWhereWithoutPermissionsInput], {nullable:true})
    @Type(() => roles_permissionsUpdateManyWithWhereWithoutPermissionsInput)
    updateMany?: Array<roles_permissionsUpdateManyWithWhereWithoutPermissionsInput>;

    @Field(() => [roles_permissionsScalarWhereInput], {nullable:true})
    @Type(() => roles_permissionsScalarWhereInput)
    deleteMany?: Array<roles_permissionsScalarWhereInput>;
}
