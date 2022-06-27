import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesWhereInput } from '../users-roles/users-roles-where.input';

@InputType()
export class Users_rolesListRelationFilter {

    @Field(() => users_rolesWhereInput, {nullable:true})
    every?: users_rolesWhereInput;

    @Field(() => users_rolesWhereInput, {nullable:true})
    some?: users_rolesWhereInput;

    @Field(() => users_rolesWhereInput, {nullable:true})
    none?: users_rolesWhereInput;
}
