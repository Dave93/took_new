import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { organizationCreateNestedOneWithoutOrder_status_organizationInput } from '../organization/organization-create-nested-one-without-order-status-organization.input';
import { ordersCreateNestedManyWithoutOrders_order_statusInput } from '../orders/orders-create-nested-many-without-orders-order-status.input';

@InputType()
export class order_statusCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    sort?: number;

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

    @Field(() => organizationCreateNestedOneWithoutOrder_status_organizationInput, {nullable:false})
    order_status_organization!: organizationCreateNestedOneWithoutOrder_status_organizationInput;

    @Field(() => ordersCreateNestedManyWithoutOrders_order_statusInput, {nullable:true})
    orders_order_status?: ordersCreateNestedManyWithoutOrders_order_statusInput;
}
