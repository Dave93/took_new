import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { permissionsUpdateWithoutUsers_permissionsInput } from './permissions-update-without-users-permissions.input';
import { Type } from 'class-transformer';
import { permissionsCreateWithoutUsers_permissionsInput } from './permissions-create-without-users-permissions.input';

@InputType()
export class permissionsUpsertWithoutUsers_permissionsInput {

    @Field(() => permissionsUpdateWithoutUsers_permissionsInput, {nullable:false})
    @Type(() => permissionsUpdateWithoutUsers_permissionsInput)
    update!: permissionsUpdateWithoutUsers_permissionsInput;

    @Field(() => permissionsCreateWithoutUsers_permissionsInput, {nullable:false})
    @Type(() => permissionsCreateWithoutUsers_permissionsInput)
    create!: permissionsCreateWithoutUsers_permissionsInput;
}
