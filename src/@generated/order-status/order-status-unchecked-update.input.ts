import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ordersUncheckedUpdateManyWithoutOrders_order_statusNestedInput } from '../orders/orders-unchecked-update-many-without-orders-order-status-nested.input';

@InputType()
export class order_statusUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => String, {nullable:true})
    organization_id?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => String, {nullable:true})
    status_change_text?: string;

    @Field(() => Boolean, {nullable:true})
    finish?: boolean;

    @Field(() => Boolean, {nullable:true})
    cancel?: boolean;

    @Field(() => Boolean, {nullable:true})
    waiting?: boolean;

    @Field(() => Boolean, {nullable:true})
    need_location?: boolean;

    @Field(() => Boolean, {nullable:true})
    on_way?: boolean;

    @Field(() => Boolean, {nullable:true})
    in_terminal?: boolean;

    @Field(() => Boolean, {nullable:true})
    should_pay?: boolean;

    @Field(() => String, {nullable:true})
    yandex_delivery_statuses?: string;

    @Field(() => ordersUncheckedUpdateManyWithoutOrders_order_statusNestedInput, {nullable:true})
    orders_order_status?: ordersUncheckedUpdateManyWithoutOrders_order_statusNestedInput;
}
