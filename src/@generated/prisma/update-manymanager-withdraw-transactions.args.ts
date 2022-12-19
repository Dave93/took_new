import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdraw_transactionsUpdateManyMutationInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { manager_withdraw_transactionsWhereInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-where.input';

@ArgsType()
export class UpdateManymanagerWithdrawTransactionsArgs {

    @Field(() => manager_withdraw_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => manager_withdraw_transactionsUpdateManyMutationInput)
    data!: manager_withdraw_transactionsUpdateManyMutationInput;

    @Field(() => manager_withdraw_transactionsWhereInput, {nullable:true})
    @Type(() => manager_withdraw_transactionsWhereInput)
    where?: manager_withdraw_transactionsWhereInput;
}
