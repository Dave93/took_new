import { registerEnumType } from '@nestjs/graphql';

export enum TerminalsScalarFieldEnum {
    id = "id",
    name = "name",
    active = "active",
    phone = "phone",
    address = "address",
    latitude = "latitude",
    longitude = "longitude",
    external_id = "external_id",
    organization_id = "organization_id",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(TerminalsScalarFieldEnum, { name: 'TerminalsScalarFieldEnum', description: undefined })
