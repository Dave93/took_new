import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrders_order_statusInput } from './orders-update-without-orders-order-status.input';

@InputType()
export class ordersUpdateWithWhereUniqueWithoutOrders_order_statusInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrders_order_statusInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrders_order_statusInput)
    data!: ordersUpdateWithoutOrders_order_statusInput;
}
