import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_order_statusInput } from './orders-create-without-orders-order-status.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_order_statusInput } from './orders-create-or-connect-without-orders-order-status.input';
import { ordersCreateManyOrders_order_statusInputEnvelope } from './orders-create-many-orders-order-status-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersUncheckedCreateNestedManyWithoutOrders_order_statusInput {

    @Field(() => [ordersCreateWithoutOrders_order_statusInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_order_statusInput)
    create?: Array<ordersCreateWithoutOrders_order_statusInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_order_statusInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_order_statusInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_order_statusInput>;

    @Field(() => ordersCreateManyOrders_order_statusInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_order_statusInputEnvelope)
    createMany?: ordersCreateManyOrders_order_statusInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<ordersWhereUniqueInput>;
}
