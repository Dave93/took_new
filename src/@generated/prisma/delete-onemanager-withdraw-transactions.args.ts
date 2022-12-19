import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdraw_transactionsWhereUniqueInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnemanagerWithdrawTransactionsArgs {

    @Field(() => manager_withdraw_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => manager_withdraw_transactionsWhereUniqueInput)
    where!: manager_withdraw_transactionsWhereUniqueInput;
}
