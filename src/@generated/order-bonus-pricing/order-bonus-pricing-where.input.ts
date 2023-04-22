import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { TerminalsRelationFilter } from '../prisma/terminals-relation-filter.input';
import { OrganizationRelationFilter } from '../prisma/organization-relation-filter.input';

@InputType()
export class order_bonus_pricingWhereInput {

    @Field(() => [order_bonus_pricingWhereInput], {nullable:true})
    AND?: Array<order_bonus_pricingWhereInput>;

    @Field(() => [order_bonus_pricingWhereInput], {nullable:true})
    OR?: Array<order_bonus_pricingWhereInput>;

    @Field(() => [order_bonus_pricingWhereInput], {nullable:true})
    NOT?: Array<order_bonus_pricingWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    start_time?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    end_time?: DateTimeFilter;

    @Field(() => JsonFilter, {nullable:true})
    rules?: JsonFilter;

    @Field(() => IntFilter, {nullable:true})
    min_distance_km?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    organization_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    terminal_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    courier_id?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    courier?: UsersRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_order_bonus_pricing_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_order_bonus_pricing_updated_byTousers?: UsersRelationFilter;

    @Field(() => TerminalsRelationFilter, {nullable:true})
    terminals?: TerminalsRelationFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;
}
