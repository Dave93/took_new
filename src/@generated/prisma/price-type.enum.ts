import { registerEnumType } from '@nestjs/graphql';

export enum price_type {
    fixed = "fixed",
    perMonth = "perMonth"
}


registerEnumType(price_type, { name: 'price_type', description: undefined })
