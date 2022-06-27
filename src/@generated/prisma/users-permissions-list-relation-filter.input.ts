import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsWhereInput } from '../users-permissions/users-permissions-where.input';

@InputType()
export class Users_permissionsListRelationFilter {

    @Field(() => users_permissionsWhereInput, {nullable:true})
    every?: users_permissionsWhereInput;

    @Field(() => users_permissionsWhereInput, {nullable:true})
    some?: users_permissionsWhereInput;

    @Field(() => users_permissionsWhereInput, {nullable:true})
    none?: users_permissionsWhereInput;
}
