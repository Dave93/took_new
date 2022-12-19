import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { manager_withdraw_transactionsUncheckedUpdateManyWithoutManager_withdraw_transactions_withdrawNestedInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-unchecked-update-many-without-manager-withdraw-transactions-withdraw-nested.input';

@InputType()
export class manager_withdrawUncheckedUpdateWithoutManager_withdraw_terminalsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    manager_id?: string;

    @Field(() => String, {nullable:true})
    courier_id?: string;

    @Field(() => String, {nullable:true})
    organization_id?: string;

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

    @Field(() => manager_withdraw_transactionsUncheckedUpdateManyWithoutManager_withdraw_transactions_withdrawNestedInput, {nullable:true})
    manager_withdraw_transactions_withdraw?: manager_withdraw_transactionsUncheckedUpdateManyWithoutManager_withdraw_transactions_withdrawNestedInput;
}
