import { registerEnumType } from '@nestjs/graphql';

export enum PermissionsScalarFieldEnum {
    id = "id",
    slug = "slug",
    description = "description",
    active = "active",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(PermissionsScalarFieldEnum, { name: 'PermissionsScalarFieldEnum', description: undefined })
