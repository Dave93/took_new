import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { Enumdrive_typeWithAggregatesFilter } from '../prisma/enumdrive-type-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { Enumorganization_payment_typesNullableWithAggregatesFilter } from '../prisma/enumorganization-payment-types-nullable-with-aggregates-filter.input';

@InputType()
export class delivery_pricingScalarWhereWithAggregatesInput {

    @Field(() => [delivery_pricingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<delivery_pricingScalarWhereWithAggregatesInput>;

    @Field(() => [delivery_pricingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<delivery_pricingScalarWhereWithAggregatesInput>;

    @Field(() => [delivery_pricingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<delivery_pricingScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    default?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => Enumdrive_typeWithAggregatesFilter, {nullable:true})
    drive_type?: Enumdrive_typeWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    days?: StringNullableListFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    start_time?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    end_time?: DateTimeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    min_price?: IntNullableWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    rules?: JsonWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price_per_km?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    organization_id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    terminal_id?: StringNullableWithAggregatesFilter;

    @Field(() => Enumorganization_payment_typesNullableWithAggregatesFilter, {nullable:true})
    payment_type?: Enumorganization_payment_typesNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    created_by?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    updated_by?: StringNullableWithAggregatesFilter;
}
