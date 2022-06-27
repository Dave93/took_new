import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsCreateWithoutUsers_permissions_created_byTousersInput } from './permissions-create-without-users-permissions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { permissionsCreateOrConnectWithoutUsers_permissions_created_byTousersInput } from './permissions-create-or-connect-without-users-permissions-created-by-tousers.input';
import { permissionsCreateManyUsers_permissions_created_byTousersInputEnvelope } from './permissions-create-many-users-permissions-created-by-tousers-input-envelope.input';
import { permissionsWhereUniqueInput } from './permissions-where-unique.input';

@InputType()
export class permissionsCreateNestedManyWithoutUsers_permissions_created_byTousersInput {

    @Field(() => [permissionsCreateWithoutUsers_permissions_created_byTousersInput], {nullable:true})
    @Type(() => permissionsCreateWithoutUsers_permissions_created_byTousersInput)
    create?: Array<permissionsCreateWithoutUsers_permissions_created_byTousersInput>;

    @Field(() => [permissionsCreateOrConnectWithoutUsers_permissions_created_byTousersInput], {nullable:true})
    @Type(() => permissionsCreateOrConnectWithoutUsers_permissions_created_byTousersInput)
    connectOrCreate?: Array<permissionsCreateOrConnectWithoutUsers_permissions_created_byTousersInput>;

    @Field(() => permissionsCreateManyUsers_permissions_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => permissionsCreateManyUsers_permissions_created_byTousersInputEnvelope)
    createMany?: permissionsCreateManyUsers_permissions_created_byTousersInputEnvelope;

    @Field(() => [permissionsWhereUniqueInput], {nullable:true})
    @Type(() => permissionsWhereUniqueInput)
    connect?: Array<permissionsWhereUniqueInput>;
}
