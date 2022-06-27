import { registerEnumType } from '@nestjs/graphql';

export enum sale_type {
    buy = "buy",
    rent = "rent",
    new_building = "new_building"
}


registerEnumType(sale_type, { name: 'sale_type', description: undefined })
