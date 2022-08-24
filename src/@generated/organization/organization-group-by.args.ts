import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { organizationWhereInput } from './organization-where.input';
import { Type } from 'class-transformer';
import { organizationOrderByWithAggregationInput } from './organization-order-by-with-aggregation.input';
import { OrganizationScalarFieldEnum } from '../prisma/organization-scalar-field.enum';
import { organizationScalarWhereWithAggregatesInput } from './organization-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class organizationGroupByArgs {

    @Field(() => organizationWhereInput, {nullable:true})
    @Type(() => organizationWhereInput)
    where?: organizationWhereInput;

    @Field(() => [organizationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<organizationOrderByWithAggregationInput>;

    @Field(() => [OrganizationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OrganizationScalarFieldEnum>;

    @Field(() => organizationScalarWhereWithAggregatesInput, {nullable:true})
    having?: organizationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
