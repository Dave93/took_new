import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { order_transactionsCreateNestedOneWithoutManager_withdraw_transactions_transactionInput } from '../order-transactions/order-transactions-create-nested-one-without-manager-withdraw-transactions-transaction.input';

@InputType()
export class manager_withdraw_transactionsCreateWithoutManager_withdraw_transactions_withdrawInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    payed_date?: Date | string;

    @Field(() => order_transactionsCreateNestedOneWithoutManager_withdraw_transactions_transactionInput, {nullable:false})
    manager_withdraw_transactions_transaction!: order_transactionsCreateNestedOneWithoutManager_withdraw_transactions_transactionInput;
}
