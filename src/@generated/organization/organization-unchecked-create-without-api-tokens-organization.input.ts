import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organization_system_type } from './organization-system-type.enum';
import { Int } from '@nestjs/graphql';
import { organization_payment_types } from './organization-payment-types.enum';
import { work_schedulesUncheckedCreateNestedManyWithoutOrganizationInput } from '../work-schedules/work-schedules-unchecked-create-nested-many-without-organization.input';
import { delivery_pricingUncheckedCreateNestedManyWithoutOrganizationInput } from '../delivery-pricing/delivery-pricing-unchecked-create-nested-many-without-organization.input';
import { terminalsUncheckedCreateNestedManyWithoutOrganizationInput } from '../terminals/terminals-unchecked-create-nested-many-without-organization.input';
import { order_statusUncheckedCreateNestedManyWithoutOrder_status_organizationInput } from '../order-status/order-status-unchecked-create-nested-many-without-order-status-organization.input';
import { ordersUncheckedCreateNestedManyWithoutOrders_organizationInput } from '../orders/orders-unchecked-create-nested-many-without-orders-organization.input';
import { order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_organizationsInput } from '../order-transactions/order-transactions-unchecked-create-nested-many-without-order-transactions-organizations.input';

@InputType()
export class organizationUncheckedCreateWithoutApi_tokens_organizationInput {

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

    @Field(() => Int, {nullable:true})
    max_order_close_distance?: number;

    @Field(() => organization_payment_types, {nullable:true})
    payment_type?: keyof typeof organization_payment_types;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => work_schedulesUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    work_schedules_organization_idTorganization?: work_schedulesUncheckedCreateNestedManyWithoutOrganizationInput;

    @Field(() => delivery_pricingUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    delivery_pricing_organization_idTorganization?: delivery_pricingUncheckedCreateNestedManyWithoutOrganizationInput;

    @Field(() => terminalsUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    terminals_organization_idTorganization?: terminalsUncheckedCreateNestedManyWithoutOrganizationInput;

    @Field(() => order_statusUncheckedCreateNestedManyWithoutOrder_status_organizationInput, {nullable:true})
    order_status_organization?: order_statusUncheckedCreateNestedManyWithoutOrder_status_organizationInput;

    @Field(() => ordersUncheckedCreateNestedManyWithoutOrders_organizationInput, {nullable:true})
    orders_organization?: ordersUncheckedCreateNestedManyWithoutOrders_organizationInput;

    @Field(() => order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_organizationsInput, {nullable:true})
    order_transactions_organizations?: order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_organizationsInput;
}
