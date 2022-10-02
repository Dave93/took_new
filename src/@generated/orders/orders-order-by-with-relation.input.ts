import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { customersOrderByWithRelationInput } from '../customers/customers-order-by-with-relation.input';
import { order_statusOrderByWithRelationInput } from '../order-status/order-status-order-by-with-relation.input';
import { organizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { terminalsOrderByWithRelationInput } from '../terminals/terminals-order-by-with-relation.input';
import { order_actionsOrderByRelationAggregateInput } from '../order-actions/order-actions-order-by-relation-aggregate.input';
import { order_locationsOrderByRelationAggregateInput } from '../order-locations/order-locations-order-by-relation-aggregate.input';

@InputType()
export class ordersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customer_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_status_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from_lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from_lon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to_lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to_lon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pre_distance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pre_duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    distance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    finished_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_comment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payment_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cancel_reason?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_items?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_pricing_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    orders_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    orders_updated_byTousers?: usersOrderByWithRelationInput;

    @Field(() => customersOrderByWithRelationInput, {nullable:true})
    orders_customers?: customersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    orders_couriers?: usersOrderByWithRelationInput;

    @Field(() => order_statusOrderByWithRelationInput, {nullable:true})
    orders_order_status?: order_statusOrderByWithRelationInput;

    @Field(() => organizationOrderByWithRelationInput, {nullable:true})
    orders_organization?: organizationOrderByWithRelationInput;

    @Field(() => terminalsOrderByWithRelationInput, {nullable:true})
    orders_terminals?: terminalsOrderByWithRelationInput;

    @Field(() => order_actionsOrderByRelationAggregateInput, {nullable:true})
    order_actions_orders?: order_actionsOrderByRelationAggregateInput;

    @Field(() => order_locationsOrderByRelationAggregateInput, {nullable:true})
    order_locations_orders?: order_locationsOrderByRelationAggregateInput;
}
