import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { order_transaction_status } from '../prisma/order-transaction-status.enum';
import { order_transaction_payment_type } from '../prisma/order-transaction-payment-type.enum';
import { manager_withdraw_transactionsUncheckedUpdateManyWithoutManager_withdraw_transactions_transactionNestedInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-unchecked-update-many-without-manager-withdraw-transactions-transaction-nested.input';

@InputType()
export class order_transactionsUncheckedUpdateWithoutOrder_transactions_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    order_id?: string;

    @Field(() => String, {nullable:true})
    terminal_id?: string;

    @Field(() => String, {nullable:true})
    courier_id?: string;

    @Field(() => String, {nullable:true})
    organization_id?: string;

    @Field(() => String, {nullable:true})
    card_number?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    balance_before?: number;

    @Field(() => Float, {nullable:true})
    balance_after?: number;

    @Field(() => Float, {nullable:true})
    not_paid_amount?: number;

    @Field(() => order_transaction_status, {nullable:true})
    status?: keyof typeof order_transaction_status;

    @Field(() => order_transaction_payment_type, {nullable:true})
    transaction_payment_type?: keyof typeof order_transaction_payment_type;

    @Field(() => String, {nullable:true})
    transaction_type?: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => String, {nullable:true})
    error_text?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => manager_withdraw_transactionsUncheckedUpdateManyWithoutManager_withdraw_transactions_transactionNestedInput, {nullable:true})
    manager_withdraw_transactions_transaction?: manager_withdraw_transactionsUncheckedUpdateManyWithoutManager_withdraw_transactions_transactionNestedInput;
}
