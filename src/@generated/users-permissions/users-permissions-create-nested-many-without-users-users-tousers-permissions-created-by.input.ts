import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsCreateWithoutUsers_usersTousers_permissions_created_byInput } from './users-permissions-create-without-users-users-tousers-permissions-created-by.input';
import { Type } from 'class-transformer';
import { users_permissionsCreateOrConnectWithoutUsers_usersTousers_permissions_created_byInput } from './users-permissions-create-or-connect-without-users-users-tousers-permissions-created-by.input';
import { users_permissionsCreateManyUsers_usersTousers_permissions_created_byInputEnvelope } from './users-permissions-create-many-users-users-tousers-permissions-created-by-input-envelope.input';
import { users_permissionsWhereUniqueInput } from './users-permissions-where-unique.input';

@InputType()
export class users_permissionsCreateNestedManyWithoutUsers_usersTousers_permissions_created_byInput {

    @Field(() => [users_permissionsCreateWithoutUsers_usersTousers_permissions_created_byInput], {nullable:true})
    @Type(() => users_permissionsCreateWithoutUsers_usersTousers_permissions_created_byInput)
    create?: Array<users_permissionsCreateWithoutUsers_usersTousers_permissions_created_byInput>;

    @Field(() => [users_permissionsCreateOrConnectWithoutUsers_usersTousers_permissions_created_byInput], {nullable:true})
    @Type(() => users_permissionsCreateOrConnectWithoutUsers_usersTousers_permissions_created_byInput)
    connectOrCreate?: Array<users_permissionsCreateOrConnectWithoutUsers_usersTousers_permissions_created_byInput>;

    @Field(() => users_permissionsCreateManyUsers_usersTousers_permissions_created_byInputEnvelope, {nullable:true})
    @Type(() => users_permissionsCreateManyUsers_usersTousers_permissions_created_byInputEnvelope)
    createMany?: users_permissionsCreateManyUsers_usersTousers_permissions_created_byInputEnvelope;

    @Field(() => [users_permissionsWhereUniqueInput], {nullable:true})
    @Type(() => users_permissionsWhereUniqueInput)
    connect?: Array<users_permissionsWhereUniqueInput>;
}
