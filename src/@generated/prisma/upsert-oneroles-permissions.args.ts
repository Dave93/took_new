import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roles_permissionsWhereUniqueInput } from '../roles-permissions/roles-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { roles_permissionsCreateInput } from '../roles-permissions/roles-permissions-create.input';
import { roles_permissionsUpdateInput } from '../roles-permissions/roles-permissions-update.input';

@ArgsType()
export class UpsertOnerolesPermissionsArgs {

    @Field(() => roles_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => roles_permissionsWhereUniqueInput)
    where!: roles_permissionsWhereUniqueInput;

    @Field(() => roles_permissionsCreateInput, {nullable:false})
    @Type(() => roles_permissionsCreateInput)
    create!: roles_permissionsCreateInput;

    @Field(() => roles_permissionsUpdateInput, {nullable:false})
    @Type(() => roles_permissionsUpdateInput)
    update!: roles_permissionsUpdateInput;
}
