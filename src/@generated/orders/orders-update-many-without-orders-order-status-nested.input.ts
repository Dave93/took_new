import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_order_statusInput } from './orders-create-without-orders-order-status.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_order_statusInput } from './orders-create-or-connect-without-orders-order-status.input';
import { ordersUpsertWithWhereUniqueWithoutOrders_order_statusInput } from './orders-upsert-with-where-unique-without-orders-order-status.input';
import { ordersCreateManyOrders_order_statusInputEnvelope } from './orders-create-many-orders-order-status-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { ordersUpdateWithWhereUniqueWithoutOrders_order_statusInput } from './orders-update-with-where-unique-without-orders-order-status.input';
import { ordersUpdateManyWithWhereWithoutOrders_order_statusInput } from './orders-update-many-with-where-without-orders-order-status.input';
import { ordersScalarWhereInput } from './orders-scalar-where.input';

@InputType()
export class ordersUpdateManyWithoutOrders_order_statusNestedInput {

    @Field(() => [ordersCreateWithoutOrders_order_statusInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_order_statusInput)
    create?: Array<ordersCreateWithoutOrders_order_statusInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_order_statusInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_order_statusInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_order_statusInput>;

    @Field(() => [ordersUpsertWithWhereUniqueWithoutOrders_order_statusInput], {nullable:true})
    @Type(() => ordersUpsertWithWhereUniqueWithoutOrders_order_statusInput)
    upsert?: Array<ordersUpsertWithWhereUniqueWithoutOrders_order_statusInput>;

    @Field(() => ordersCreateManyOrders_order_statusInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_order_statusInputEnvelope)
    createMany?: ordersCreateManyOrders_order_statusInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    set?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    disconnect?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    delete?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersUpdateWithWhereUniqueWithoutOrders_order_statusInput], {nullable:true})
    @Type(() => ordersUpdateWithWhereUniqueWithoutOrders_order_statusInput)
    update?: Array<ordersUpdateWithWhereUniqueWithoutOrders_order_statusInput>;

    @Field(() => [ordersUpdateManyWithWhereWithoutOrders_order_statusInput], {nullable:true})
    @Type(() => ordersUpdateManyWithWhereWithoutOrders_order_statusInput)
    updateMany?: Array<ordersUpdateManyWithWhereWithoutOrders_order_statusInput>;

    @Field(() => [ordersScalarWhereInput], {nullable:true})
    @Type(() => ordersScalarWhereInput)
    deleteMany?: Array<ordersScalarWhereInput>;
}
