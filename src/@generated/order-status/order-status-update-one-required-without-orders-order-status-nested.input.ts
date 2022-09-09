import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_statusCreateWithoutOrders_order_statusInput } from './order-status-create-without-orders-order-status.input';
import { Type } from 'class-transformer';
import { order_statusCreateOrConnectWithoutOrders_order_statusInput } from './order-status-create-or-connect-without-orders-order-status.input';
import { order_statusUpsertWithoutOrders_order_statusInput } from './order-status-upsert-without-orders-order-status.input';
import { order_statusWhereUniqueInput } from './order-status-where-unique.input';
import { order_statusUpdateWithoutOrders_order_statusInput } from './order-status-update-without-orders-order-status.input';

@InputType()
export class order_statusUpdateOneRequiredWithoutOrders_order_statusNestedInput {

    @Field(() => order_statusCreateWithoutOrders_order_statusInput, {nullable:true})
    @Type(() => order_statusCreateWithoutOrders_order_statusInput)
    create?: order_statusCreateWithoutOrders_order_statusInput;

    @Field(() => order_statusCreateOrConnectWithoutOrders_order_statusInput, {nullable:true})
    @Type(() => order_statusCreateOrConnectWithoutOrders_order_statusInput)
    connectOrCreate?: order_statusCreateOrConnectWithoutOrders_order_statusInput;

    @Field(() => order_statusUpsertWithoutOrders_order_statusInput, {nullable:true})
    @Type(() => order_statusUpsertWithoutOrders_order_statusInput)
    upsert?: order_statusUpsertWithoutOrders_order_statusInput;

    @Field(() => order_statusWhereUniqueInput, {nullable:true})
    @Type(() => order_statusWhereUniqueInput)
    connect?: order_statusWhereUniqueInput;

    @Field(() => order_statusUpdateWithoutOrders_order_statusInput, {nullable:true})
    @Type(() => order_statusUpdateWithoutOrders_order_statusInput)
    update?: order_statusUpdateWithoutOrders_order_statusInput;
}
