import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { Enumsale_typeWithAggregatesFilter } from '../prisma/enumsale-type-with-aggregates-filter.input';
import { EnumtypeWithAggregatesFilter } from '../prisma/enumtype-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class post_prop_typesScalarWhereWithAggregatesInput {

    @Field(() => [post_prop_typesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<post_prop_typesScalarWhereWithAggregatesInput>;

    @Field(() => [post_prop_typesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<post_prop_typesScalarWhereWithAggregatesInput>;

    @Field(() => [post_prop_typesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<post_prop_typesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => Enumsale_typeWithAggregatesFilter, {nullable:true})
    sale_type?: Enumsale_typeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => EnumtypeWithAggregatesFilter, {nullable:true})
    type?: EnumtypeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    created_by?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    updated_by?: StringNullableWithAggregatesFilter;
}
