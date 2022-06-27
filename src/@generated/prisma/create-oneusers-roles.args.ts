import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_rolesCreateInput } from '../users-roles/users-roles-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneusersRolesArgs {

    @Field(() => users_rolesCreateInput, {nullable:false})
    @Type(() => users_rolesCreateInput)
    data!: users_rolesCreateInput;
}
