import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsCreateWithoutUsers_usersTousers_permissions_user_idInput } from './users-permissions-create-without-users-users-tousers-permissions-user-id.input';
import { Type } from 'class-transformer';
import { users_permissionsCreateOrConnectWithoutUsers_usersTousers_permissions_user_idInput } from './users-permissions-create-or-connect-without-users-users-tousers-permissions-user-id.input';
import { users_permissionsCreateManyUsers_usersTousers_permissions_user_idInputEnvelope } from './users-permissions-create-many-users-users-tousers-permissions-user-id-input-envelope.input';
import { users_permissionsWhereUniqueInput } from './users-permissions-where-unique.input';

@InputType()
export class users_permissionsCreateNestedManyWithoutUsers_usersTousers_permissions_user_idInput {

    @Field(() => [users_permissionsCreateWithoutUsers_usersTousers_permissions_user_idInput], {nullable:true})
    @Type(() => users_permissionsCreateWithoutUsers_usersTousers_permissions_user_idInput)
    create?: Array<users_permissionsCreateWithoutUsers_usersTousers_permissions_user_idInput>;

    @Field(() => [users_permissionsCreateOrConnectWithoutUsers_usersTousers_permissions_user_idInput], {nullable:true})
    @Type(() => users_permissionsCreateOrConnectWithoutUsers_usersTousers_permissions_user_idInput)
    connectOrCreate?: Array<users_permissionsCreateOrConnectWithoutUsers_usersTousers_permissions_user_idInput>;

    @Field(() => users_permissionsCreateManyUsers_usersTousers_permissions_user_idInputEnvelope, {nullable:true})
    @Type(() => users_permissionsCreateManyUsers_usersTousers_permissions_user_idInputEnvelope)
    createMany?: users_permissionsCreateManyUsers_usersTousers_permissions_user_idInputEnvelope;

    @Field(() => [users_permissionsWhereUniqueInput], {nullable:true})
    @Type(() => users_permissionsWhereUniqueInput)
    connect?: Array<users_permissionsWhereUniqueInput>;
}
