import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ordersUpdateOneRequiredWithoutOrder_locations_ordersNestedInput } from '../orders/orders-update-one-required-without-order-locations-orders-nested.input';
import { terminalsUpdateOneRequiredWithoutOrder_locations_terminalsNestedInput } from '../terminals/terminals-update-one-required-without-order-locations-terminals-nested.input';
import { usersUpdateOneRequiredWithoutOrder_locations_couriersNestedInput } from '../users/users-update-one-required-without-order-locations-couriers-nested.input';

@InputType()
export class order_locationsUpdateWithoutOrder_locations_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    lat?: number;

    @Field(() => Float, {nullable:true})
    lon?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => ordersUpdateOneRequiredWithoutOrder_locations_ordersNestedInput, {nullable:true})
    order_locations_orders?: ordersUpdateOneRequiredWithoutOrder_locations_ordersNestedInput;

    @Field(() => terminalsUpdateOneRequiredWithoutOrder_locations_terminalsNestedInput, {nullable:true})
    order_locations_terminals?: terminalsUpdateOneRequiredWithoutOrder_locations_terminalsNestedInput;

    @Field(() => usersUpdateOneRequiredWithoutOrder_locations_couriersNestedInput, {nullable:true})
    order_locations_couriers?: usersUpdateOneRequiredWithoutOrder_locations_couriersNestedInput;
}