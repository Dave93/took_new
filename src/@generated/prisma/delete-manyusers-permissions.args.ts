import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_permissionsWhereInput } from '../users-permissions/users-permissions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyusersPermissionsArgs {

    @Field(() => users_permissionsWhereInput, {nullable:true})
    @Type(() => users_permissionsWhereInput)
    where?: users_permissionsWhereInput;
}
