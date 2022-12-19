import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { Enumdrive_typeFilter } from '../prisma/enumdrive-type-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { CustomersRelationFilter } from '../prisma/customers-relation-filter.input';
import { Order_statusRelationFilter } from '../prisma/order-status-relation-filter.input';
import { OrganizationRelationFilter } from '../prisma/organization-relation-filter.input';
import { TerminalsRelationFilter } from '../prisma/terminals-relation-filter.input';
import { AssetsRelationFilter } from '../prisma/assets-relation-filter.input';
import { Order_actionsListRelationFilter } from '../prisma/order-actions-list-relation-filter.input';
import { Order_locationsListRelationFilter } from '../prisma/order-locations-list-relation-filter.input';
import { Order_votesListRelationFilter } from '../prisma/order-votes-list-relation-filter.input';
import { Order_transactionsListRelationFilter } from '../prisma/order-transactions-list-relation-filter.input';

@InputType()
export class ordersWhereInput {

    @Field(() => [ordersWhereInput], {nullable:true})
    AND?: Array<ordersWhereInput>;

    @Field(() => [ordersWhereInput], {nullable:true})
    OR?: Array<ordersWhereInput>;

    @Field(() => [ordersWhereInput], {nullable:true})
    NOT?: Array<ordersWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    organization_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    customer_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    courier_id?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    terminal_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    order_status_id?: StringFilter;

    @Field(() => Enumdrive_typeFilter, {nullable:true})
    delivery_type?: Enumdrive_typeFilter;

    @Field(() => FloatFilter, {nullable:true})
    from_lat?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    from_lon?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    to_lat?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    to_lon?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    pre_distance?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    pre_duration?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    order_number?: StringFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    distance?: FloatNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    duration?: IntNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    order_price?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    delivery_price?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    delivery_address?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    finished_date?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    delivery_comment?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    payment_type?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cancel_reason?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    sms_sent_to_customer?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    score?: IntNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    order_items?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    delivery_pricing_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cancel_voice_id?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    orders_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    orders_updated_byTousers?: UsersRelationFilter;

    @Field(() => CustomersRelationFilter, {nullable:true})
    orders_customers?: CustomersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    orders_couriers?: UsersRelationFilter;

    @Field(() => Order_statusRelationFilter, {nullable:true})
    orders_order_status?: Order_statusRelationFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    orders_organization?: OrganizationRelationFilter;

    @Field(() => TerminalsRelationFilter, {nullable:true})
    orders_terminals?: TerminalsRelationFilter;

    @Field(() => AssetsRelationFilter, {nullable:true})
    orders_voice_idToassets?: AssetsRelationFilter;

    @Field(() => Order_actionsListRelationFilter, {nullable:true})
    order_actions_orders?: Order_actionsListRelationFilter;

    @Field(() => Order_locationsListRelationFilter, {nullable:true})
    order_locations_orders?: Order_locationsListRelationFilter;

    @Field(() => Order_votesListRelationFilter, {nullable:true})
    order_votes_orders?: Order_votesListRelationFilter;

    @Field(() => Order_transactionsListRelationFilter, {nullable:true})
    order_transactions_orders?: Order_transactionsListRelationFilter;
}
