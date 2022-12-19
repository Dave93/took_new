import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdraw_transactionsUpdateInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-update.input';
import { Type } from 'class-transformer';
import { manager_withdraw_transactionsWhereUniqueInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-where-unique.input';

@ArgsType()
export class UpdateOnemanagerWithdrawTransactionsArgs {

    @Field(() => manager_withdraw_transactionsUpdateInput, {nullable:false})
    @Type(() => manager_withdraw_transactionsUpdateInput)
    data!: manager_withdraw_transactionsUpdateInput;

    @Field(() => manager_withdraw_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => manager_withdraw_transactionsWhereUniqueInput)
    where!: manager_withdraw_transactionsWhereUniqueInput;
}
