import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { order_transaction_status } from '../prisma/order-transaction-status.enum';
import { order_transaction_payment_type } from '../prisma/order-transaction-payment-type.enum';
import { ordersUpdateOneWithoutOrder_transactions_ordersNestedInput } from '../orders/orders-update-one-without-order-transactions-orders-nested.input';
import { terminalsUpdateOneRequiredWithoutOrder_transactions_terminalsNestedInput } from '../terminals/terminals-update-one-required-without-order-transactions-terminals-nested.input';
import { usersUpdateOneRequiredWithoutOrder_transactions_couriersNestedInput } from '../users/users-update-one-required-without-order-transactions-couriers-nested.input';
import { organizationUpdateOneRequiredWithoutOrder_transactions_organizationsNestedInput } from '../organization/organization-update-one-required-without-order-transactions-organizations-nested.input';
import { manager_withdraw_transactionsUpdateManyWithoutManager_withdraw_transactions_transactionNestedInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-update-many-without-manager-withdraw-transactions-transaction-nested.input';

@InputType()
export class order_transactionsUpdateWithoutOrder_transactions_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => String, {nullable:true})
    transaction_type?: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => String, {nullable:true})
    error_text?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => ordersUpdateOneWithoutOrder_transactions_ordersNestedInput, {nullable:true})
    order_transactions_orders?: ordersUpdateOneWithoutOrder_transactions_ordersNestedInput;

    @Field(() => terminalsUpdateOneRequiredWithoutOrder_transactions_terminalsNestedInput, {nullable:true})
    order_transactions_terminals?: terminalsUpdateOneRequiredWithoutOrder_transactions_terminalsNestedInput;

    @Field(() => usersUpdateOneRequiredWithoutOrder_transactions_couriersNestedInput, {nullable:true})
    order_transactions_couriers?: usersUpdateOneRequiredWithoutOrder_transactions_couriersNestedInput;

    @Field(() => organizationUpdateOneRequiredWithoutOrder_transactions_organizationsNestedInput, {nullable:true})
    order_transactions_organizations?: organizationUpdateOneRequiredWithoutOrder_transactions_organizationsNestedInput;

    @Field(() => manager_withdraw_transactionsUpdateManyWithoutManager_withdraw_transactions_transactionNestedInput, {nullable:true})
    manager_withdraw_transactions_transaction?: manager_withdraw_transactionsUpdateManyWithoutManager_withdraw_transactions_transactionNestedInput;
}
