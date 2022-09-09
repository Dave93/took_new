import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_statusWhereUniqueInput } from './order-status-where-unique.input';
import { Type } from 'class-transformer';
import { order_statusCreateWithoutOrders_order_statusInput } from './order-status-create-without-orders-order-status.input';

@InputType()
export class order_statusCreateOrConnectWithoutOrders_order_statusInput {

    @Field(() => order_statusWhereUniqueInput, {nullable:false})
    @Type(() => order_statusWhereUniqueInput)
    where!: order_statusWhereUniqueInput;

    @Field(() => order_statusCreateWithoutOrders_order_statusInput, {nullable:false})
    @Type(() => order_statusCreateWithoutOrders_order_statusInput)
    create!: order_statusCreateWithoutOrders_order_statusInput;
}
