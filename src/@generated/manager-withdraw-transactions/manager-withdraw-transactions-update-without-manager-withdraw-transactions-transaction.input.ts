import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { manager_withdrawUpdateOneRequiredWithoutManager_withdraw_transactions_withdrawNestedInput } from '../manager-withdraw/manager-withdraw-update-one-required-without-manager-withdraw-transactions-withdraw-nested.input';

@InputType()
export class manager_withdraw_transactionsUpdateWithoutManager_withdraw_transactions_transactionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    payed_date?: Date | string;

    @Field(() => manager_withdrawUpdateOneRequiredWithoutManager_withdraw_transactions_withdrawNestedInput, {nullable:true})
    manager_withdraw_transactions_withdraw?: manager_withdrawUpdateOneRequiredWithoutManager_withdraw_transactions_withdrawNestedInput;
}
