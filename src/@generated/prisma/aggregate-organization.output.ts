import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrganizationCountAggregate } from './organization-count-aggregate.output';
import { OrganizationAvgAggregate } from './organization-avg-aggregate.output';
import { OrganizationSumAggregate } from './organization-sum-aggregate.output';
import { OrganizationMinAggregate } from './organization-min-aggregate.output';
import { OrganizationMaxAggregate } from './organization-max-aggregate.output';

@ObjectType()
export class AggregateOrganization {

    @Field(() => OrganizationCountAggregate, {nullable:true})
    _count?: OrganizationCountAggregate;

    @Field(() => OrganizationAvgAggregate, {nullable:true})
    _avg?: OrganizationAvgAggregate;

    @Field(() => OrganizationSumAggregate, {nullable:true})
    _sum?: OrganizationSumAggregate;

    @Field(() => OrganizationMinAggregate, {nullable:true})
    _min?: OrganizationMinAggregate;

    @Field(() => OrganizationMaxAggregate, {nullable:true})
    _max?: OrganizationMaxAggregate;
}
