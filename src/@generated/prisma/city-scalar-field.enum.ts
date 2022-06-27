import { registerEnumType } from '@nestjs/graphql';

export enum CityScalarFieldEnum {
    id = "id",
    name = "name",
    parent_id = "parent_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(CityScalarFieldEnum, { name: 'CityScalarFieldEnum', description: undefined })
