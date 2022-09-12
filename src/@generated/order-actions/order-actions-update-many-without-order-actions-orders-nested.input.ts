import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsCreateWithoutOrder_actions_ordersInput } from './order-actions-create-without-order-actions-orders.input';
import { Type } from 'class-transformer';
import { order_actionsCreateOrConnectWithoutOrder_actions_ordersInput } from './order-actions-create-or-connect-without-order-actions-orders.input';
import { order_actionsUpsertWithWhereUniqueWithoutOrder_actions_ordersInput } from './order-actions-upsert-with-where-unique-without-order-actions-orders.input';
import { order_actionsCreateManyOrder_actions_ordersInputEnvelope } from './order-actions-create-many-order-actions-orders-input-envelope.input';
import { order_actionsWhereUniqueInput } from './order-actions-where-unique.input';
import { order_actionsUpdateWithWhereUniqueWithoutOrder_actions_ordersInput } from './order-actions-update-with-where-unique-without-order-actions-orders.input';
import { order_actionsUpdateManyWithWhereWithoutOrder_actions_ordersInput } from './order-actions-update-many-with-where-without-order-actions-orders.input';
import { order_actionsScalarWhereInput } from './order-actions-scalar-where.input';

@InputType()
export class order_actionsUpdateManyWithoutOrder_actions_ordersNestedInput {

    @Field(() => [order_actionsCreateWithoutOrder_actions_ordersInput], {nullable:true})
    @Type(() => order_actionsCreateWithoutOrder_actions_ordersInput)
    create?: Array<order_actionsCreateWithoutOrder_actions_ordersInput>;

    @Field(() => [order_actionsCreateOrConnectWithoutOrder_actions_ordersInput], {nullable:true})
    @Type(() => order_actionsCreateOrConnectWithoutOrder_actions_ordersInput)
    connectOrCreate?: Array<order_actionsCreateOrConnectWithoutOrder_actions_ordersInput>;

    @Field(() => [order_actionsUpsertWithWhereUniqueWithoutOrder_actions_ordersInput], {nullable:true})
    @Type(() => order_actionsUpsertWithWhereUniqueWithoutOrder_actions_ordersInput)
    upsert?: Array<order_actionsUpsertWithWhereUniqueWithoutOrder_actions_ordersInput>;

    @Field(() => order_actionsCreateManyOrder_actions_ordersInputEnvelope, {nullable:true})
    @Type(() => order_actionsCreateManyOrder_actions_ordersInputEnvelope)
    createMany?: order_actionsCreateManyOrder_actions_ordersInputEnvelope;

    @Field(() => [order_actionsWhereUniqueInput], {nullable:true})
    @Type(() => order_actionsWhereUniqueInput)
    set?: Array<order_actionsWhereUniqueInput>;

    @Field(() => [order_actionsWhereUniqueInput], {nullable:true})
    @Type(() => order_actionsWhereUniqueInput)
    disconnect?: Array<order_actionsWhereUniqueInput>;

    @Field(() => [order_actionsWhereUniqueInput], {nullable:true})
    @Type(() => order_actionsWhereUniqueInput)
    delete?: Array<order_actionsWhereUniqueInput>;

    @Field(() => [order_actionsWhereUniqueInput], {nullable:true})
    @Type(() => order_actionsWhereUniqueInput)
    connect?: Array<order_actionsWhereUniqueInput>;

    @Field(() => [order_actionsUpdateWithWhereUniqueWithoutOrder_actions_ordersInput], {nullable:true})
    @Type(() => order_actionsUpdateWithWhereUniqueWithoutOrder_actions_ordersInput)
    update?: Array<order_actionsUpdateWithWhereUniqueWithoutOrder_actions_ordersInput>;

    @Field(() => [order_actionsUpdateManyWithWhereWithoutOrder_actions_ordersInput], {nullable:true})
    @Type(() => order_actionsUpdateManyWithWhereWithoutOrder_actions_ordersInput)
    updateMany?: Array<order_actionsUpdateManyWithWhereWithoutOrder_actions_ordersInput>;

    @Field(() => [order_actionsScalarWhereInput], {nullable:true})
    @Type(() => order_actionsScalarWhereInput)
    deleteMany?: Array<order_actionsScalarWhereInput>;
}
