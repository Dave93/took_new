import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsWhereUniqueInput } from './roles-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { roles_permissionsUpdateWithoutRolesInput } from './roles-permissions-update-without-roles.input';
import { roles_permissionsCreateWithoutRolesInput } from './roles-permissions-create-without-roles.input';

@InputType()
export class roles_permissionsUpsertWithWhereUniqueWithoutRolesInput {

    @Field(() => roles_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => roles_permissionsWhereUniqueInput)
    where!: roles_permissionsWhereUniqueInput;

    @Field(() => roles_permissionsUpdateWithoutRolesInput, {nullable:false})
    @Type(() => roles_permissionsUpdateWithoutRolesInput)
    update!: roles_permissionsUpdateWithoutRolesInput;

    @Field(() => roles_permissionsCreateWithoutRolesInput, {nullable:false})
    @Type(() => roles_permissionsCreateWithoutRolesInput)
    create!: roles_permissionsCreateWithoutRolesInput;
}
