import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdraw_transactionsWhereInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-where.input';
import { Type } from 'class-transformer';
import { manager_withdraw_transactionsOrderByWithAggregationInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-order-by-with-aggregation.input';
import { Manager_withdraw_transactionsScalarFieldEnum } from './manager-withdraw-transactions-scalar-field.enum';
import { manager_withdraw_transactionsScalarWhereWithAggregatesInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymanagerWithdrawTransactionsArgs {

    @Field(() => manager_withdraw_transactionsWhereInput, {nullable:true})
    @Type(() => manager_withdraw_transactionsWhereInput)
    where?: manager_withdraw_transactionsWhereInput;

    @Field(() => [manager_withdraw_transactionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<manager_withdraw_transactionsOrderByWithAggregationInput>;

    @Field(() => [Manager_withdraw_transactionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Manager_withdraw_transactionsScalarFieldEnum>;

    @Field(() => manager_withdraw_transactionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: manager_withdraw_transactionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
