import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organization_system_type } from './organization-system-type.enum';
import { Int } from '@nestjs/graphql';
import { organization_payment_types } from './organization-payment-types.enum';
import { work_schedulesCreateNestedManyWithoutOrganizationInput } from '../work-schedules/work-schedules-create-nested-many-without-organization.input';
import { usersCreateNestedOneWithoutOrganization_created_byTousersInput } from '../users/users-create-nested-one-without-organization-created-by-tousers.input';
import { usersCreateNestedOneWithoutOrganization_updated_byTousersInput } from '../users/users-create-nested-one-without-organization-updated-by-tousers.input';
import { delivery_pricingCreateNestedManyWithoutOrganizationInput } from '../delivery-pricing/delivery-pricing-create-nested-many-without-organization.input';
import { terminalsCreateNestedManyWithoutOrganizationInput } from '../terminals/terminals-create-nested-many-without-organization.input';
import { order_statusCreateNestedManyWithoutOrder_status_organizationInput } from '../order-status/order-status-create-nested-many-without-order-status-organization.input';
import { ordersCreateNestedManyWithoutOrders_organizationInput } from '../orders/orders-create-nested-many-without-orders-organization.input';
import { order_transactionsCreateNestedManyWithoutOrder_transactions_organizationsInput } from '../order-transactions/order-transactions-create-nested-many-without-order-transactions-organizations.input';
import { courier_terminal_balanceCreateNestedManyWithoutCourier_terminal_balance_organizationsInput } from '../courier-terminal-balance/courier-terminal-balance-create-nested-many-without-courier-terminal-balance-organizations.input';
import { manager_withdrawCreateNestedManyWithoutManager_withdraw_organizationsInput } from '../manager-withdraw/manager-withdraw-create-nested-many-without-manager-withdraw-organizations.input';

@InputType()
export class organizationCreateWithoutApi_tokens_organizationInput {

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

    @Field(() => String, {nullable:true})
    support_chat_url?: string;

    @Field(() => String, {nullable:true})
    icon_url?: string;

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

    @Field(() => order_statusCreateNestedManyWithoutOrder_status_organizationInput, {nullable:true})
    order_status_organization?: order_statusCreateNestedManyWithoutOrder_status_organizationInput;

    @Field(() => ordersCreateNestedManyWithoutOrders_organizationInput, {nullable:true})
    orders_organization?: ordersCreateNestedManyWithoutOrders_organizationInput;

    @Field(() => order_transactionsCreateNestedManyWithoutOrder_transactions_organizationsInput, {nullable:true})
    order_transactions_organizations?: order_transactionsCreateNestedManyWithoutOrder_transactions_organizationsInput;

    @Field(() => courier_terminal_balanceCreateNestedManyWithoutCourier_terminal_balance_organizationsInput, {nullable:true})
    courier_terminal_balance_organizations?: courier_terminal_balanceCreateNestedManyWithoutCourier_terminal_balance_organizationsInput;

    @Field(() => manager_withdrawCreateNestedManyWithoutManager_withdraw_organizationsInput, {nullable:true})
    manager_withdraw_organizations?: manager_withdrawCreateNestedManyWithoutManager_withdraw_organizationsInput;
}
