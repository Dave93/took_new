import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class manager_withdraw_transactionsScalarWhereInput {

    @Field(() => [manager_withdraw_transactionsScalarWhereInput], {nullable:true})
    AND?: Array<manager_withdraw_transactionsScalarWhereInput>;

    @Field(() => [manager_withdraw_transactionsScalarWhereInput], {nullable:true})
    OR?: Array<manager_withdraw_transactionsScalarWhereInput>;

    @Field(() => [manager_withdraw_transactionsScalarWhereInput], {nullable:true})
    NOT?: Array<manager_withdraw_transactionsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    withdraw_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    transaction_id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    payed_date?: DateTimeNullableFilter;
}
