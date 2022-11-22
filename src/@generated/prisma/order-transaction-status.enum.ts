import { registerEnumType } from '@nestjs/graphql';

export enum order_transaction_status {
    pending = "pending",
    success = "success",
    failed = "failed"
}


registerEnumType(order_transaction_status, { name: 'order_transaction_status', description: undefined })
