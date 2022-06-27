import { registerEnumType } from '@nestjs/graphql';

export enum UsersScalarFieldEnum {
    id = "id",
    phone = "phone",
    first_name = "first_name",
    last_name = "last_name",
    password = "password",
    is_super_user = "is_super_user",
    status = "status",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(UsersScalarFieldEnum, { name: 'UsersScalarFieldEnum', description: undefined })
