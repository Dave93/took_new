import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { order_transaction_status } from '../prisma/order-transaction-status.enum';
import { order_transaction_payment_type } from '../prisma/order-transaction-payment-type.enum';
import { manager_withdraw_transactionsUncheckedCreateNestedManyWithoutManager_withdraw_transactions_transactionInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-unchecked-create-nested-many-without-manager-withdraw-transactions-transaction.input';

@InputType()
export class order_transactionsUncheckedCreateWithoutOrder_transactions_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    order_id?: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:true})
    card_number?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    not_paid_amount?: number;

    @Field(() => order_transaction_status, {nullable:true})
    status?: keyof typeof order_transaction_status;

    @Field(() => order_transaction_payment_type, {nullable:true})
    transaction_payment_type?: keyof typeof order_transaction_payment_type;

    @Field(() => String, {nullable:false})
    transaction_type!: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => String, {nullable:true})
    error_text?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => manager_withdraw_transactionsUncheckedCreateNestedManyWithoutManager_withdraw_transactions_transactionInput, {nullable:true})
    manager_withdraw_transactions_transaction?: manager_withdraw_transactionsUncheckedCreateNestedManyWithoutManager_withdraw_transactions_transactionInput;
}
