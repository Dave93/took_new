import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_rolesWhereUniqueInput } from '../users-roles/users-roles-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueusersRolesArgs {

    @Field(() => users_rolesWhereUniqueInput, {nullable:false})
    @Type(() => users_rolesWhereUniqueInput)
    where!: users_rolesWhereUniqueInput;
}
