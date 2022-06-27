import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsCreateWithoutPermissionsInput } from './roles-permissions-create-without-permissions.input';
import { Type } from 'class-transformer';
import { roles_permissionsCreateOrConnectWithoutPermissionsInput } from './roles-permissions-create-or-connect-without-permissions.input';
import { roles_permissionsCreateManyPermissionsInputEnvelope } from './roles-permissions-create-many-permissions-input-envelope.input';
import { roles_permissionsWhereUniqueInput } from './roles-permissions-where-unique.input';

@InputType()
export class roles_permissionsCreateNestedManyWithoutPermissionsInput {

    @Field(() => [roles_permissionsCreateWithoutPermissionsInput], {nullable:true})
    @Type(() => roles_permissionsCreateWithoutPermissionsInput)
    create?: Array<roles_permissionsCreateWithoutPermissionsInput>;

    @Field(() => [roles_permissionsCreateOrConnectWithoutPermissionsInput], {nullable:true})
    @Type(() => roles_permissionsCreateOrConnectWithoutPermissionsInput)
    connectOrCreate?: Array<roles_permissionsCreateOrConnectWithoutPermissionsInput>;

    @Field(() => roles_permissionsCreateManyPermissionsInputEnvelope, {nullable:true})
    @Type(() => roles_permissionsCreateManyPermissionsInputEnvelope)
    createMany?: roles_permissionsCreateManyPermissionsInputEnvelope;

    @Field(() => [roles_permissionsWhereUniqueInput], {nullable:true})
    @Type(() => roles_permissionsWhereUniqueInput)
    connect?: Array<roles_permissionsWhereUniqueInput>;
}
