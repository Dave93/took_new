import { registerEnumType } from '@nestjs/graphql';

export enum Order_bonus_pricingScalarFieldEnum {
    id = "id",
    active = "active",
    name = "name",
    start_time = "start_time",
    end_time = "end_time",
    rules = "rules",
    min_distance_km = "min_distance_km",
    organization_id = "organization_id",
    terminal_id = "terminal_id",
    courier_id = "courier_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(Order_bonus_pricingScalarFieldEnum, { name: 'Order_bonus_pricingScalarFieldEnum', description: undefined })
