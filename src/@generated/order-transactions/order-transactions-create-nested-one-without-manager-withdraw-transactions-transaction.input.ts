import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsCreateWithoutManager_withdraw_transactions_transactionInput } from './order-transactions-create-without-manager-withdraw-transactions-transaction.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateOrConnectWithoutManager_withdraw_transactions_transactionInput } from './order-transactions-create-or-connect-without-manager-withdraw-transactions-transaction.input';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';

@InputType()
export class order_transactionsCreateNestedOneWithoutManager_withdraw_transactions_transactionInput {

    @Field(() => order_transactionsCreateWithoutManager_withdraw_transactions_transactionInput, {nullable:true})
    @Type(() => order_transactionsCreateWithoutManager_withdraw_transactions_transactionInput)
    create?: order_transactionsCreateWithoutManager_withdraw_transactions_transactionInput;

    @Field(() => order_transactionsCreateOrConnectWithoutManager_withdraw_transactions_transactionInput, {nullable:true})
    @Type(() => order_transactionsCreateOrConnectWithoutManager_withdraw_transactions_transactionInput)
    connectOrCreate?: order_transactionsCreateOrConnectWithoutManager_withdraw_transactions_transactionInput;

    @Field(() => order_transactionsWhereUniqueInput, {nullable:true})
    @Type(() => order_transactionsWhereUniqueInput)
    connect?: order_transactionsWhereUniqueInput;
}
