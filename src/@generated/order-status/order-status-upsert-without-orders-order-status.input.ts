import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_statusUpdateWithoutOrders_order_statusInput } from './order-status-update-without-orders-order-status.input';
import { Type } from 'class-transformer';
import { order_statusCreateWithoutOrders_order_statusInput } from './order-status-create-without-orders-order-status.input';

@InputType()
export class order_statusUpsertWithoutOrders_order_statusInput {

    @Field(() => order_statusUpdateWithoutOrders_order_statusInput, {nullable:false})
    @Type(() => order_statusUpdateWithoutOrders_order_statusInput)
    update!: order_statusUpdateWithoutOrders_order_statusInput;

    @Field(() => order_statusCreateWithoutOrders_order_statusInput, {nullable:false})
    @Type(() => order_statusCreateWithoutOrders_order_statusInput)
    create!: order_statusCreateWithoutOrders_order_statusInput;
}
