import { registerEnumType } from '@nestjs/graphql';

export enum order_transaction_payment_type {
    cash = "cash",
    card = "card"
}


registerEnumType(order_transaction_payment_type, { name: 'order_transaction_payment_type', description: undefined })
