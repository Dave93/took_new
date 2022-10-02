import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { order_actionsUncheckedCreateNestedManyWithoutOrder_actions_ordersInput } from '../order-actions/order-actions-unchecked-create-nested-many-without-order-actions-orders.input';
import { order_locationsUncheckedCreateNestedManyWithoutOrder_locations_ordersInput } from '../order-locations/order-locations-unchecked-create-nested-many-without-order-locations-orders.input';

@InputType()
export class ordersUncheckedCreateWithoutOrders_updated_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:false})
    customer_id!: string;

    @Field(() => String, {nullable:true})
    courier_id?: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    order_status_id!: string;

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

    @Field(() => String, {nullable:false})
    order_number!: string;

    @Field(() => Float, {nullable:true})
    distance?: number;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => Float, {nullable:true})
    order_price?: number;

    @Field(() => Float, {nullable:true})
    delivery_price?: number;

    @Field(() => String, {nullable:false})
    delivery_address!: string;

    @Field(() => Date, {nullable:true})
    finished_date?: Date | string;

    @Field(() => String, {nullable:true})
    delivery_comment?: string;

    @Field(() => String, {nullable:false})
    payment_type!: string;

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

    @Field(() => order_actionsUncheckedCreateNestedManyWithoutOrder_actions_ordersInput, {nullable:true})
    order_actions_orders?: order_actionsUncheckedCreateNestedManyWithoutOrder_actions_ordersInput;

    @Field(() => order_locationsUncheckedCreateNestedManyWithoutOrder_locations_ordersInput, {nullable:true})
    order_locations_orders?: order_locationsUncheckedCreateNestedManyWithoutOrder_locations_ordersInput;
}
