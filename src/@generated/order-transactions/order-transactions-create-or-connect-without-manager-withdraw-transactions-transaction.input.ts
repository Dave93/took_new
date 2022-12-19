import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateWithoutManager_withdraw_transactions_transactionInput } from './order-transactions-create-without-manager-withdraw-transactions-transaction.input';

@InputType()
export class order_transactionsCreateOrConnectWithoutManager_withdraw_transactions_transactionInput {

    @Field(() => order_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => order_transactionsWhereUniqueInput)
    where!: order_transactionsWhereUniqueInput;

    @Field(() => order_transactionsCreateWithoutManager_withdraw_transactions_transactionInput, {nullable:false})
    @Type(() => order_transactionsCreateWithoutManager_withdraw_transactions_transactionInput)
    create!: order_transactionsCreateWithoutManager_withdraw_transactions_transactionInput;
}
