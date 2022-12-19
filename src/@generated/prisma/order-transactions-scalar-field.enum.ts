import { registerEnumType } from '@nestjs/graphql';

export enum Order_transactionsScalarFieldEnum {
    id = "id",
    order_id = "order_id",
    terminal_id = "terminal_id",
    courier_id = "courier_id",
    organization_id = "organization_id",
    card_number = "card_number",
    amount = "amount",
    not_paid_amount = "not_paid_amount",
    status = "status",
    transaction_payment_type = "transaction_payment_type",
    transaction_type = "transaction_type",
    comment = "comment",
    error_text = "error_text",
    created_at = "created_at",
    created_by = "created_by"
}


registerEnumType(Order_transactionsScalarFieldEnum, { name: 'Order_transactionsScalarFieldEnum', description: undefined })
