import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { organizationUpdateOneRequiredWithoutTerminals_organization_idTorganizationNestedInput } from '../organization/organization-update-one-required-without-terminals-organization-id-torganization-nested.input';
import { users_terminalsUpdateManyWithoutTerminalsNestedInput } from '../users-terminals/users-terminals-update-many-without-terminals-nested.input';
import { ordersUpdateManyWithoutOrders_terminalsNestedInput } from '../orders/orders-update-many-without-orders-terminals-nested.input';
import { order_actionsUpdateManyWithoutOrder_actions_terminalsNestedInput } from '../order-actions/order-actions-update-many-without-order-actions-terminals-nested.input';
import { order_locationsUpdateManyWithoutOrder_locations_terminalsNestedInput } from '../order-locations/order-locations-update-many-without-order-locations-terminals-nested.input';
import { delivery_pricingUpdateManyWithoutTerminalNestedInput } from '../delivery-pricing/delivery-pricing-update-many-without-terminal-nested.input';
import { order_votesUpdateManyWithoutOrder_votes_terminalsNestedInput } from '../order-votes/order-votes-update-many-without-order-votes-terminals-nested.input';

@InputType()
export class terminalsUpdateWithoutOrder_transactions_terminalsInput {

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

    @Field(() => organizationUpdateOneRequiredWithoutTerminals_organization_idTorganizationNestedInput, {nullable:true})
    organization?: organizationUpdateOneRequiredWithoutTerminals_organization_idTorganizationNestedInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => users_terminalsUpdateManyWithoutTerminalsNestedInput, {nullable:true})
    users_terminals?: users_terminalsUpdateManyWithoutTerminalsNestedInput;

    @Field(() => ordersUpdateManyWithoutOrders_terminalsNestedInput, {nullable:true})
    orders_terminals?: ordersUpdateManyWithoutOrders_terminalsNestedInput;

    @Field(() => order_actionsUpdateManyWithoutOrder_actions_terminalsNestedInput, {nullable:true})
    order_actions_terminals?: order_actionsUpdateManyWithoutOrder_actions_terminalsNestedInput;

    @Field(() => order_locationsUpdateManyWithoutOrder_locations_terminalsNestedInput, {nullable:true})
    order_locations_terminals?: order_locationsUpdateManyWithoutOrder_locations_terminalsNestedInput;

    @Field(() => delivery_pricingUpdateManyWithoutTerminalNestedInput, {nullable:true})
    delivery_pricing_terminal_idTterminal?: delivery_pricingUpdateManyWithoutTerminalNestedInput;

    @Field(() => order_votesUpdateManyWithoutOrder_votes_terminalsNestedInput, {nullable:true})
    order_votes_terminals?: order_votesUpdateManyWithoutOrder_votes_terminalsNestedInput;
}
