import { registerEnumType } from '@nestjs/graphql';

export enum Delivery_pricingScalarFieldEnum {
    id = "id",
    active = "active",
    'default' = "default",
    name = "name",
    drive_type = "drive_type",
    days = "days",
    start_time = "start_time",
    end_time = "end_time",
    min_price = "min_price",
    rules = "rules",
    price_per_km = "price_per_km",
    organization_id = "organization_id",
    terminal_id = "terminal_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(Delivery_pricingScalarFieldEnum, { name: 'Delivery_pricingScalarFieldEnum', description: undefined })
