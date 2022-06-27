import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsWhereInput } from '../roles-permissions/roles-permissions-where.input';

@InputType()
export class Roles_permissionsListRelationFilter {

    @Field(() => roles_permissionsWhereInput, {nullable:true})
    every?: roles_permissionsWhereInput;

    @Field(() => roles_permissionsWhereInput, {nullable:true})
    some?: roles_permissionsWhereInput;

    @Field(() => roles_permissionsWhereInput, {nullable:true})
    none?: roles_permissionsWhereInput;
}
