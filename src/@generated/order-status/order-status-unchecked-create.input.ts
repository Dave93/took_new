import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ordersUncheckedCreateNestedManyWithoutOrders_order_statusInput } from '../orders/orders-unchecked-create-nested-many-without-orders-order-status.input';

@InputType()
export class order_statusUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    sort?: number;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:true})
    color?: string;

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

    @Field(() => ordersUncheckedCreateNestedManyWithoutOrders_order_statusInput, {nullable:true})
    orders_order_status?: ordersUncheckedCreateNestedManyWithoutOrders_order_statusInput;
}
