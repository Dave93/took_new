import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesUpdateWithoutRoles_permissionsInput } from './roles-update-without-roles-permissions.input';
import { Type } from 'class-transformer';
import { rolesCreateWithoutRoles_permissionsInput } from './roles-create-without-roles-permissions.input';

@InputType()
export class rolesUpsertWithoutRoles_permissionsInput {

    @Field(() => rolesUpdateWithoutRoles_permissionsInput, {nullable:false})
    @Type(() => rolesUpdateWithoutRoles_permissionsInput)
    update!: rolesUpdateWithoutRoles_permissionsInput;

    @Field(() => rolesCreateWithoutRoles_permissionsInput, {nullable:false})
    @Type(() => rolesCreateWithoutRoles_permissionsInput)
    create!: rolesCreateWithoutRoles_permissionsInput;
}
