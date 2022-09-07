import { registerEnumType } from '@nestjs/graphql';

export enum CustomersScalarFieldEnum {
    id = "id",
    name = "name",
    phone = "phone"
}


registerEnumType(CustomersScalarFieldEnum, { name: 'CustomersScalarFieldEnum', description: undefined })
