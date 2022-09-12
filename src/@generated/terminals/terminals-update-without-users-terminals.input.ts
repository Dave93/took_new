import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { organizationUpdateOneRequiredWithoutTerminals_organization_idTorganizationNestedInput } from '../organization/organization-update-one-required-without-terminals-organization-id-torganization-nested.input';
import { usersUpdateOneWithoutTerminals_created_byTousersNestedInput } from '../users/users-update-one-without-terminals-created-by-tousers-nested.input';
import { usersUpdateOneWithoutTerminals_updated_byTousersNestedInput } from '../users/users-update-one-without-terminals-updated-by-tousers-nested.input';
import { ordersUpdateManyWithoutOrders_terminalsNestedInput } from '../orders/orders-update-many-without-orders-terminals-nested.input';
import { order_actionsUpdateManyWithoutOrder_actions_terminalsNestedInput } from '../order-actions/order-actions-update-many-without-order-actions-terminals-nested.input';
import { order_locationsUpdateManyWithoutOrder_locations_terminalsNestedInput } from '../order-locations/order-locations-update-many-without-order-locations-terminals-nested.input';

@InputType()
export class terminalsUpdateWithoutUsers_terminalsInput {

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

    @Field(() => usersUpdateOneWithoutTerminals_created_byTousersNestedInput, {nullable:true})
    terminals_created_byTousers?: usersUpdateOneWithoutTerminals_created_byTousersNestedInput;

    @Field(() => usersUpdateOneWithoutTerminals_updated_byTousersNestedInput, {nullable:true})
    terminals_updated_byTousers?: usersUpdateOneWithoutTerminals_updated_byTousersNestedInput;

    @Field(() => ordersUpdateManyWithoutOrders_terminalsNestedInput, {nullable:true})
    orders_terminals?: ordersUpdateManyWithoutOrders_terminalsNestedInput;

    @Field(() => order_actionsUpdateManyWithoutOrder_actions_terminalsNestedInput, {nullable:true})
    order_actions_terminals?: order_actionsUpdateManyWithoutOrder_actions_terminalsNestedInput;

    @Field(() => order_locationsUpdateManyWithoutOrder_locations_terminalsNestedInput, {nullable:true})
    order_locations_terminals?: order_locationsUpdateManyWithoutOrder_locations_terminalsNestedInput;
}
