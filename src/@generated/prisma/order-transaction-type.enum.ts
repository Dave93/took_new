import { registerEnumType } from '@nestjs/graphql';

export enum order_transaction_type {
    cash = "cash",
    card = "card"
}


registerEnumType(order_transaction_type, { name: 'order_transaction_type', description: undefined })
