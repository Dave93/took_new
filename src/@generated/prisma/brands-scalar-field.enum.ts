import { registerEnumType } from '@nestjs/graphql';

export enum BrandsScalarFieldEnum {
    id = "id",
    name = "name",
    api_url = "api_url",
    logo_path = "logo_path",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(BrandsScalarFieldEnum, { name: 'BrandsScalarFieldEnum', description: undefined })
