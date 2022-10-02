import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { order_actionsUncheckedUpdateManyWithoutOrder_actions_ordersNestedInput } from '../order-actions/order-actions-unchecked-update-many-without-order-actions-orders-nested.input';
import { order_locationsUncheckedUpdateManyWithoutOrder_locations_ordersNestedInput } from '../order-locations/order-locations-unchecked-update-many-without-order-locations-orders-nested.input';

@InputType()
export class ordersUncheckedUpdateWithoutOrders_couriersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    organization_id?: string;

    @Field(() => String, {nullable:true})
    customer_id?: string;

    @Field(() => String, {nullable:true})
    terminal_id?: string;

    @Field(() => String, {nullable:true})
    order_status_id?: string;

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

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => order_actionsUncheckedUpdateManyWithoutOrder_actions_ordersNestedInput, {nullable:true})
    order_actions_orders?: order_actionsUncheckedUpdateManyWithoutOrder_actions_ordersNestedInput;

    @Field(() => order_locationsUncheckedUpdateManyWithoutOrder_locations_ordersNestedInput, {nullable:true})
    order_locations_orders?: order_locationsUncheckedUpdateManyWithoutOrder_locations_ordersNestedInput;
}
