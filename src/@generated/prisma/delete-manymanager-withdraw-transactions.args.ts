import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdraw_transactionsWhereInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymanagerWithdrawTransactionsArgs {

    @Field(() => manager_withdraw_transactionsWhereInput, {nullable:true})
    @Type(() => manager_withdraw_transactionsWhereInput)
    where?: manager_withdraw_transactionsWhereInput;
}
