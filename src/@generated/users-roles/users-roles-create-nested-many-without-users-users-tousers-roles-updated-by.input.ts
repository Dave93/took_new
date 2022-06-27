import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesCreateWithoutUsers_usersTousers_roles_updated_byInput } from './users-roles-create-without-users-users-tousers-roles-updated-by.input';
import { Type } from 'class-transformer';
import { users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_updated_byInput } from './users-roles-create-or-connect-without-users-users-tousers-roles-updated-by.input';
import { users_rolesCreateManyUsers_usersTousers_roles_updated_byInputEnvelope } from './users-roles-create-many-users-users-tousers-roles-updated-by-input-envelope.input';
import { users_rolesWhereUniqueInput } from './users-roles-where-unique.input';

@InputType()
export class users_rolesCreateNestedManyWithoutUsers_usersTousers_roles_updated_byInput {

    @Field(() => [users_rolesCreateWithoutUsers_usersTousers_roles_updated_byInput], {nullable:true})
    @Type(() => users_rolesCreateWithoutUsers_usersTousers_roles_updated_byInput)
    create?: Array<users_rolesCreateWithoutUsers_usersTousers_roles_updated_byInput>;

    @Field(() => [users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_updated_byInput], {nullable:true})
    @Type(() => users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_updated_byInput)
    connectOrCreate?: Array<users_rolesCreateOrConnectWithoutUsers_usersTousers_roles_updated_byInput>;

    @Field(() => users_rolesCreateManyUsers_usersTousers_roles_updated_byInputEnvelope, {nullable:true})
    @Type(() => users_rolesCreateManyUsers_usersTousers_roles_updated_byInputEnvelope)
    createMany?: users_rolesCreateManyUsers_usersTousers_roles_updated_byInputEnvelope;

    @Field(() => [users_rolesWhereUniqueInput], {nullable:true})
    @Type(() => users_rolesWhereUniqueInput)
    connect?: Array<users_rolesWhereUniqueInput>;
}
