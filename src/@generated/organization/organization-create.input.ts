import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organization_system_type } from './organization-system-type.enum';
import { work_schedulesCreateNestedManyWithoutOrganizationInput } from '../work-schedules/work-schedules-create-nested-many-without-organization.input';
import { usersCreateNestedOneWithoutOrganization_created_byTousersInput } from '../users/users-create-nested-one-without-organization-created-by-tousers.input';
import { usersCreateNestedOneWithoutOrganization_updated_byTousersInput } from '../users/users-create-nested-one-without-organization-updated-by-tousers.input';
import { delivery_pricingCreateNestedManyWithoutOrganizationInput } from '../delivery-pricing/delivery-pricing-create-nested-many-without-organization.input';
import { terminalsCreateNestedManyWithoutOrganizationInput } from '../terminals/terminals-create-nested-many-without-organization.input';

@InputType()
export class organizationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    external_id?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => organization_system_type, {nullable:true})
    system_type?: keyof typeof organization_system_type;

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

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => work_schedulesCreateNestedManyWithoutOrganizationInput, {nullable:true})
    work_schedules_organization_idTorganization?: work_schedulesCreateNestedManyWithoutOrganizationInput;

    @Field(() => usersCreateNestedOneWithoutOrganization_created_byTousersInput, {nullable:true})
    organization_created_byTousers?: usersCreateNestedOneWithoutOrganization_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutOrganization_updated_byTousersInput, {nullable:true})
    organization_updated_byTousers?: usersCreateNestedOneWithoutOrganization_updated_byTousersInput;

    @Field(() => delivery_pricingCreateNestedManyWithoutOrganizationInput, {nullable:true})
    delivery_pricing_organization_idTorganization?: delivery_pricingCreateNestedManyWithoutOrganizationInput;

    @Field(() => terminalsCreateNestedManyWithoutOrganizationInput, {nullable:true})
    terminals_organization_idTorganization?: terminalsCreateNestedManyWithoutOrganizationInput;
}
