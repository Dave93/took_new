import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { Manager_withdrawRelationFilter } from '../prisma/manager-withdraw-relation-filter.input';
import { Order_transactionsRelationFilter } from '../prisma/order-transactions-relation-filter.input';

@InputType()
export class manager_withdraw_transactionsWhereInput {

    @Field(() => [manager_withdraw_transactionsWhereInput], {nullable:true})
    AND?: Array<manager_withdraw_transactionsWhereInput>;

    @Field(() => [manager_withdraw_transactionsWhereInput], {nullable:true})
    OR?: Array<manager_withdraw_transactionsWhereInput>;

    @Field(() => [manager_withdraw_transactionsWhereInput], {nullable:true})
    NOT?: Array<manager_withdraw_transactionsWhereInput>;

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

    @Field(() => Manager_withdrawRelationFilter, {nullable:true})
    manager_withdraw_transactions_withdraw?: Manager_withdrawRelationFilter;

    @Field(() => Order_transactionsRelationFilter, {nullable:true})
    manager_withdraw_transactions_transaction?: Order_transactionsRelationFilter;
}
