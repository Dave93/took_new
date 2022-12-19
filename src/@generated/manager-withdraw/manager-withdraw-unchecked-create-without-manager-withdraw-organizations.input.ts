import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { manager_withdraw_transactionsUncheckedCreateNestedManyWithoutManager_withdraw_transactions_withdrawInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-unchecked-create-nested-many-without-manager-withdraw-transactions-withdraw.input';

@InputType()
export class manager_withdrawUncheckedCreateWithoutManager_withdraw_organizationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    manager_id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    amount_before?: number;

    @Field(() => Float, {nullable:true})
    amount_after?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    payed_date?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => manager_withdraw_transactionsUncheckedCreateNestedManyWithoutManager_withdraw_transactions_withdrawInput, {nullable:true})
    manager_withdraw_transactions_withdraw?: manager_withdraw_transactionsUncheckedCreateNestedManyWithoutManager_withdraw_transactions_withdrawInput;
}
