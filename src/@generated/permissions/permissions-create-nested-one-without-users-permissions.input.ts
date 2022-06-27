import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsCreateWithoutUsers_permissionsInput } from './permissions-create-without-users-permissions.input';
import { Type } from 'class-transformer';
import { permissionsCreateOrConnectWithoutUsers_permissionsInput } from './permissions-create-or-connect-without-users-permissions.input';
import { permissionsWhereUniqueInput } from './permissions-where-unique.input';

@InputType()
export class permissionsCreateNestedOneWithoutUsers_permissionsInput {

    @Field(() => permissionsCreateWithoutUsers_permissionsInput, {nullable:true})
    @Type(() => permissionsCreateWithoutUsers_permissionsInput)
    create?: permissionsCreateWithoutUsers_permissionsInput;

    @Field(() => permissionsCreateOrConnectWithoutUsers_permissionsInput, {nullable:true})
    @Type(() => permissionsCreateOrConnectWithoutUsers_permissionsInput)
    connectOrCreate?: permissionsCreateOrConnectWithoutUsers_permissionsInput;

    @Field(() => permissionsWhereUniqueInput, {nullable:true})
    @Type(() => permissionsWhereUniqueInput)
    connect?: permissionsWhereUniqueInput;
}
