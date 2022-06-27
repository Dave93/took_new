import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_rolesUpdateInput } from '../users-roles/users-roles-update.input';
import { Type } from 'class-transformer';
import { users_rolesWhereUniqueInput } from '../users-roles/users-roles-where-unique.input';

@ArgsType()
export class UpdateOneusersRolesArgs {

    @Field(() => users_rolesUpdateInput, {nullable:false})
    @Type(() => users_rolesUpdateInput)
    data!: users_rolesUpdateInput;

    @Field(() => users_rolesWhereUniqueInput, {nullable:false})
    @Type(() => users_rolesWhereUniqueInput)
    where!: users_rolesWhereUniqueInput;
}
