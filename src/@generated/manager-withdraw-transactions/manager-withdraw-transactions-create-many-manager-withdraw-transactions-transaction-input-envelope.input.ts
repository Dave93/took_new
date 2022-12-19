import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdraw_transactionsCreateManyManager_withdraw_transactions_transactionInput } from './manager-withdraw-transactions-create-many-manager-withdraw-transactions-transaction.input';
import { Type } from 'class-transformer';

@InputType()
export class manager_withdraw_transactionsCreateManyManager_withdraw_transactions_transactionInputEnvelope {

    @Field(() => [manager_withdraw_transactionsCreateManyManager_withdraw_transactions_transactionInput], {nullable:false})
    @Type(() => manager_withdraw_transactionsCreateManyManager_withdraw_transactions_transactionInput)
    data!: Array<manager_withdraw_transactionsCreateManyManager_withdraw_transactions_transactionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
