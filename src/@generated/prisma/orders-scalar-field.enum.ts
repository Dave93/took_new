import { registerEnumType } from '@nestjs/graphql';

export enum OrdersScalarFieldEnum {
    id = "id",
    organization_id = "organization_id",
    customer_id = "customer_id",
    courier_id = "courier_id",
    terminal_id = "terminal_id",
    order_status_id = "order_status_id",
    delivery_type = "delivery_type",
    from_lat = "from_lat",
    from_lon = "from_lon",
    to_lat = "to_lat",
    to_lon = "to_lon",
    pre_distance = "pre_distance",
    pre_duration = "pre_duration",
    order_number = "order_number",
    distance = "distance",
    duration = "duration",
    order_price = "order_price",
    delivery_price = "delivery_price",
    delivery_address = "delivery_address",
    finished_date = "finished_date",
    delivery_comment = "delivery_comment",
    payment_type = "payment_type",
    cancel_reason = "cancel_reason",
    sms_sent_to_customer = "sms_sent_to_customer",
    score = "score",
    order_items = "order_items",
    delivery_pricing_id = "delivery_pricing_id",
    cancel_voice_id = "cancel_voice_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(OrdersScalarFieldEnum, { name: 'OrdersScalarFieldEnum', description: undefined })
