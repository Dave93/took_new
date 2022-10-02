import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { OrdersRelationFilter } from '../prisma/orders-relation-filter.input';
import { TerminalsRelationFilter } from '../prisma/terminals-relation-filter.input';

@InputType()
export class order_locationsWhereInput {

    @Field(() => [order_locationsWhereInput], {nullable:true})
    AND?: Array<order_locationsWhereInput>;

    @Field(() => [order_locationsWhereInput], {nullable:true})
    OR?: Array<order_locationsWhereInput>;

    @Field(() => [order_locationsWhereInput], {nullable:true})
    NOT?: Array<order_locationsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    order_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    terminal_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    courier_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    order_status_id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    lat?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    lon?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    order_locations_created_byTousers?: UsersRelationFilter;

    @Field(() => OrdersRelationFilter, {nullable:true})
    order_locations_orders?: OrdersRelationFilter;

    @Field(() => TerminalsRelationFilter, {nullable:true})
    order_locations_terminals?: TerminalsRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    order_locations_couriers?: UsersRelationFilter;
}
