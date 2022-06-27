import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_permissionsWhereUniqueInput } from '../users-permissions/users-permissions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneusersPermissionsArgs {

    @Field(() => users_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => users_permissionsWhereUniqueInput)
    where!: users_permissionsWhereUniqueInput;
}
