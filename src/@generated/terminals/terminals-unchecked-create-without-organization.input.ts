import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { users_terminalsUncheckedCreateNestedManyWithoutTerminalsInput } from '../users-terminals/users-terminals-unchecked-create-nested-many-without-terminals.input';
import { ordersUncheckedCreateNestedManyWithoutOrders_terminalsInput } from '../orders/orders-unchecked-create-nested-many-without-orders-terminals.input';
import { order_actionsUncheckedCreateNestedManyWithoutOrder_actions_terminalsInput } from '../order-actions/order-actions-unchecked-create-nested-many-without-order-actions-terminals.input';
import { order_locationsUncheckedCreateNestedManyWithoutOrder_locations_terminalsInput } from '../order-locations/order-locations-unchecked-create-nested-many-without-order-locations-terminals.input';
import { delivery_pricingUncheckedCreateNestedManyWithoutTerminalInput } from '../delivery-pricing/delivery-pricing-unchecked-create-nested-many-without-terminal.input';
import { order_votesUncheckedCreateNestedManyWithoutOrder_votes_terminalsInput } from '../order-votes/order-votes-unchecked-create-nested-many-without-order-votes-terminals.input';
import { order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_terminalsInput } from '../order-transactions/order-transactions-unchecked-create-nested-many-without-order-transactions-terminals.input';

@InputType()
export class terminalsUncheckedCreateWithoutOrganizationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

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

    @Field(() => String, {nullable:false})
    external_id!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => users_terminalsUncheckedCreateNestedManyWithoutTerminalsInput, {nullable:true})
    users_terminals?: users_terminalsUncheckedCreateNestedManyWithoutTerminalsInput;

    @Field(() => ordersUncheckedCreateNestedManyWithoutOrders_terminalsInput, {nullable:true})
    orders_terminals?: ordersUncheckedCreateNestedManyWithoutOrders_terminalsInput;

    @Field(() => order_actionsUncheckedCreateNestedManyWithoutOrder_actions_terminalsInput, {nullable:true})
    order_actions_terminals?: order_actionsUncheckedCreateNestedManyWithoutOrder_actions_terminalsInput;

    @Field(() => order_locationsUncheckedCreateNestedManyWithoutOrder_locations_terminalsInput, {nullable:true})
    order_locations_terminals?: order_locationsUncheckedCreateNestedManyWithoutOrder_locations_terminalsInput;

    @Field(() => delivery_pricingUncheckedCreateNestedManyWithoutTerminalInput, {nullable:true})
    delivery_pricing_terminal_idTterminal?: delivery_pricingUncheckedCreateNestedManyWithoutTerminalInput;

    @Field(() => order_votesUncheckedCreateNestedManyWithoutOrder_votes_terminalsInput, {nullable:true})
    order_votes_terminals?: order_votesUncheckedCreateNestedManyWithoutOrder_votes_terminalsInput;

    @Field(() => order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_terminalsInput, {nullable:true})
    order_transactions_terminals?: order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_terminalsInput;
}
