import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdraw_transactionsCreateInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemanagerWithdrawTransactionsArgs {

    @Field(() => manager_withdraw_transactionsCreateInput, {nullable:false})
    @Type(() => manager_withdraw_transactionsCreateInput)
    data!: manager_withdraw_transactionsCreateInput;
}
