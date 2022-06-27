import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsWhereUniqueInput } from './roles-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { roles_permissionsUpdateWithoutRolesInput } from './roles-permissions-update-without-roles.input';

@InputType()
export class roles_permissionsUpdateWithWhereUniqueWithoutRolesInput {

    @Field(() => roles_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => roles_permissionsWhereUniqueInput)
    where!: roles_permissionsWhereUniqueInput;

    @Field(() => roles_permissionsUpdateWithoutRolesInput, {nullable:false})
    @Type(() => roles_permissionsUpdateWithoutRolesInput)
    data!: roles_permissionsUpdateWithoutRolesInput;
}
