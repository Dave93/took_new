import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesCreateWithoutUsers_usersTousers_roles_user_idInput } from './users-roles-create-without-users-users-tousers-roles-user-id.input';
import { Type } from 'class-transformer';
import { users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_user_idInput } from './users-roles-create-or-connect-without-users-users-tousers-roles-user-id.input';
import { users_rolesCreateManyUsers_usersTousers_roles_user_idInputEnvelope } from './users-roles-create-many-users-users-tousers-roles-user-id-input-envelope.input';
import { users_rolesWhereUniqueInput } from './users-roles-where-unique.input';

@InputType()
export class users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_user_idInput {

    @Field(() => [users_rolesCreateWithoutUsers_usersTousers_roles_user_idInput], {nullable:true})
    @Type(() => users_rolesCreateWithoutUsers_usersTousers_roles_user_idInput)
    create?: Array<users_rolesCreateWithoutUsers_usersTousers_roles_user_idInput>;

    @Field(() => [users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_user_idInput], {nullable:true})
    @Type(() => users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_user_idInput)
    connectOrCreate?: Array<users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_user_idInput>;

    @Field(() => users_rolesCreateManyUsers_usersTousers_roles_user_idInputEnvelope, {nullable:true})
    @Type(() => users_rolesCreateManyUsers_usersTousers_roles_user_idInputEnvelope)
    createMany?: users_rolesCreateManyUsers_usersTousers_roles_user_idInputEnvelope;

    @Field(() => [users_rolesWhereUniqueInput], {nullable:true})
    @Type(() => users_rolesWhereUniqueInput)
    connect?: Array<users_rolesWhereUniqueInput>;
}
