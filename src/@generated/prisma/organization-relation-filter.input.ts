import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereInput } from '../organization/organization-where.input';

@InputType()
export class OrganizationRelationFilter {

    @Field(() => organizationWhereInput, {nullable:true})
    is?: organizationWhereInput;

    @Field(() => organizationWhereInput, {nullable:true})
    isNot?: organizationWhereInput;
}
