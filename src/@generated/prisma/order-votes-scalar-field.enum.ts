import { registerEnumType } from '@nestjs/graphql';

export enum Order_votesScalarFieldEnum {
    id = "id",
    order_id = "order_id",
    terminal_id = "terminal_id",
    courier_id = "courier_id",
    is_voting = "is_voting",
    is_chosen = "is_chosen",
    created_at = "created_at",
    created_by = "created_by"
}


registerEnumType(Order_votesScalarFieldEnum, { name: 'Order_votesScalarFieldEnum', description: undefined })
