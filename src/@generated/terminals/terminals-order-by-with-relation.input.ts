import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { organizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { users_terminalsOrderByRelationAggregateInput } from '../users-terminals/users-terminals-order-by-relation-aggregate.input';
import { ordersOrderByRelationAggregateInput } from '../orders/orders-order-by-relation-aggregate.input';
import { order_actionsOrderByRelationAggregateInput } from '../order-actions/order-actions-order-by-relation-aggregate.input';
import { order_locationsOrderByRelationAggregateInput } from '../order-locations/order-locations-order-by-relation-aggregate.input';
import { delivery_pricingOrderByRelationAggregateInput } from '../delivery-pricing/delivery-pricing-order-by-relation-aggregate.input';

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
}
