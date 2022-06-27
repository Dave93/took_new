import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { Enumprice_typeWithAggregatesFilter } from '../prisma/enumprice-type-with-aggregates-filter.input';
import { EnumstatusWithAggregatesFilter } from '../prisma/enumstatus-with-aggregates-filter.input';
import { Enumsale_typeWithAggregatesFilter } from '../prisma/enumsale-type-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';

@InputType()
export class postScalarWhereWithAggregatesInput {

    @Field(() => [postScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<postScalarWhereWithAggregatesInput>;

    @Field(() => [postScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<postScalarWhereWithAggregatesInput>;

    @Field(() => [postScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<postScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    created_by?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    updated_by?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price?: IntWithAggregatesFilter;

    @Field(() => Enumprice_typeWithAggregatesFilter, {nullable:true})
    price_type?: Enumprice_typeWithAggregatesFilter;

    @Field(() => EnumstatusWithAggregatesFilter, {nullable:true})
    status?: EnumstatusWithAggregatesFilter;

    @Field(() => Enumsale_typeWithAggregatesFilter, {nullable:true})
    sale_type?: Enumsale_typeWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    latitude?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    longitude?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    address?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    comments_count?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    city_id?: StringWithAggregatesFilter;
}
