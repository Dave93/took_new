import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { order_transaction_status } from '../prisma/order-transaction-status.enum';
import { order_transaction_payment_type } from '../prisma/order-transaction-payment-type.enum';
import { usersCreateNestedOneWithoutOrder_transactions_created_byTousersInput } from '../users/users-create-nested-one-without-order-transactions-created-by-tousers.input';
import { ordersCreateNestedOneWithoutOrder_transactions_ordersInput } from '../orders/orders-create-nested-one-without-order-transactions-orders.input';
import { terminalsCreateNestedOneWithoutOrder_transactions_terminalsInput } from '../terminals/terminals-create-nested-one-without-order-transactions-terminals.input';
import { usersCreateNestedOneWithoutOrder_transactions_couriersInput } from '../users/users-create-nested-one-without-order-transactions-couriers.input';
import { manager_withdraw_transactionsCreateNestedManyWithoutManager_withdraw_transactions_transactionInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-create-nested-many-without-manager-withdraw-transactions-transaction.input';

@InputType()
export class order_transactionsCreateWithoutOrder_transactions_organizationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => String, {nullable:false})
    transaction_type!: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => String, {nullable:true})
    error_text?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutOrder_transactions_created_byTousersInput, {nullable:true})
    order_transactions_created_byTousers?: usersCreateNestedOneWithoutOrder_transactions_created_byTousersInput;

    @Field(() => ordersCreateNestedOneWithoutOrder_transactions_ordersInput, {nullable:true})
    order_transactions_orders?: ordersCreateNestedOneWithoutOrder_transactions_ordersInput;

    @Field(() => terminalsCreateNestedOneWithoutOrder_transactions_terminalsInput, {nullable:false})
    order_transactions_terminals!: terminalsCreateNestedOneWithoutOrder_transactions_terminalsInput;

    @Field(() => usersCreateNestedOneWithoutOrder_transactions_couriersInput, {nullable:false})
    order_transactions_couriers!: usersCreateNestedOneWithoutOrder_transactions_couriersInput;

    @Field(() => manager_withdraw_transactionsCreateNestedManyWithoutManager_withdraw_transactions_transactionInput, {nullable:true})
    manager_withdraw_transactions_transaction?: manager_withdraw_transactionsCreateNestedManyWithoutManager_withdraw_transactions_transactionInput;
}
