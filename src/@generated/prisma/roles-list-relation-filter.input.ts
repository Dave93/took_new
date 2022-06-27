import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesWhereInput } from '../roles/roles-where.input';

@InputType()
export class RolesListRelationFilter {

    @Field(() => rolesWhereInput, {nullable:true})
    every?: rolesWhereInput;

    @Field(() => rolesWhereInput, {nullable:true})
    some?: rolesWhereInput;

    @Field(() => rolesWhereInput, {nullable:true})
    none?: rolesWhereInput;
}
