import { registerEnumType } from '@nestjs/graphql';

export enum Users_permissionsScalarFieldEnum {
    user_id = "user_id",
    permission_id = "permission_id",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(Users_permissionsScalarFieldEnum, { name: 'Users_permissionsScalarFieldEnum', description: undefined })
