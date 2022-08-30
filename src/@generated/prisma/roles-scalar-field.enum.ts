import { registerEnumType } from '@nestjs/graphql';

export enum RolesScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    active = "active",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(RolesScalarFieldEnum, { name: 'RolesScalarFieldEnum', description: undefined })
