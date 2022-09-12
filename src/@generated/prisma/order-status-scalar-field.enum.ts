import { registerEnumType } from '@nestjs/graphql';

export enum Order_statusScalarFieldEnum {
    id = "id",
    name = "name",
    sort = "sort",
    organization_id = "organization_id",
    color = "color",
    finish = "finish",
    cancel = "cancel",
    waiting = "waiting"
}


registerEnumType(Order_statusScalarFieldEnum, { name: 'Order_statusScalarFieldEnum', description: undefined })