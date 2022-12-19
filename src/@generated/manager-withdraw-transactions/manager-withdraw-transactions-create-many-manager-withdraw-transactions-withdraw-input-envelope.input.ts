import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdraw_transactionsCreateManyManager_withdraw_transactions_withdrawInput } from './manager-withdraw-transactions-create-many-manager-withdraw-transactions-withdraw.input';
import { Type } from 'class-transformer';

@InputType()
export class manager_withdraw_transactionsCreateManyManager_withdraw_transactions_withdrawInputEnvelope {

    @Field(() => [manager_withdraw_transactionsCreateManyManager_withdraw_transactions_withdrawInput], {nullable:false})
    @Type(() => manager_withdraw_transactionsCreateManyManager_withdraw_transactions_withdrawInput)
    data!: Array<manager_withdraw_transactionsCreateManyManager_withdraw_transactions_withdrawInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
