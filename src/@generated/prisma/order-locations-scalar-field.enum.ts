import { registerEnumType } from '@nestjs/graphql';

export enum Order_locationsScalarFieldEnum {
    id = "id",
    order_id = "order_id",
    terminal_id = "terminal_id",
    courier_id = "courier_id",
    lat = "lat",
    lon = "lon",
    created_at = "created_at",
    created_by = "created_by"
}


registerEnumType(Order_locationsScalarFieldEnum, { name: 'Order_locationsScalarFieldEnum', description: undefined })
