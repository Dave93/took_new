import { registerEnumType } from '@nestjs/graphql';

export enum Customers_commentsScalarFieldEnum {
    id = "id",
    customer_id = "customer_id",
    comment = "comment",
    created_at = "created_at",
    created_by = "created_by"
}


registerEnumType(Customers_commentsScalarFieldEnum, { name: 'Customers_commentsScalarFieldEnum', description: undefined })
