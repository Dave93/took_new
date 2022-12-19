import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { order_transactionsUpdateOneRequiredWithoutManager_withdraw_transactions_transactionNestedInput } from '../order-transactions/order-transactions-update-one-required-without-manager-withdraw-transactions-transaction-nested.input';

@InputType()
export class manager_withdraw_transactionsUpdateWithoutManager_withdraw_transactions_withdrawInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    payed_date?: Date | string;

    @Field(() => order_transactionsUpdateOneRequiredWithoutManager_withdraw_transactions_transactionNestedInput, {nullable:true})
    manager_withdraw_transactions_transaction?: order_transactionsUpdateOneRequiredWithoutManager_withdraw_transactions_transactionNestedInput;
}
