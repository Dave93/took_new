import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsCreateWithoutUsers_permissions_updated_byTousersInput } from './permissions-create-without-users-permissions-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { permissionsCreateOrConnectWithoutUsers_permissions_updated_byTousersInput } from './permissions-create-or-connect-without-users-permissions-updated-by-tousers.input';
import { permissionsCreateManyUsers_permissions_updated_byTousersInputEnvelope } from './permissions-create-many-users-permissions-updated-by-tousers-input-envelope.input';
import { permissionsWhereUniqueInput } from './permissions-where-unique.input';

@InputType()
export class permissionsCreateNestedManyWithoutUsers_permissions_updated_byTousersInput {

    @Field(() => [permissionsCreateWithoutUsers_permissions_updated_byTousersInput], {nullable:true})
    @Type(() => permissionsCreateWithoutUsers_permissions_updated_byTousersInput)
    create?: Array<permissionsCreateWithoutUsers_permissions_updated_byTousersInput>;

    @Field(() => [permissionsCreateOrConnectWithoutUsers_permissions_updated_byTousersInput], {nullable:true})
    @Type(() => permissionsCreateOrConnectWithoutUsers_permissions_updated_byTousersInput)
    connectOrCreate?: Array<permissionsCreateOrConnectWithoutUsers_permissions_updated_byTousersInput>;

    @Field(() => permissionsCreateManyUsers_permissions_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => permissionsCreateManyUsers_permissions_updated_byTousersInputEnvelope)
    createMany?: permissionsCreateManyUsers_permissions_updated_byTousersInputEnvelope;

    @Field(() => [permissionsWhereUniqueInput], {nullable:true})
    @Type(() => permissionsWhereUniqueInput)
    connect?: Array<permissionsWhereUniqueInput>;
}
