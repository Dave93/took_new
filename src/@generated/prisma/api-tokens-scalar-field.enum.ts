import { registerEnumType } from '@nestjs/graphql';

export enum Api_tokensScalarFieldEnum {
    id = "id",
    active = "active",
    token = "token",
    organization_id = "organization_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(Api_tokensScalarFieldEnum, { name: 'Api_tokensScalarFieldEnum', description: undefined })
