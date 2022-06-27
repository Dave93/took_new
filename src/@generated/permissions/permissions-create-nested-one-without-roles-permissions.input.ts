import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsCreateWithoutRoles_permissionsInput } from './permissions-create-without-roles-permissions.input';
import { Type } from 'class-transformer';
import { permissionsCreateOrConnectWithoutRoles_permissionsInput } from './permissions-create-or-connect-without-roles-permissions.input';
import { permissionsWhereUniqueInput } from './permissions-where-unique.input';

@InputType()
export class permissionsCreateNestedOneWithoutRoles_permissionsInput {

    @Field(() => permissionsCreateWithoutRoles_permissionsInput, {nullable:true})
    @Type(() => permissionsCreateWithoutRoles_permissionsInput)
    create?: permissionsCreateWithoutRoles_permissionsInput;

    @Field(() => permissionsCreateOrConnectWithoutRoles_permissionsInput, {nullable:true})
    @Type(() => permissionsCreateOrConnectWithoutRoles_permissionsInput)
    connectOrCreate?: permissionsCreateOrConnectWithoutRoles_permissionsInput;

    @Field(() => permissionsWhereUniqueInput, {nullable:true})
    @Type(() => permissionsWhereUniqueInput)
    connect?: permissionsWhereUniqueInput;
}
