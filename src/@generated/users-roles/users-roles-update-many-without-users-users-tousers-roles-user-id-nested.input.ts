import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesCreateWithoutUsers_usersTousers_roles_user_idInput } from './users-roles-create-without-users-users-tousers-roles-user-id.input';
import { Type } from 'class-transformer';
import { users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_user_idInput } from './users-roles-create-or-connect-without-users-users-tousers-roles-user-id.input';
import { users_rolesUpsertWithWhereUniqueWithoutUsers_usersTousers_roles_user_idInput } from './users-roles-upsert-with-where-unique-without-users-users-tousers-roles-user-id.input';
import { users_rolesCreateManyUsers_usersTousers_roles_user_idInputEnvelope } from './users-roles-create-many-users-users-tousers-roles-user-id-input-envelope.input';
import { users_rolesWhereUniqueInput } from './users-roles-where-unique.input';
import { users_rolesUpdateWithWhereUniqueWithoutUsers_usersTousers_roles_user_idInput } from './users-roles-update-with-where-unique-without-users-users-tousers-roles-user-id.input';
import { users_rolesUpdateManyWithWhereWithoutUsers_usersTousers_roles_user_idInput } from './users-roles-update-many-with-where-without-users-users-tousers-roles-user-id.input';
import { users_rolesScalarWhereInput } from './users-roles-scalar-where.input';

@InputType()
export class users_rolesUpdateManyWithoutUsers_usersTousers_roles_user_idNestedInput {

    @Field(() => [users_rolesCreateWithoutUsers_usersTousers_roles_user_idInput], {nullable:true})
    @Type(() => users_rolesCreateWithoutUsers_usersTousers_roles_user_idInput)
    create?: Array<users_rolesCreateWithoutUsers_usersTousers_roles_user_idInput>;

    @Field(() => [users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_user_idInput], {nullable:true})
    @Type(() => users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_user_idInput)
    connectOrCreate?: Array<users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_user_idInput>;

    @Field(() => [users_rolesUpsertWithWhereUniqueWithoutUsers_usersTousers_roles_user_idInput], {nullable:true})
    @Type(() => users_rolesUpsertWithWhereUniqueWithoutUsers_usersTousers_roles_user_idInput)
    upsert?: Array<users_rolesUpsertWithWhereUniqueWithoutUsers_usersTousers_roles_user_idInput>;

    @Field(() => users_rolesCreateManyUsers_usersTousers_roles_user_idInputEnvelope, {nullable:true})
    @Type(() => users_rolesCreateManyUsers_usersTousers_roles_user_idInputEnvelope)
    createMany?: users_rolesCreateManyUsers_usersTousers_roles_user_idInputEnvelope;

    @Field(() => [users_rolesWhereUniqueInput], {nullable:true})
    @Type(() => users_rolesWhereUniqueInput)
    set?: Array<users_rolesWhereUniqueInput>;

    @Field(() => [users_rolesWhereUniqueInput], {nullable:true})
    @Type(() => users_rolesWhereUniqueInput)
    disconnect?: Array<users_rolesWhereUniqueInput>;

    @Field(() => [users_rolesWhereUniqueInput], {nullable:true})
    @Type(() => users_rolesWhereUniqueInput)
    delete?: Array<users_rolesWhereUniqueInput>;

    @Field(() => [users_rolesWhereUniqueInput], {nullable:true})
    @Type(() => users_rolesWhereUniqueInput)
    connect?: Array<users_rolesWhereUniqueInput>;

    @Field(() => [users_rolesUpdateWithWhereUniqueWithoutUsers_usersTousers_roles_user_idInput], {nullable:true})
    @Type(() => users_rolesUpdateWithWhereUniqueWithoutUsers_usersTousers_roles_user_idInput)
    update?: Array<users_rolesUpdateWithWhereUniqueWithoutUsers_usersTousers_roles_user_idInput>;

    @Field(() => [users_rolesUpdateManyWithWhereWithoutUsers_usersTousers_roles_user_idInput], {nullable:true})
    @Type(() => users_rolesUpdateManyWithWhereWithoutUsers_usersTousers_roles_user_idInput)
    updateMany?: Array<users_rolesUpdateManyWithWhereWithoutUsers_usersTousers_roles_user_idInput>;

    @Field(() => [users_rolesScalarWhereInput], {nullable:true})
    @Type(() => users_rolesScalarWhereInput)
    deleteMany?: Array<users_rolesScalarWhereInput>;
}
