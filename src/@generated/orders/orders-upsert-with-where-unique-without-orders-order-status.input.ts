import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrders_order_statusInput } from './orders-update-without-orders-order-status.input';
import { ordersCreateWithoutOrders_order_statusInput } from './orders-create-without-orders-order-status.input';

@InputType()
export class ordersUpsertWithWhereUniqueWithoutOrders_order_statusInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrders_order_statusInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrders_order_statusInput)
    update!: ordersUpdateWithoutOrders_order_statusInput;

    @Field(() => ordersCreateWithoutOrders_order_statusInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrders_order_statusInput)
    create!: ordersCreateWithoutOrders_order_statusInput;
}
