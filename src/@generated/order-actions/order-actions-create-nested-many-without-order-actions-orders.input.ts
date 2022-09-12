import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsCreateWithoutOrder_actions_ordersInput } from './order-actions-create-without-order-actions-orders.input';
import { Type } from 'class-transformer';
import { order_actionsCreateOrConnectWithoutOrder_actions_ordersInput } from './order-actions-create-or-connect-without-order-actions-orders.input';
import { order_actionsCreateManyOrder_actions_ordersInputEnvelope } from './order-actions-create-many-order-actions-orders-input-envelope.input';
import { order_actionsWhereUniqueInput } from './order-actions-where-unique.input';

@InputType()
export class order_actionsCreateNestedManyWithoutOrder_actions_ordersInput {

    @Field(() => [order_actionsCreateWithoutOrder_actions_ordersInput], {nullable:true})
    @Type(() => order_actionsCreateWithoutOrder_actions_ordersInput)
    create?: Array<order_actionsCreateWithoutOrder_actions_ordersInput>;

    @Field(() => [order_actionsCreateOrConnectWithoutOrder_actions_ordersInput], {nullable:true})
    @Type(() => order_actionsCreateOrConnectWithoutOrder_actions_ordersInput)
    connectOrCreate?: Array<order_actionsCreateOrConnectWithoutOrder_actions_ordersInput>;

    @Field(() => order_actionsCreateManyOrder_actions_ordersInputEnvelope, {nullable:true})
    @Type(() => order_actionsCreateManyOrder_actions_ordersInputEnvelope)
    createMany?: order_actionsCreateManyOrder_actions_ordersInputEnvelope;

    @Field(() => [order_actionsWhereUniqueInput], {nullable:true})
    @Type(() => order_actionsWhereUniqueInput)
    connect?: Array<order_actionsWhereUniqueInput>;
}
