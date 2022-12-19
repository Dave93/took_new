import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdraw_transactionsWhereUniqueInput } from './manager-withdraw-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { manager_withdraw_transactionsUpdateWithoutManager_withdraw_transactions_withdrawInput } from './manager-withdraw-transactions-update-without-manager-withdraw-transactions-withdraw.input';

@InputType()
export class manager_withdraw_transactionsUpdateWithWhereUniqueWithoutManager_withdraw_transactions_withdrawInput {

    @Field(() => manager_withdraw_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => manager_withdraw_transactionsWhereUniqueInput)
    where!: manager_withdraw_transactionsWhereUniqueInput;

    @Field(() => manager_withdraw_transactionsUpdateWithoutManager_withdraw_transactions_withdrawInput, {nullable:false})
    @Type(() => manager_withdraw_transactionsUpdateWithoutManager_withdraw_transactions_withdrawInput)
    data!: manager_withdraw_transactionsUpdateWithoutManager_withdraw_transactions_withdrawInput;
}
