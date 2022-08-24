import { registerEnumType } from '@nestjs/graphql';

export enum organization_system_type {
    iiko = "iiko",
    r_keeper = "r_keeper",
    jowi = "jowi"
}


registerEnumType(organization_system_type, { name: 'organization_system_type', description: undefined })
