import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsCreateWithoutUsers_permissions_updated_byTousersInput } from './permissions-create-without-users-permissions-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { permissionsCreateOrConnectWithoutUsers_permissions_updated_byTousersInput } from './permissions-create-or-connect-without-users-permissions-updated-by-tousers.input';
import { permissionsUpsertWithWhereUniqueWithoutUsers_permissions_updated_byTousersInput } from './permissions-upsert-with-where-unique-without-users-permissions-updated-by-tousers.input';
import { permissionsCreateManyUsers_permissions_updated_byTousersInputEnvelope } from './permissions-create-many-users-permissions-updated-by-tousers-input-envelope.input';
import { permissionsWhereUniqueInput } from './permissions-where-unique.input';
import { permissionsUpdateWithWhereUniqueWithoutUsers_permissions_updated_byTousersInput } from './permissions-update-with-where-unique-without-users-permissions-updated-by-tousers.input';
import { permissionsUpdateManyWithWhereWithoutUsers_permissions_updated_byTousersInput } from './permissions-update-many-with-where-without-users-permissions-updated-by-tousers.input';
import { permissionsScalarWhereInput } from './permissions-scalar-where.input';

@InputType()
export class permissionsUpdateManyWithoutUsers_permissions_updated_byTousersInput {

    @Field(() => [permissionsCreateWithoutUsers_permissions_updated_byTousersInput], {nullable:true})
    @Type(() => permissionsCreateWithoutUsers_permissions_updated_byTousersInput)
    create?: Array<permissionsCreateWithoutUsers_permissions_updated_byTousersInput>;

    @Field(() => [permissionsCreateOrConnectWithoutUsers_permissions_updated_byTousersInput], {nullable:true})
    @Type(() => permissionsCreateOrConnectWithoutUsers_permissions_updated_byTousersInput)
    connectOrCreate?: Array<permissionsCreateOrConnectWithoutUsers_permissions_updated_byTousersInput>;

    @Field(() => [permissionsUpsertWithWhereUniqueWithoutUsers_permissions_updated_byTousersInput], {nullable:true})
    @Type(() => permissionsUpsertWithWhereUniqueWithoutUsers_permissions_updated_byTousersInput)
    upsert?: Array<permissionsUpsertWithWhereUniqueWithoutUsers_permissions_updated_byTousersInput>;

    @Field(() => permissionsCreateManyUsers_permissions_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => permissionsCreateManyUsers_permissions_updated_byTousersInputEnvelope)
    createMany?: permissionsCreateManyUsers_permissions_updated_byTousersInputEnvelope;

    @Field(() => [permissionsWhereUniqueInput], {nullable:true})
    @Type(() => permissionsWhereUniqueInput)
    set?: Array<permissionsWhereUniqueInput>;

    @Field(() => [permissionsWhereUniqueInput], {nullable:true})
    @Type(() => permissionsWhereUniqueInput)
    disconnect?: Array<permissionsWhereUniqueInput>;

    @Field(() => [permissionsWhereUniqueInput], {nullable:true})
    @Type(() => permissionsWhereUniqueInput)
    delete?: Array<permissionsWhereUniqueInput>;

    @Field(() => [permissionsWhereUniqueInput], {nullable:true})
    @Type(() => permissionsWhereUniqueInput)
    connect?: Array<permissionsWhereUniqueInput>;

    @Field(() => [permissionsUpdateWithWhereUniqueWithoutUsers_permissions_updated_byTousersInput], {nullable:true})
    @Type(() => permissionsUpdateWithWhereUniqueWithoutUsers_permissions_updated_byTousersInput)
    update?: Array<permissionsUpdateWithWhereUniqueWithoutUsers_permissions_updated_byTousersInput>;

    @Field(() => [permissionsUpdateManyWithWhereWithoutUsers_permissions_updated_byTousersInput], {nullable:true})
    @Type(() => permissionsUpdateManyWithWhereWithoutUsers_permissions_updated_byTousersInput)
    updateMany?: Array<permissionsUpdateManyWithWhereWithoutUsers_permissions_updated_byTousersInput>;

    @Field(() => [permissionsScalarWhereInput], {nullable:true})
    @Type(() => permissionsScalarWhereInput)
    deleteMany?: Array<permissionsScalarWhereInput>;
}
