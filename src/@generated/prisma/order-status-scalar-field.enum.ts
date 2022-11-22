import { registerEnumType } from '@nestjs/graphql';

export enum Order_statusScalarFieldEnum {
    id = "id",
    name = "name",
    sort = "sort",
    organization_id = "organization_id",
    color = "color",
    finish = "finish",
    cancel = "cancel",
    waiting = "waiting",
    need_location = "need_location",
    on_way = "on_way",
    in_terminal = "in_terminal"
}


registerEnumType(Order_statusScalarFieldEnum, { name: 'Order_statusScalarFieldEnum', description: undefined })
