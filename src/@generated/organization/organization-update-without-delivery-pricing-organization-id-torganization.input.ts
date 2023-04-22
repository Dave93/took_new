import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organization_system_type } from './organization-system-type.enum';
import { Int } from '@nestjs/graphql';
import { organization_payment_types } from './organization-payment-types.enum';
import { work_schedulesUpdateManyWithoutOrganizationNestedInput } from '../work-schedules/work-schedules-update-many-without-organization-nested.input';
import { usersUpdateOneWithoutOrganization_created_byTousersNestedInput } from '../users/users-update-one-without-organization-created-by-tousers-nested.input';
import { usersUpdateOneWithoutOrganization_updated_byTousersNestedInput } from '../users/users-update-one-without-organization-updated-by-tousers-nested.input';
import { terminalsUpdateManyWithoutOrganizationNestedInput } from '../terminals/terminals-update-many-without-organization-nested.input';
import { order_statusUpdateManyWithoutOrder_status_organizationNestedInput } from '../order-status/order-status-update-many-without-order-status-organization-nested.input';
import { ordersUpdateManyWithoutOrders_organizationNestedInput } from '../orders/orders-update-many-without-orders-organization-nested.input';
import { api_tokensUpdateManyWithoutApi_tokens_organizationNestedInput } from '../api-tokens/api-tokens-update-many-without-api-tokens-organization-nested.input';
import { order_transactionsUpdateManyWithoutOrder_transactions_organizationsNestedInput } from '../order-transactions/order-transactions-update-many-without-order-transactions-organizations-nested.input';
import { courier_terminal_balanceUpdateManyWithoutCourier_terminal_balance_organizationsNestedInput } from '../courier-terminal-balance/courier-terminal-balance-update-many-without-courier-terminal-balance-organizations-nested.input';
import { manager_withdrawUpdateManyWithoutManager_withdraw_organizationsNestedInput } from '../manager-withdraw/manager-withdraw-update-many-without-manager-withdraw-organizations-nested.input';
import { order_bonus_pricingUpdateManyWithoutOrganizationNestedInput } from '../order-bonus-pricing/order-bonus-pricing-update-many-without-organization-nested.input';

@InputType()
export class organizationUpdateWithoutDelivery_pricing_organization_idTorganizationInput {

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

    @Field(() => work_schedulesUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    work_schedules_organization_idTorganization?: work_schedulesUpdateManyWithoutOrganizationNestedInput;

    @Field(() => usersUpdateOneWithoutOrganization_created_byTousersNestedInput, {nullable:true})
    organization_created_byTousers?: usersUpdateOneWithoutOrganization_created_byTousersNestedInput;

    @Field(() => usersUpdateOneWithoutOrganization_updated_byTousersNestedInput, {nullable:true})
    organization_updated_byTousers?: usersUpdateOneWithoutOrganization_updated_byTousersNestedInput;

    @Field(() => terminalsUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    terminals_organization_idTorganization?: terminalsUpdateManyWithoutOrganizationNestedInput;

    @Field(() => order_statusUpdateManyWithoutOrder_status_organizationNestedInput, {nullable:true})
    order_status_organization?: order_statusUpdateManyWithoutOrder_status_organizationNestedInput;

    @Field(() => ordersUpdateManyWithoutOrders_organizationNestedInput, {nullable:true})
    orders_organization?: ordersUpdateManyWithoutOrders_organizationNestedInput;

    @Field(() => api_tokensUpdateManyWithoutApi_tokens_organizationNestedInput, {nullable:true})
    api_tokens_organization?: api_tokensUpdateManyWithoutApi_tokens_organizationNestedInput;

    @Field(() => order_transactionsUpdateManyWithoutOrder_transactions_organizationsNestedInput, {nullable:true})
    order_transactions_organizations?: order_transactionsUpdateManyWithoutOrder_transactions_organizationsNestedInput;

    @Field(() => courier_terminal_balanceUpdateManyWithoutCourier_terminal_balance_organizationsNestedInput, {nullable:true})
    courier_terminal_balance_organizations?: courier_terminal_balanceUpdateManyWithoutCourier_terminal_balance_organizationsNestedInput;

    @Field(() => manager_withdrawUpdateManyWithoutManager_withdraw_organizationsNestedInput, {nullable:true})
    manager_withdraw_organizations?: manager_withdrawUpdateManyWithoutManager_withdraw_organizationsNestedInput;

    @Field(() => order_bonus_pricingUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    order_bonus_pricing?: order_bonus_pricingUpdateManyWithoutOrganizationNestedInput;
}
