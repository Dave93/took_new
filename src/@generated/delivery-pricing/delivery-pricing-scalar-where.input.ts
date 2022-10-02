import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Enumdrive_typeFilter } from '../prisma/enumdrive-type-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class delivery_pricingScalarWhereInput {

    @Field(() => [delivery_pricingScalarWhereInput], {nullable:true})
    AND?: Array<delivery_pricingScalarWhereInput>;

    @Field(() => [delivery_pricingScalarWhereInput], {nullable:true})
    OR?: Array<delivery_pricingScalarWhereInput>;

    @Field(() => [delivery_pricingScalarWhereInput], {nullable:true})
    NOT?: Array<delivery_pricingScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    default?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => Enumdrive_typeFilter, {nullable:true})
    drive_type?: Enumdrive_typeFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    days?: StringNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    start_time?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    end_time?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    min_price?: IntNullableFilter;

    @Field(() => JsonFilter, {nullable:true})
    rules?: JsonFilter;

    @Field(() => IntFilter, {nullable:true})
    price_per_km?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    organization_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    terminal_id?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;
}
