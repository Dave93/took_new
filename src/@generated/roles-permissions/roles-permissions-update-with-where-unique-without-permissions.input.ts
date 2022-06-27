import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsWhereUniqueInput } from './roles-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { roles_permissionsUpdateWithoutPermissionsInput } from './roles-permissions-update-without-permissions.input';

@InputType()
export class roles_permissionsUpdateWithWhereUniqueWithoutPermissionsInput {

    @Field(() => roles_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => roles_permissionsWhereUniqueInput)
    where!: roles_permissionsWhereUniqueInput;

    @Field(() => roles_permissionsUpdateWithoutPermissionsInput, {nullable:false})
    @Type(() => roles_permissionsUpdateWithoutPermissionsInput)
    data!: roles_permissionsUpdateWithoutPermissionsInput;
}
