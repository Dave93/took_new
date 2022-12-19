import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class manager_withdraw_transactionsScalarWhereWithAggregatesInput {

    @Field(() => [manager_withdraw_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<manager_withdraw_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => [manager_withdraw_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<manager_withdraw_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => [manager_withdraw_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<manager_withdraw_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    withdraw_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    transaction_id?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    payed_date?: DateTimeNullableWithAggregatesFilter;
}
