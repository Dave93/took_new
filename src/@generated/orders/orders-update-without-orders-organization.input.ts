import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { usersUpdateOneWithoutOrders_created_byTousersNestedInput } from '../users/users-update-one-without-orders-created-by-tousers-nested.input';
import { usersUpdateOneWithoutOrders_updated_byTousersNestedInput } from '../users/users-update-one-without-orders-updated-by-tousers-nested.input';
import { customersUpdateOneRequiredWithoutOrders_customersNestedInput } from '../customers/customers-update-one-required-without-orders-customers-nested.input';
import { usersUpdateOneWithoutOrders_couriersNestedInput } from '../users/users-update-one-without-orders-couriers-nested.input';
import { order_statusUpdateOneRequiredWithoutOrders_order_statusNestedInput } from '../order-status/order-status-update-one-required-without-orders-order-status-nested.input';
import { terminalsUpdateOneRequiredWithoutOrders_terminalsNestedInput } from '../terminals/terminals-update-one-required-without-orders-terminals-nested.input';
import { order_actionsUpdateManyWithoutOrder_actions_ordersNestedInput } from '../order-actions/order-actions-update-many-without-order-actions-orders-nested.input';
import { order_locationsUpdateManyWithoutOrder_locations_ordersNestedInput } from '../order-locations/order-locations-update-many-without-order-locations-orders-nested.input';

@InputType()
export class ordersUpdateWithoutOrders_organizationInput {

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

    @Field(() => String, {nullable:true})
    order_number?: string;

    @Field(() => Float, {nullable:true})
    distance?: number;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => Float, {nullable:true})
    order_price?: number;

    @Field(() => Float, {nullable:true})
    delivery_price?: number;

    @Field(() => String, {nullable:true})
    delivery_address?: string;

    @Field(() => Date, {nullable:true})
    finished_date?: Date | string;

    @Field(() => String, {nullable:true})
    delivery_comment?: string;

    @Field(() => String, {nullable:true})
    payment_type?: string;

    @Field(() => String, {nullable:true})
    cancel_reason?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    order_items?: any;

    @Field(() => String, {nullable:true})
    delivery_pricing_id?: string;

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

    @Field(() => usersUpdateOneWithoutOrders_couriersNestedInput, {nullable:true})
    orders_couriers?: usersUpdateOneWithoutOrders_couriersNestedInput;

    @Field(() => order_statusUpdateOneRequiredWithoutOrders_order_statusNestedInput, {nullable:true})
    orders_order_status?: order_statusUpdateOneRequiredWithoutOrders_order_statusNestedInput;

    @Field(() => terminalsUpdateOneRequiredWithoutOrders_terminalsNestedInput, {nullable:true})
    orders_terminals?: terminalsUpdateOneRequiredWithoutOrders_terminalsNestedInput;

    @Field(() => order_actionsUpdateManyWithoutOrder_actions_ordersNestedInput, {nullable:true})
    order_actions_orders?: order_actionsUpdateManyWithoutOrder_actions_ordersNestedInput;

    @Field(() => order_locationsUpdateManyWithoutOrder_locations_ordersNestedInput, {nullable:true})
    order_locations_orders?: order_locationsUpdateManyWithoutOrder_locations_ordersNestedInput;
}
