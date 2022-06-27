import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_rolesWhereInput } from '../users-roles/users-roles-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyusersRolesArgs {

    @Field(() => users_rolesWhereInput, {nullable:true})
    @Type(() => users_rolesWhereInput)
    where?: users_rolesWhereInput;
}
