import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesCreateWithoutRoles_permissionsInput } from './roles-create-without-roles-permissions.input';
import { Type } from 'class-transformer';
import { rolesCreateOrConnectWithoutRoles_permissionsInput } from './roles-create-or-connect-without-roles-permissions.input';
import { rolesUpsertWithoutRoles_permissionsInput } from './roles-upsert-without-roles-permissions.input';
import { rolesWhereUniqueInput } from './roles-where-unique.input';
import { rolesUpdateWithoutRoles_permissionsInput } from './roles-update-without-roles-permissions.input';

@InputType()
export class rolesUpdateOneRequiredWithoutRoles_permissionsNestedInput {

    @Field(() => rolesCreateWithoutRoles_permissionsInput, {nullable:true})
    @Type(() => rolesCreateWithoutRoles_permissionsInput)
    create?: rolesCreateWithoutRoles_permissionsInput;

    @Field(() => rolesCreateOrConnectWithoutRoles_permissionsInput, {nullable:true})
    @Type(() => rolesCreateOrConnectWithoutRoles_permissionsInput)
    connectOrCreate?: rolesCreateOrConnectWithoutRoles_permissionsInput;

    @Field(() => rolesUpsertWithoutRoles_permissionsInput, {nullable:true})
    @Type(() => rolesUpsertWithoutRoles_permissionsInput)
    upsert?: rolesUpsertWithoutRoles_permissionsInput;

    @Field(() => rolesWhereUniqueInput, {nullable:true})
    @Type(() => rolesWhereUniqueInput)
    connect?: rolesWhereUniqueInput;

    @Field(() => rolesUpdateWithoutRoles_permissionsInput, {nullable:true})
    @Type(() => rolesUpdateWithoutRoles_permissionsInput)
    update?: rolesUpdateWithoutRoles_permissionsInput;
}
