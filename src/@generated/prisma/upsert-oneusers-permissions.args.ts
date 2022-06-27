import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_permissionsWhereUniqueInput } from '../users-permissions/users-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { users_permissionsCreateInput } from '../users-permissions/users-permissions-create.input';
import { users_permissionsUpdateInput } from '../users-permissions/users-permissions-update.input';

@ArgsType()
export class UpsertOneusersPermissionsArgs {

    @Field(() => users_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => users_permissionsWhereUniqueInput)
    where!: users_permissionsWhereUniqueInput;

    @Field(() => users_permissionsCreateInput, {nullable:false})
    @Type(() => users_permissionsCreateInput)
    create!: users_permissionsCreateInput;

    @Field(() => users_permissionsUpdateInput, {nullable:false})
    @Type(() => users_permissionsUpdateInput)
    update!: users_permissionsUpdateInput;
}
