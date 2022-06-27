import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_permissionsUpdateInput } from '../users-permissions/users-permissions-update.input';
import { Type } from 'class-transformer';
import { users_permissionsWhereUniqueInput } from '../users-permissions/users-permissions-where-unique.input';

@ArgsType()
export class UpdateOneusersPermissionsArgs {

    @Field(() => users_permissionsUpdateInput, {nullable:false})
    @Type(() => users_permissionsUpdateInput)
    data!: users_permissionsUpdateInput;

    @Field(() => users_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => users_permissionsWhereUniqueInput)
    where!: users_permissionsWhereUniqueInput;
}
