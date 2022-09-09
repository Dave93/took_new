import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_statusCreateWithoutOrders_order_statusInput } from './order-status-create-without-orders-order-status.input';
import { Type } from 'class-transformer';
import { order_statusCreateOrConnectWithoutOrders_order_statusInput } from './order-status-create-or-connect-without-orders-order-status.input';
import { order_statusWhereUniqueInput } from './order-status-where-unique.input';

@InputType()
export class order_statusCreateNestedOneWithoutOrders_order_statusInput {

    @Field(() => order_statusCreateWithoutOrders_order_statusInput, {nullable:true})
    @Type(() => order_statusCreateWithoutOrders_order_statusInput)
    create?: order_statusCreateWithoutOrders_order_statusInput;

    @Field(() => order_statusCreateOrConnectWithoutOrders_order_statusInput, {nullable:true})
    @Type(() => order_statusCreateOrConnectWithoutOrders_order_statusInput)
    connectOrCreate?: order_statusCreateOrConnectWithoutOrders_order_statusInput;

    @Field(() => order_statusWhereUniqueInput, {nullable:true})
    @Type(() => order_statusWhereUniqueInput)
    connect?: order_statusWhereUniqueInput;
}
