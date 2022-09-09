import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { usersUpdateOneWithoutOrders_created_byTousersNestedInput } from '../users/users-update-one-without-orders-created-by-tousers-nested.input';
import { usersUpdateOneWithoutOrders_updated_byTousersNestedInput } from '../users/users-update-one-without-orders-updated-by-tousers-nested.input';
import { customersUpdateOneRequiredWithoutOrders_customersNestedInput } from '../customers/customers-update-one-required-without-orders-customers-nested.input';
import { usersUpdateOneRequiredWithoutOrders_couriersNestedInput } from '../users/users-update-one-required-without-orders-couriers-nested.input';
import { order_statusUpdateOneRequiredWithoutOrders_order_statusNestedInput } from '../order-status/order-status-update-one-required-without-orders-order-status-nested.input';
import { organizationUpdateOneRequiredWithoutOrders_organizationNestedInput } from '../organization/organization-update-one-required-without-orders-organization-nested.input';

@InputType()
export class ordersUpdateWithoutOrders_terminalsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => drive_type, {nullable:true})
    delivery_type?: keyof typeof drive_type;

    @Field(() => Float, {nullable:true})
    from_lat?: number;

    @Field(() => Float, {nullable:true})
    from_lon?: number;

    @Field(() => Float, {nullable:true})
    to_lat?: number;

    @Field(() => Float, {nullable:true})
    to_lon?: number;

    @Field(() => Float, {nullable:true})
    pre_distance?: number;

    @Field(() => Int, {nullable:true})
    pre_duration?: number;

    @Field(() => Float, {nullable:true})
    distance?: number;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => Float, {nullable:true})
    delivery_price?: number;

    @Field(() => String, {nullable:true})
    delivery_address?: string;

    @Field(() => Date, {nullable:true})
    delivery_date?: Date | string;

    @Field(() => Date, {nullable:true})
    finished_date?: Date | string;

    @Field(() => String, {nullable:true})
    delivery_comment?: string;

    @Field(() => String, {nullable:true})
    delivery_phone?: string;

    @Field(() => String, {nullable:true})
    delivery_name?: string;

    @Field(() => String, {nullable:true})
    payment_type_id?: string;

    @Field(() => String, {nullable:true})
    cancel_reason?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    order_items?: any;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneWithoutOrders_created_byTousersNestedInput, {nullable:true})
    orders_created_byTousers?: usersUpdateOneWithoutOrders_created_byTousersNestedInput;

    @Field(() => usersUpdateOneWithoutOrders_updated_byTousersNestedInput, {nullable:true})
    orders_updated_byTousers?: usersUpdateOneWithoutOrders_updated_byTousersNestedInput;

    @Field(() => customersUpdateOneRequiredWithoutOrders_customersNestedInput, {nullable:true})
    orders_customers?: customersUpdateOneRequiredWithoutOrders_customersNestedInput;

    @Field(() => usersUpdateOneRequiredWithoutOrders_couriersNestedInput, {nullable:true})
    orders_couriers?: usersUpdateOneRequiredWithoutOrders_couriersNestedInput;

    @Field(() => order_statusUpdateOneRequiredWithoutOrders_order_statusNestedInput, {nullable:true})
    orders_order_status?: order_statusUpdateOneRequiredWithoutOrders_order_statusNestedInput;

    @Field(() => organizationUpdateOneRequiredWithoutOrders_organizationNestedInput, {nullable:true})
    orders_organization?: organizationUpdateOneRequiredWithoutOrders_organizationNestedInput;
}
