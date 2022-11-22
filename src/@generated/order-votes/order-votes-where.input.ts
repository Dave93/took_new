import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { OrdersRelationFilter } from '../prisma/orders-relation-filter.input';
import { TerminalsRelationFilter } from '../prisma/terminals-relation-filter.input';

@InputType()
export class order_votesWhereInput {

    @Field(() => [order_votesWhereInput], {nullable:true})
    AND?: Array<order_votesWhereInput>;

    @Field(() => [order_votesWhereInput], {nullable:true})
    OR?: Array<order_votesWhereInput>;

    @Field(() => [order_votesWhereInput], {nullable:true})
    NOT?: Array<order_votesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    order_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    terminal_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    courier_id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_voting?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_chosen?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    order_votes_created_byTousers?: UsersRelationFilter;

    @Field(() => OrdersRelationFilter, {nullable:true})
    order_votes_orders?: OrdersRelationFilter;

    @Field(() => TerminalsRelationFilter, {nullable:true})
    order_votes_terminals?: TerminalsRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    order_votes_couriers?: UsersRelationFilter;
}
