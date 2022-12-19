import { registerEnumType } from '@nestjs/graphql';

export enum UsersScalarFieldEnum {
    id = "id",
    phone = "phone",
    first_name = "first_name",
    last_name = "last_name",
    password = "password",
    is_super_user = "is_super_user",
    status = "status",
    drive_type = "drive_type",
    card_name = "card_name",
    card_number = "card_number",
    birth_date = "birth_date",
    car_model = "car_model",
    car_number = "car_number",
    is_online = "is_online",
    latitude = "latitude",
    longitude = "longitude",
    fcm_token = "fcm_token",
    wallet_balance = "wallet_balance",
    max_active_order_count = "max_active_order_count",
    doc_files = "doc_files",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(UsersScalarFieldEnum, { name: 'UsersScalarFieldEnum', description: undefined })
