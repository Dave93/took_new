import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesWhereInput } from '../roles/roles-where.input';

@InputType()
export class RolesRelationFilter {

    @Field(() => rolesWhereInput, {nullable:true})
    is?: rolesWhereInput;

    @Field(() => rolesWhereInput, {nullable:true})
    isNot?: rolesWhereInput;
}
