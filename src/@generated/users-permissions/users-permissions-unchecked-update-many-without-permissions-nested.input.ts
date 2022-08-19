import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsCreateWithoutPermissionsInput } from './users-permissions-create-without-permissions.input';
import { Type } from 'class-transformer';
import { users_permissionsCreateOrConnectWithoutPermissionsInput } from './users-permissions-create-or-connect-without-permissions.input';
import { users_permissionsUpsertWithWhereUniqueWithoutPermissionsInput } from './users-permissions-upsert-with-where-unique-without-permissions.input';
import { users_permissionsCreateManyPermissionsInputEnvelope } from './users-permissions-create-many-permissions-input-envelope.input';
import { users_permissionsWhereUniqueInput } from './users-permissions-where-unique.input';
import { users_permissionsUpdateWithWhereUniqueWithoutPermissionsInput } from './users-permissions-update-with-where-unique-without-permissions.input';
import { users_permissionsUpdateManyWithWhereWithoutPermissionsInput } from './users-permissions-update-many-with-where-without-permissions.input';
import { users_permissionsScalarWhereInput } from './users-permissions-scalar-where.input';

@InputType()
export class users_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput {

    @Field(() => [users_permissionsCreateWithoutPermissionsInput], {nullable:true})
    @Type(() => users_permissionsCreateWithoutPermissionsInput)
    create?: Array<users_permissionsCreateWithoutPermissionsInput>;

    @Field(() => [users_permissionsCreateOrConnectWithoutPermissionsInput], {nullable:true})
    @Type(() => users_permissionsCreateOrConnectWithoutPermissionsInput)
    connectOrCreate?: Array<users_permissionsCreateOrConnectWithoutPermissionsInput>;

    @Field(() => [users_permissionsUpsertWithWhereUniqueWithoutPermissionsInput], {nullable:true})
    @Type(() => users_permissionsUpsertWithWhereUniqueWithoutPermissionsInput)
    upsert?: Array<users_permissionsUpsertWithWhereUniqueWithoutPermissionsInput>;

    @Field(() => users_permissionsCreateManyPermissionsInputEnvelope, {nullable:true})
    @Type(() => users_permissionsCreateManyPermissionsInputEnvelope)
    createMany?: users_permissionsCreateManyPermissionsInputEnvelope;

    @Field(() => [users_permissionsWhereUniqueInput], {nullable:true})
    @Type(() => users_permissionsWhereUniqueInput)
    set?: Array<users_permissionsWhereUniqueInput>;

    @Field(() => [users_permissionsWhereUniqueInput], {nullable:true})
    @Type(() => users_permissionsWhereUniqueInput)
    disconnect?: Array<users_permissionsWhereUniqueInput>;

    @Field(() => [users_permissionsWhereUniqueInput], {nullable:true})
    @Type(() => users_permissionsWhereUniqueInput)
    delete?: Array<users_permissionsWhereUniqueInput>;

    @Field(() => [users_permissionsWhereUniqueInput], {nullable:true})
    @Type(() => users_permissionsWhereUniqueInput)
    connect?: Array<users_permissionsWhereUniqueInput>;

    @Field(() => [users_permissionsUpdateWithWhereUniqueWithoutPermissionsInput], {nullable:true})
    @Type(() => users_permissionsUpdateWithWhereUniqueWithoutPermissionsInput)
    update?: Array<users_permissionsUpdateWithWhereUniqueWithoutPermissionsInput>;

    @Field(() => [users_permissionsUpdateManyWithWhereWithoutPermissionsInput], {nullable:true})
    @Type(() => users_permissionsUpdateManyWithWhereWithoutPermissionsInput)
    updateMany?: Array<users_permissionsUpdateManyWithWhereWithoutPermissionsInput>;

    @Field(() => [users_permissionsScalarWhereInput], {nullable:true})
    @Type(() => users_permissionsScalarWhereInput)
    deleteMany?: Array<users_permissionsScalarWhereInput>;
}
