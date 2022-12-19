import { registerEnumType } from '@nestjs/graphql';

export enum Courier_terminal_balanceScalarFieldEnum {
    id = "id",
    courier_id = "courier_id",
    terminal_id = "terminal_id",
    organization_id = "organization_id",
    balance = "balance",
    created_at = "created_at",
    created_by = "created_by"
}


registerEnumType(Courier_terminal_balanceScalarFieldEnum, { name: 'Courier_terminal_balanceScalarFieldEnum', description: undefined })
