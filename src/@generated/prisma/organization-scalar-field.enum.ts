import { registerEnumType } from '@nestjs/graphql';

export enum OrganizationScalarFieldEnum {
    id = "id",
    name = "name",
    external_id = "external_id",
    active = "active",
    system_type = "system_type",
    phone = "phone",
    iiko_login = "iiko_login",
    webhook = "webhook",
    group_id = "group_id",
    apelsin_login = "apelsin_login",
    apelsin_password = "apelsin_password",
    sender_name = "sender_name",
    sender_number = "sender_number",
    description = "description",
    max_distance = "max_distance",
    max_active_order_count = "max_active_order_count",
    max_order_close_distance = "max_order_close_distance",
    payment_type = "payment_type",
    support_chat_url = "support_chat_url",
    icon_url = "icon_url",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(OrganizationScalarFieldEnum, { name: 'OrganizationScalarFieldEnum', description: undefined })
