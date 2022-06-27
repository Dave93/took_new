import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_rolesWhereUniqueInput } from '../users-roles/users-roles-where-unique.input';
import { Type } from 'class-transformer';
import { users_rolesCreateInput } from '../users-roles/users-roles-create.input';
import { users_rolesUpdateInput } from '../users-roles/users-roles-update.input';

@ArgsType()
export class UpsertOneusersRolesArgs {

    @Field(() => users_rolesWhereUniqueInput, {nullable:false})
    @Type(() => users_rolesWhereUniqueInput)
    where!: users_rolesWhereUniqueInput;

    @Field(() => users_rolesCreateInput, {nullable:false})
    @Type(() => users_rolesCreateInput)
    create!: users_rolesCreateInput;

    @Field(() => users_rolesUpdateInput, {nullable:false})
    @Type(() => users_rolesUpdateInput)
    update!: users_rolesUpdateInput;
}
