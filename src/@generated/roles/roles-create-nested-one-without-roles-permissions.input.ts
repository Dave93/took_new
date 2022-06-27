import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesCreateWithoutRoles_permissionsInput } from './roles-create-without-roles-permissions.input';
import { Type } from 'class-transformer';
import { rolesCreateOrConnectWithoutRoles_permissionsInput } from './roles-create-or-connect-without-roles-permissions.input';
import { rolesWhereUniqueInput } from './roles-where-unique.input';

@InputType()
export class rolesCreateNestedOneWithoutRoles_permissionsInput {

    @Field(() => rolesCreateWithoutRoles_permissionsInput, {nullable:true})
    @Type(() => rolesCreateWithoutRoles_permissionsInput)
    create?: rolesCreateWithoutRoles_permissionsInput;

    @Field(() => rolesCreateOrConnectWithoutRoles_permissionsInput, {nullable:true})
    @Type(() => rolesCreateOrConnectWithoutRoles_permissionsInput)
    connectOrCreate?: rolesCreateOrConnectWithoutRoles_permissionsInput;

    @Field(() => rolesWhereUniqueInput, {nullable:true})
    @Type(() => rolesWhereUniqueInput)
    connect?: rolesWhereUniqueInput;
}
