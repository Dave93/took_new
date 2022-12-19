import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { manager_withdrawCreateNestedOneWithoutManager_withdraw_transactions_withdrawInput } from '../manager-withdraw/manager-withdraw-create-nested-one-without-manager-withdraw-transactions-withdraw.input';

@InputType()
export class manager_withdraw_transactionsCreateWithoutManager_withdraw_transactions_transactionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    payed_date?: Date | string;

    @Field(() => manager_withdrawCreateNestedOneWithoutManager_withdraw_transactions_withdrawInput, {nullable:false})
    manager_withdraw_transactions_withdraw!: manager_withdrawCreateNestedOneWithoutManager_withdraw_transactions_withdrawInput;
}
