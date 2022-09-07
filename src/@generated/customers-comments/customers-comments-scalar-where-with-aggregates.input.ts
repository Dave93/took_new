import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class customers_commentsScalarWhereWithAggregatesInput {

    @Field(() => [customers_commentsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<customers_commentsScalarWhereWithAggregatesInput>;

    @Field(() => [customers_commentsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<customers_commentsScalarWhereWithAggregatesInput>;

    @Field(() => [customers_commentsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<customers_commentsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    customer_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    comment?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    created_by?: StringNullableWithAggregatesFilter;
}
