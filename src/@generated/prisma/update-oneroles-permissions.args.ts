import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roles_permissionsUpdateInput } from '../roles-permissions/roles-permissions-update.input';
import { Type } from 'class-transformer';
import { roles_permissionsWhereUniqueInput } from '../roles-permissions/roles-permissions-where-unique.input';

@ArgsType()
export class UpdateOnerolesPermissionsArgs {

    @Field(() => roles_permissionsUpdateInput, {nullable:false})
    @Type(() => roles_permissionsUpdateInput)
    data!: roles_permissionsUpdateInput;

    @Field(() => roles_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => roles_permissionsWhereUniqueInput)
    where!: roles_permissionsWhereUniqueInput;
}
