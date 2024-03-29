import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { organizationCreateNestedOneWithoutTerminals_organization_idTorganizationInput } from '../organization/organization-create-nested-one-without-terminals-organization-id-torganization.input';
import { users_terminalsCreateNestedManyWithoutTerminalsInput } from '../users-terminals/users-terminals-create-nested-many-without-terminals.input';
import { ordersCreateNestedManyWithoutOrders_terminalsInput } from '../orders/orders-create-nested-many-without-orders-terminals.input';
import { order_actionsCreateNestedManyWithoutOrder_actions_terminalsInput } from '../order-actions/order-actions-create-nested-many-without-order-actions-terminals.input';
import { order_locationsCreateNestedManyWithoutOrder_locations_terminalsInput } from '../order-locations/order-locations-create-nested-many-without-order-locations-terminals.input';
import { order_votesCreateNestedManyWithoutOrder_votes_terminalsInput } from '../order-votes/order-votes-create-nested-many-without-order-votes-terminals.input';
import { order_transactionsCreateNestedManyWithoutOrder_transactions_terminalsInput } from '../order-transactions/order-transactions-create-nested-many-without-order-transactions-terminals.input';
import { courier_terminal_balanceCreateNestedManyWithoutCourier_terminal_balance_terminalsInput } from '../courier-terminal-balance/courier-terminal-balance-create-nested-many-without-courier-terminal-balance-terminals.input';
import { manager_withdrawCreateNestedManyWithoutManager_withdraw_terminalsInput } from '../manager-withdraw/manager-withdraw-create-nested-many-without-manager-withdraw-terminals.input';
import { order_bonus_pricingCreateNestedManyWithoutTerminalsInput } from '../order-bonus-pricing/order-bonus-pricing-create-nested-many-without-terminals.input';

@InputType()
export class terminalsCreateWithoutDelivery_pricing_terminal_idTterminalInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => String, {nullable:false})
    external_id!: string;

    @Field(() => String, {nullable:true})
    manager_name?: string;

    @Field(() => organizationCreateNestedOneWithoutTerminals_organization_idTorganizationInput, {nullable:false})
    organization!: organizationCreateNestedOneWithoutTerminals_organization_idTorganizationInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => users_terminalsCreateNestedManyWithoutTerminalsInput, {nullable:true})
    users_terminals?: users_terminalsCreateNestedManyWithoutTerminalsInput;

    @Field(() => ordersCreateNestedManyWithoutOrders_terminalsInput, {nullable:true})
    orders_terminals?: ordersCreateNestedManyWithoutOrders_terminalsInput;

    @Field(() => order_actionsCreateNestedManyWithoutOrder_actions_terminalsInput, {nullable:true})
    order_actions_terminals?: order_actionsCreateNestedManyWithoutOrder_actions_terminalsInput;

    @Field(() => order_locationsCreateNestedManyWithoutOrder_locations_terminalsInput, {nullable:true})
    order_locations_terminals?: order_locationsCreateNestedManyWithoutOrder_locations_terminalsInput;

    @Field(() => order_votesCreateNestedManyWithoutOrder_votes_terminalsInput, {nullable:true})
    order_votes_terminals?: order_votesCreateNestedManyWithoutOrder_votes_terminalsInput;

    @Field(() => order_transactionsCreateNestedManyWithoutOrder_transactions_terminalsInput, {nullable:true})
    order_transactions_terminals?: order_transactionsCreateNestedManyWithoutOrder_transactions_terminalsInput;

    @Field(() => courier_terminal_balanceCreateNestedManyWithoutCourier_terminal_balance_terminalsInput, {nullable:true})
    courier_terminal_balance_terminals?: courier_terminal_balanceCreateNestedManyWithoutCourier_terminal_balance_terminalsInput;

    @Field(() => manager_withdrawCreateNestedManyWithoutManager_withdraw_terminalsInput, {nullable:true})
    manager_withdraw_terminals?: manager_withdrawCreateNestedManyWithoutManager_withdraw_terminalsInput;

    @Field(() => order_bonus_pricingCreateNestedManyWithoutTerminalsInput, {nullable:true})
    order_bonus_pricing?: order_bonus_pricingCreateNestedManyWithoutTerminalsInput;
}
