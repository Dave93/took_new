import { registerEnumType } from '@nestjs/graphql';

export enum Roles_permissionsScalarFieldEnum {
    role_id = "role_id",
    permission_id = "permission_id",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(Roles_permissionsScalarFieldEnum, { name: 'Roles_permissionsScalarFieldEnum', description: undefined })
