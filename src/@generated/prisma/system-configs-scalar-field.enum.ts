import { registerEnumType } from '@nestjs/graphql';

export enum System_configsScalarFieldEnum {
    id = "id",
    name = "name",
    value = "value",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(System_configsScalarFieldEnum, { name: 'System_configsScalarFieldEnum', description: undefined })
