import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ordersUpdateManyWithoutOrders_order_statusNestedInput } from '../orders/orders-update-many-without-orders-order-status-nested.input';

@InputType()
export class order_statusUpdateWithoutOrder_status_organizationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => Boolean, {nullable:true})
    finish?: boolean;

    @Field(() => Boolean, {nullable:true})
    cancel?: boolean;

    @Field(() => Boolean, {nullable:true})
    waiting?: boolean;

    @Field(() => ordersUpdateManyWithoutOrders_order_statusNestedInput, {nullable:true})
    orders_order_status?: ordersUpdateManyWithoutOrders_order_statusNestedInput;
}
