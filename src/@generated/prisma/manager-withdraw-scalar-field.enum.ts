import { registerEnumType } from '@nestjs/graphql';

export enum Manager_withdrawScalarFieldEnum {
    id = "id",
    manager_id = "manager_id",
    courier_id = "courier_id",
    terminal_id = "terminal_id",
    organization_id = "organization_id",
    amount = "amount",
    amount_before = "amount_before",
    amount_after = "amount_after",
    created_at = "created_at",
    payed_date = "payed_date",
    created_by = "created_by"
}


registerEnumType(Manager_withdrawScalarFieldEnum, { name: 'Manager_withdrawScalarFieldEnum', description: undefined })
