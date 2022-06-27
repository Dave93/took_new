import { registerEnumType } from '@nestjs/graphql';

export enum Users_rolesScalarFieldEnum {
    user_id = "user_id",
    role_id = "role_id",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(Users_rolesScalarFieldEnum, { name: 'Users_rolesScalarFieldEnum', description: undefined })
