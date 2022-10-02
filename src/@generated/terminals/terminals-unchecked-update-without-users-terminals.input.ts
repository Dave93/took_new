import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ordersUncheckedUpdateManyWithoutOrders_terminalsNestedInput } from '../orders/orders-unchecked-update-many-without-orders-terminals-nested.input';
import { order_actionsUncheckedUpdateManyWithoutOrder_actions_terminalsNestedInput } from '../order-actions/order-actions-unchecked-update-many-without-order-actions-terminals-nested.input';
import { order_locationsUncheckedUpdateManyWithoutOrder_locations_terminalsNestedInput } from '../order-locations/order-locations-unchecked-update-many-without-order-locations-terminals-nested.input';
import { delivery_pricingUncheckedUpdateManyWithoutTerminalNestedInput } from '../delivery-pricing/delivery-pricing-unchecked-update-many-without-terminal-nested.input';

@InputType()
export class terminalsUncheckedUpdateWithoutUsers_terminalsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => String, {nullable:true})
    external_id?: string;

    @Field(() => String, {nullable:true})
    organization_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ordersUncheckedUpdateManyWithoutOrders_terminalsNestedInput, {nullable:true})
    orders_terminals?: ordersUncheckedUpdateManyWithoutOrders_terminalsNestedInput;

    @Field(() => order_actionsUncheckedUpdateManyWithoutOrder_actions_terminalsNestedInput, {nullable:true})
    order_actions_terminals?: order_actionsUncheckedUpdateManyWithoutOrder_actions_terminalsNestedInput;

    @Field(() => order_locationsUncheckedUpdateManyWithoutOrder_locations_terminalsNestedInput, {nullable:true})
    order_locations_terminals?: order_locationsUncheckedUpdateManyWithoutOrder_locations_terminalsNestedInput;

    @Field(() => delivery_pricingUncheckedUpdateManyWithoutTerminalNestedInput, {nullable:true})
    delivery_pricing_terminal_idTterminal?: delivery_pricingUncheckedUpdateManyWithoutTerminalNestedInput;
}
