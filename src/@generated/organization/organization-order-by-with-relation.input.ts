import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { work_schedulesOrderByRelationAggregateInput } from '../work-schedules/work-schedules-order-by-relation-aggregate.input';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { delivery_pricingOrderByRelationAggregateInput } from '../delivery-pricing/delivery-pricing-order-by-relation-aggregate.input';
import { terminalsOrderByRelationAggregateInput } from '../terminals/terminals-order-by-relation-aggregate.input';
import { order_statusOrderByRelationAggregateInput } from '../order-status/order-status-order-by-relation-aggregate.input';
import { ordersOrderByRelationAggregateInput } from '../orders/orders-order-by-relation-aggregate.input';
import { api_tokensOrderByRelationAggregateInput } from '../api-tokens/api-tokens-order-by-relation-aggregate.input';
import { order_transactionsOrderByRelationAggregateInput } from '../order-transactions/order-transactions-order-by-relation-aggregate.input';

@InputType()
export class organizationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    external_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    system_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    iiko_login?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    webhook?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    apelsin_login?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    apelsin_password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sender_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sender_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_distance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_active_order_count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_order_close_distance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payment_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => work_schedulesOrderByRelationAggregateInput, {nullable:true})
    work_schedules_organization_idTorganization?: work_schedulesOrderByRelationAggregateInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    organization_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    organization_updated_byTousers?: usersOrderByWithRelationInput;

    @Field(() => delivery_pricingOrderByRelationAggregateInput, {nullable:true})
    delivery_pricing_organization_idTorganization?: delivery_pricingOrderByRelationAggregateInput;

    @Field(() => terminalsOrderByRelationAggregateInput, {nullable:true})
    terminals_organization_idTorganization?: terminalsOrderByRelationAggregateInput;

    @Field(() => order_statusOrderByRelationAggregateInput, {nullable:true})
    order_status_organization?: order_statusOrderByRelationAggregateInput;

    @Field(() => ordersOrderByRelationAggregateInput, {nullable:true})
    orders_organization?: ordersOrderByRelationAggregateInput;

    @Field(() => api_tokensOrderByRelationAggregateInput, {nullable:true})
    api_tokens_organization?: api_tokensOrderByRelationAggregateInput;

    @Field(() => order_transactionsOrderByRelationAggregateInput, {nullable:true})
    order_transactions_organizations?: order_transactionsOrderByRelationAggregateInput;
}
