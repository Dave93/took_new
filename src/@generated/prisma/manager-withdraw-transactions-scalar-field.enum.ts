import { registerEnumType } from '@nestjs/graphql';

export enum Manager_withdraw_transactionsScalarFieldEnum {
    id = "id",
    withdraw_id = "withdraw_id",
    transaction_id = "transaction_id",
    amount = "amount",
    created_at = "created_at",
    payed_date = "payed_date"
}


registerEnumType(Manager_withdraw_transactionsScalarFieldEnum, { name: 'Manager_withdraw_transactionsScalarFieldEnum', description: undefined })
