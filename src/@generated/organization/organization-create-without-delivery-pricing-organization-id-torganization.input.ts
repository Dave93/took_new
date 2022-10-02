import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organization_system_type } from './organization-system-type.enum';
import { Int } from '@nestjs/graphql';
import { organization_payment_types } from './organization-payment-types.enum';
import { work_schedulesCreateNestedManyWithoutOrganizationInput } from '../work-schedules/work-schedules-create-nested-many-without-organization.input';
import { usersCreateNestedOneWithoutOrganization_created_byTousersInput } from '../users/users-create-nested-one-without-organization-created-by-tousers.input';
import { usersCreateNestedOneWithoutOrganization_updated_byTousersInput } from '../users/users-create-nested-one-without-organization-updated-by-tousers.input';
import { terminalsCreateNestedManyWithoutOrganizationInput } from '../terminals/terminals-create-nested-many-without-organization.input';
import { order_statusCreateNestedManyWithoutOrder_status_organizationInput } from '../order-status/order-status-create-nested-many-without-order-status-organization.input';
import { ordersCreateNestedManyWithoutOrders_organizationInput } from '../orders/orders-create-nested-many-without-orders-organization.input';
import { api_tokensCreateNestedManyWithoutApi_tokens_organizationInput } from '../api-tokens/api-tokens-create-nested-many-without-api-tokens-organization.input';

@InputType()
export class organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput {

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

    @Field(() => Int, {nullable:true})
    max_distance?: number;

    @Field(() => Int, {nullable:true})
    max_active_order_count?: number;

    @Field(() => organization_payment_types, {nullable:true})
    payment_type?: keyof typeof organization_payment_types;

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

    @Field(() => terminalsCreateNestedManyWithoutOrganizationInput, {nullable:true})
    terminals_organization_idTorganization?: terminalsCreateNestedManyWithoutOrganizationInput;

    @Field(() => order_statusCreateNestedManyWithoutOrder_status_organizationInput, {nullable:true})
    order_status_organization?: order_statusCreateNestedManyWithoutOrder_status_organizationInput;

    @Field(() => ordersCreateNestedManyWithoutOrders_organizationInput, {nullable:true})
    orders_organization?: ordersCreateNestedManyWithoutOrders_organizationInput;

    @Field(() => api_tokensCreateNestedManyWithoutApi_tokens_organizationInput, {nullable:true})
    api_tokens_organization?: api_tokensCreateNestedManyWithoutApi_tokens_organizationInput;
}
