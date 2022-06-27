import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsCreateWithoutUsers_usersTousers_permissions_updated_byInput } from './users-permissions-create-without-users-users-tousers-permissions-updated-by.input';
import { Type } from 'class-transformer';
import { users_permissionsCreateOrConnectWithoutUsers_usersTousers_permissions_updated_byInput } from './users-permissions-create-or-connect-without-users-users-tousers-permissions-updated-by.input';
import { users_permissionsUpsertWithWhereUniqueWithoutUsers_usersTousers_permissions_updated_byInput } from './users-permissions-upsert-with-where-unique-without-users-users-tousers-permissions-updated-by.input';
import { users_permissionsCreateManyUsers_usersTousers_permissions_updated_byInputEnvelope } from './users-permissions-create-many-users-users-tousers-permissions-updated-by-input-envelope.input';
import { users_permissionsWhereUniqueInput } from './users-permissions-where-unique.input';
import { users_permissionsUpdateWithWhereUniqueWithoutUsers_usersTousers_permissions_updated_byInput } from './users-permissions-update-with-where-unique-without-users-users-tousers-permissions-updated-by.input';
import { users_permissionsUpdateManyWithWhereWithoutUsers_usersTousers_permissions_updated_byInput } from './users-permissions-update-many-with-where-without-users-users-tousers-permissions-updated-by.input';
import { users_permissionsScalarWhereInput } from './users-permissions-scalar-where.input';

@InputType()
export class users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_updated_byInput {

    @Field(() => [users_permissionsCreateWithoutUsers_usersTousers_permissions_updated_byInput], {nullable:true})
    @Type(() => users_permissionsCreateWithoutUsers_usersTousers_permissions_updated_byInput)
    create?: Array<users_permissionsCreateWithoutUsers_usersTousers_permissions_updated_byInput>;

    @Field(() => [users_permissionsCreateOrConnectWithoutUsers_usersTousers_permissions_updated_byInput], {nullable:true})
    @Type(() => users_permissionsCreateOrConnectWithoutUsers_usersTousers_permissions_updated_byInput)
    connectOrCreate?: Array<users_permissionsCreateOrConnectWithoutUsers_usersTousers_permissions_updated_byInput>;

    @Field(() => [users_permissionsUpsertWithWhereUniqueWithoutUsers_usersTousers_permissions_updated_byInput], {nullable:true})
    @Type(() => users_permissionsUpsertWithWhereUniqueWithoutUsers_usersTousers_permissions_updated_byInput)
    upsert?: Array<users_permissionsUpsertWithWhereUniqueWithoutUsers_usersTousers_permissions_updated_byInput>;

    @Field(() => users_permissionsCreateManyUsers_usersTousers_permissions_updated_byInputEnvelope, {nullable:true})
    @Type(() => users_permissionsCreateManyUsers_usersTousers_permissions_updated_byInputEnvelope)
    createMany?: users_permissionsCreateManyUsers_usersTousers_permissions_updated_byInputEnvelope;

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

    @Field(() => [users_permissionsUpdateWithWhereUniqueWithoutUsers_usersTousers_permissions_updated_byInput], {nullable:true})
    @Type(() => users_permissionsUpdateWithWhereUniqueWithoutUsers_usersTousers_permissions_updated_byInput)
    update?: Array<users_permissionsUpdateWithWhereUniqueWithoutUsers_usersTousers_permissions_updated_byInput>;

    @Field(() => [users_permissionsUpdateManyWithWhereWithoutUsers_usersTousers_permissions_updated_byInput], {nullable:true})
    @Type(() => users_permissionsUpdateManyWithWhereWithoutUsers_usersTousers_permissions_updated_byInput)
    updateMany?: Array<users_permissionsUpdateManyWithWhereWithoutUsers_usersTousers_permissions_updated_byInput>;

    @Field(() => [users_permissionsScalarWhereInput], {nullable:true})
    @Type(() => users_permissionsScalarWhereInput)
    deleteMany?: Array<users_permissionsScalarWhereInput>;
}
