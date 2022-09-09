import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrders_order_statusInput } from './orders-create-without-orders-order-status.input';

@InputType()
export class ordersCreateOrConnectWithoutOrders_order_statusInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersCreateWithoutOrders_order_statusInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrders_order_statusInput)
    create!: ordersCreateWithoutOrders_order_statusInput;
}
