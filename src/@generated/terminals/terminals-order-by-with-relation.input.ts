import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { organizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { users_terminalsOrderByRelationAggregateInput } from '../users-terminals/users-terminals-order-by-relation-aggregate.input';
import { ordersOrderByRelationAggregateInput } from '../orders/orders-order-by-relation-aggregate.input';
import { order_actionsOrderByRelationAggregateInput } from '../order-actions/order-actions-order-by-relation-aggregate.input';
import { order_locationsOrderByRelationAggregateInput } from '../order-locations/order-locations-order-by-relation-aggregate.input';
import { delivery_pricingOrderByRelationAggregateInput } from '../delivery-pricing/delivery-pricing-order-by-relation-aggregate.input';
import { order_votesOrderByRelationAggregateInput } from '../order-votes/order-votes-order-by-relation-aggregate.input';
import { order_transactionsOrderByRelationAggregateInput } from '../order-transactions/order-transactions-order-by-relation-aggregate.input';
import { courier_terminal_balanceOrderByRelationAggregateInput } from '../courier-terminal-balance/courier-terminal-balance-order-by-relation-aggregate.input';
import { manager_withdrawOrderByRelationAggregateInput } from '../manager-withdraw/manager-withdraw-order-by-relation-aggregate.input';

@InputType()
export class terminalsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    external_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => organizationOrderByWithRelationInput, {nullable:true})
    organization?: organizationOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => users_terminalsOrderByRelationAggregateInput, {nullable:true})
    users_terminals?: users_terminalsOrderByRelationAggregateInput;

    @Field(() => ordersOrderByRelationAggregateInput, {nullable:true})
    orders_terminals?: ordersOrderByRelationAggregateInput;

    @Field(() => order_actionsOrderByRelationAggregateInput, {nullable:true})
    order_actions_terminals?: order_actionsOrderByRelationAggregateInput;

    @Field(() => order_locationsOrderByRelationAggregateInput, {nullable:true})
    order_locations_terminals?: order_locationsOrderByRelationAggregateInput;

    @Field(() => delivery_pricingOrderByRelationAggregateInput, {nullable:true})
    delivery_pricing_terminal_idTterminal?: delivery_pricingOrderByRelationAggregateInput;

    @Field(() => order_votesOrderByRelationAggregateInput, {nullable:true})
    order_votes_terminals?: order_votesOrderByRelationAggregateInput;

    @Field(() => order_transactionsOrderByRelationAggregateInput, {nullable:true})
    order_transactions_terminals?: order_transactionsOrderByRelationAggregateInput;

    @Field(() => courier_terminal_balanceOrderByRelationAggregateInput, {nullable:true})
    courier_terminal_balance_terminals?: courier_terminal_balanceOrderByRelationAggregateInput;

    @Field(() => manager_withdrawOrderByRelationAggregateInput, {nullable:true})
    manager_withdraw_terminals?: manager_withdrawOrderByRelationAggregateInput;
}
