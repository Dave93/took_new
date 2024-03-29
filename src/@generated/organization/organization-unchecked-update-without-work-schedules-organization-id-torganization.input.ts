import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organization_system_type } from './organization-system-type.enum';
import { Int } from '@nestjs/graphql';
import { organization_payment_types } from './organization-payment-types.enum';
import { delivery_pricingUncheckedUpdateManyWithoutOrganizationNestedInput } from '../delivery-pricing/delivery-pricing-unchecked-update-many-without-organization-nested.input';
import { terminalsUncheckedUpdateManyWithoutOrganizationNestedInput } from '../terminals/terminals-unchecked-update-many-without-organization-nested.input';
import { order_statusUncheckedUpdateManyWithoutOrder_status_organizationNestedInput } from '../order-status/order-status-unchecked-update-many-without-order-status-organization-nested.input';
import { ordersUncheckedUpdateManyWithoutOrders_organizationNestedInput } from '../orders/orders-unchecked-update-many-without-orders-organization-nested.input';
import { api_tokensUncheckedUpdateManyWithoutApi_tokens_organizationNestedInput } from '../api-tokens/api-tokens-unchecked-update-many-without-api-tokens-organization-nested.input';
import { order_transactionsUncheckedUpdateManyWithoutOrder_transactions_organizationsNestedInput } from '../order-transactions/order-transactions-unchecked-update-many-without-order-transactions-organizations-nested.input';
import { courier_terminal_balanceUncheckedUpdateManyWithoutCourier_terminal_balance_organizationsNestedInput } from '../courier-terminal-balance/courier-terminal-balance-unchecked-update-many-without-courier-terminal-balance-organizations-nested.input';
import { manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_organizationsNestedInput } from '../manager-withdraw/manager-withdraw-unchecked-update-many-without-manager-withdraw-organizations-nested.input';
import { order_bonus_pricingUncheckedUpdateManyWithoutOrganizationNestedInput } from '../order-bonus-pricing/order-bonus-pricing-unchecked-update-many-without-organization-nested.input';

@InputType()
export class organizationUncheckedUpdateWithoutWork_schedules_organization_idTorganizationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    external_id?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => organization_system_type, {nullable:true})
    system_type?: keyof typeof organization_system_type;

    @Field(() => String, {nullable:true})
    phone?: string;

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

    @Field(() => Boolean, {nullable:true})
    allow_yandex_delivery?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => delivery_pricingUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    delivery_pricing_organization_idTorganization?: delivery_pricingUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => terminalsUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    terminals_organization_idTorganization?: terminalsUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => order_statusUncheckedUpdateManyWithoutOrder_status_organizationNestedInput, {nullable:true})
    order_status_organization?: order_statusUncheckedUpdateManyWithoutOrder_status_organizationNestedInput;

    @Field(() => ordersUncheckedUpdateManyWithoutOrders_organizationNestedInput, {nullable:true})
    orders_organization?: ordersUncheckedUpdateManyWithoutOrders_organizationNestedInput;

    @Field(() => api_tokensUncheckedUpdateManyWithoutApi_tokens_organizationNestedInput, {nullable:true})
    api_tokens_organization?: api_tokensUncheckedUpdateManyWithoutApi_tokens_organizationNestedInput;

    @Field(() => order_transactionsUncheckedUpdateManyWithoutOrder_transactions_organizationsNestedInput, {nullable:true})
    order_transactions_organizations?: order_transactionsUncheckedUpdateManyWithoutOrder_transactions_organizationsNestedInput;

    @Field(() => courier_terminal_balanceUncheckedUpdateManyWithoutCourier_terminal_balance_organizationsNestedInput, {nullable:true})
    courier_terminal_balance_organizations?: courier_terminal_balanceUncheckedUpdateManyWithoutCourier_terminal_balance_organizationsNestedInput;

    @Field(() => manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_organizationsNestedInput, {nullable:true})
    manager_withdraw_organizations?: manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_organizationsNestedInput;

    @Field(() => order_bonus_pricingUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    order_bonus_pricing?: order_bonus_pricingUncheckedUpdateManyWithoutOrganizationNestedInput;
}
