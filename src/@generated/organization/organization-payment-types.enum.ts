import { registerEnumType } from '@nestjs/graphql';

export enum organization_payment_types {
    cash = "cash",
    card = "card",
    client = "client"
}


registerEnumType(organization_payment_types, { name: 'organization_payment_types', description: undefined })
