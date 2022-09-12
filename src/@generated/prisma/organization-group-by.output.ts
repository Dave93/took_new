import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { organization_system_type } from '../organization/organization-system-type.enum';
import { Int } from '@nestjs/graphql';
import { organization_payment_types } from '../organization/organization-payment-types.enum';
import { OrganizationCountAggregate } from './organization-count-aggregate.output';
import { OrganizationAvgAggregate } from './organization-avg-aggregate.output';
import { OrganizationSumAggregate } from './organization-sum-aggregate.output';
import { OrganizationMinAggregate } from './organization-min-aggregate.output';
import { OrganizationMaxAggregate } from './organization-max-aggregate.output';

@ObjectType()
export class OrganizationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    external_id?: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => organization_system_type, {nullable:false})
    system_type!: keyof typeof organization_system_type;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:true})
    iiko_login?: string;

    @Field(() => String, {nullable:true})
    webhook?: string;

    @Field(() => String, {nullable:true})
    group_id?: string;

    @Field(() => String, {nullable:true})
    apelsin_login?: string;

    @Field(() => String, {nullable:true})
    apelsin_password?: string;

    @Field(() => String, {nullable:true})
    sender_name?: string;

    @Field(() => String, {nullable:true})
    sender_number?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    max_distance!: number;

    @Field(() => Int, {nullable:false})
    max_active_order_count!: number;

    @Field(() => organization_payment_types, {nullable:false})
    payment_type!: keyof typeof organization_payment_types;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

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
