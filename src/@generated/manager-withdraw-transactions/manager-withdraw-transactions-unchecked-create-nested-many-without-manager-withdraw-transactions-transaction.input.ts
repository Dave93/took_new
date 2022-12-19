import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdraw_transactionsCreateWithoutManager_withdraw_transactions_transactionInput } from './manager-withdraw-transactions-create-without-manager-withdraw-transactions-transaction.input';
import { Type } from 'class-transformer';
import { manager_withdraw_transactionsCreateOrConnectWithoutManager_withdraw_transactions_transactionInput } from './manager-withdraw-transactions-create-or-connect-without-manager-withdraw-transactions-transaction.input';
import { manager_withdraw_transactionsCreateManyManager_withdraw_transactions_transactionInputEnvelope } from './manager-withdraw-transactions-create-many-manager-withdraw-transactions-transaction-input-envelope.input';
import { manager_withdraw_transactionsWhereUniqueInput } from './manager-withdraw-transactions-where-unique.input';

@InputType()
export class manager_withdraw_transactionsUncheckedCreateNestedManyWithoutManager_withdraw_transactions_transactionInput {

    @Field(() => [manager_withdraw_transactionsCreateWithoutManager_withdraw_transactions_transactionInput], {nullable:true})
    @Type(() => manager_withdraw_transactionsCreateWithoutManager_withdraw_transactions_transactionInput)
    create?: Array<manager_withdraw_transactionsCreateWithoutManager_withdraw_transactions_transactionInput>;

    @Field(() => [manager_withdraw_transactionsCreateOrConnectWithoutManager_withdraw_transactions_transactionInput], {nullable:true})
    @Type(() => manager_withdraw_transactionsCreateOrConnectWithoutManager_withdraw_transactions_transactionInput)
    connectOrCreate?: Array<manager_withdraw_transactionsCreateOrConnectWithoutManager_withdraw_transactions_transactionInput>;

    @Field(() => manager_withdraw_transactionsCreateManyManager_withdraw_transactions_transactionInputEnvelope, {nullable:true})
    @Type(() => manager_withdraw_transactionsCreateManyManager_withdraw_transactions_transactionInputEnvelope)
    createMany?: manager_withdraw_transactionsCreateManyManager_withdraw_transactions_transactionInputEnvelope;

    @Field(() => [manager_withdraw_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => manager_withdraw_transactionsWhereUniqueInput)
    connect?: Array<manager_withdraw_transactionsWhereUniqueInput>;
}
