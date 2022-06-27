import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsUpdateWithoutRoles_permissionsInput } from './permissions-update-without-roles-permissions.input';
import { Type } from 'class-transformer';
import { permissionsCreateWithoutRoles_permissionsInput } from './permissions-create-without-roles-permissions.input';

@InputType()
export class permissionsUpsertWithoutRoles_permissionsInput {

    @Field(() => permissionsUpdateWithoutRoles_permissionsInput, {nullable:false})
    @Type(() => permissionsUpdateWithoutRoles_permissionsInput)
    update!: permissionsUpdateWithoutRoles_permissionsInput;

    @Field(() => permissionsCreateWithoutRoles_permissionsInput, {nullable:false})
    @Type(() => permissionsCreateWithoutRoles_permissionsInput)
    create!: permissionsCreateWithoutRoles_permissionsInput;
}
