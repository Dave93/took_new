import { registerEnumType } from '@nestjs/graphql';

export enum Order_actionsScalarFieldEnum {
    id = "id",
    order_id = "order_id",
    duration = "duration",
    action = "action",
    action_text = "action_text",
    terminal_id = "terminal_id",
    created_at = "created_at",
    created_by = "created_by"
}


registerEnumType(Order_actionsScalarFieldEnum, { name: 'Order_actionsScalarFieldEnum', description: undefined })
