import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdraw_transactionsWhereUniqueInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { manager_withdraw_transactionsCreateInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-create.input';
import { manager_withdraw_transactionsUpdateInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-update.input';

@ArgsType()
export class UpsertOnemanagerWithdrawTransactionsArgs {

    @Field(() => manager_withdraw_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => manager_withdraw_transactionsWhereUniqueInput)
    where!: manager_withdraw_transactionsWhereUniqueInput;

    @Field(() => manager_withdraw_transactionsCreateInput, {nullable:false})
    @Type(() => manager_withdraw_transactionsCreateInput)
    create!: manager_withdraw_transactionsCreateInput;

    @Field(() => manager_withdraw_transactionsUpdateInput, {nullable:false})
    @Type(() => manager_withdraw_transactionsUpdateInput)
    update!: manager_withdraw_transactionsUpdateInput;
}
