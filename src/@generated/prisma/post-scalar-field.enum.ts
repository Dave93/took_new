import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    price = "price",
    price_type = "price_type",
    status = "status",
    sale_type = "sale_type",
    latitude = "latitude",
    longitude = "longitude",
    address = "address",
    comments_count = "comments_count",
    city_id = "city_id"
}


registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined })
