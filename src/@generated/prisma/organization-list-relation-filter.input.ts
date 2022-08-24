import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereInput } from '../organization/organization-where.input';

@InputType()
export class OrganizationListRelationFilter {

    @Field(() => organizationWhereInput, {nullable:true})
    every?: organizationWhereInput;

    @Field(() => organizationWhereInput, {nullable:true})
    some?: organizationWhereInput;

    @Field(() => organizationWhereInput, {nullable:true})
    none?: organizationWhereInput;
}
