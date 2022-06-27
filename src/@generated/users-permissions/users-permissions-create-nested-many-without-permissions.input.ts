import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsCreateWithoutPermissionsInput } from './users-permissions-create-without-permissions.input';
import { Type } from 'class-transformer';
import { users_permissionsCreateOrConnectWithoutPermissionsInput } from './users-permissions-create-or-connect-without-permissions.input';
import { users_permissionsCreateManyPermissionsInputEnvelope } from './users-permissions-create-many-permissions-input-envelope.input';
import { users_permissionsWhereUniqueInput } from './users-permissions-where-unique.input';

@InputType()
export class users_permissionsCreateNestedManyWithoutPermissionsInput {

    @Field(() => [users_permissionsCreateWithoutPermissionsInput], {nullable:true})
    @Type(() => users_permissionsCreateWithoutPermissionsInput)
    create?: Array<users_permissionsCreateWithoutPermissionsInput>;

    @Field(() => [users_permissionsCreateOrConnectWithoutPermissionsInput], {nullable:true})
    @Type(() => users_permissionsCreateOrConnectWithoutPermissionsInput)
    connectOrCreate?: Array<users_permissionsCreateOrConnectWithoutPermissionsInput>;

    @Field(() => users_permissionsCreateManyPermissionsInputEnvelope, {nullable:true})
    @Type(() => users_permissionsCreateManyPermissionsInputEnvelope)
    createMany?: users_permissionsCreateManyPermissionsInputEnvelope;

    @Field(() => [users_permissionsWhereUniqueInput], {nullable:true})
    @Type(() => users_permissionsWhereUniqueInput)
    connect?: Array<users_permissionsWhereUniqueInput>;
}
