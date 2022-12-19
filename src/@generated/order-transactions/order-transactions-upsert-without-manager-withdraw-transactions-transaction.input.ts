import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsUpdateWithoutManager_withdraw_transactions_transactionInput } from './order-transactions-update-without-manager-withdraw-transactions-transaction.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateWithoutManager_withdraw_transactions_transactionInput } from './order-transactions-create-without-manager-withdraw-transactions-transaction.input';

@InputType()
export class order_transactionsUpsertWithoutManager_withdraw_transactions_transactionInput {

    @Field(() => order_transactionsUpdateWithoutManager_withdraw_transactions_transactionInput, {nullable:false})
    @Type(() => order_transactionsUpdateWithoutManager_withdraw_transactions_transactionInput)
    update!: order_transactionsUpdateWithoutManager_withdraw_transactions_transactionInput;

    @Field(() => order_transactionsCreateWithoutManager_withdraw_transactions_transactionInput, {nullable:false})
    @Type(() => order_transactionsCreateWithoutManager_withdraw_transactions_transactionInput)
    create!: order_transactionsCreateWithoutManager_withdraw_transactions_transactionInput;
}
