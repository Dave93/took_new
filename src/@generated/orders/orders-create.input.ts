import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { usersCreateNestedOneWithoutOrders_created_byTousersInput } from '../users/users-create-nested-one-without-orders-created-by-tousers.input';
import { usersCreateNestedOneWithoutOrders_updated_byTousersInput } from '../users/users-create-nested-one-without-orders-updated-by-tousers.input';
import { customersCreateNestedOneWithoutOrders_customersInput } from '../customers/customers-create-nested-one-without-orders-customers.input';
import { usersCreateNestedOneWithoutOrders_couriersInput } from '../users/users-create-nested-one-without-orders-couriers.input';
import { order_statusCreateNestedOneWithoutOrders_order_statusInput } from '../order-status/order-status-create-nested-one-without-orders-order-status.input';
import { organizationCreateNestedOneWithoutOrders_organizationInput } from '../organization/organization-create-nested-one-without-orders-organization.input';
import { terminalsCreateNestedOneWithoutOrders_terminalsInput } from '../terminals/terminals-create-nested-one-without-orders-terminals.input';
import { order_actionsCreateNestedManyWithoutOrder_actions_ordersInput } from '../order-actions/order-actions-create-nested-many-without-order-actions-orders.input';
import { order_locationsCreateNestedManyWithoutOrder_locations_ordersInput } from '../order-locations/order-locations-create-nested-many-without-order-locations-orders.input';

@InputType()
export class ordersCreateInput {

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

    @Field(() => usersCreateNestedOneWithoutOrders_created_byTousersInput, {nullable:true})
    orders_created_byTousers?: usersCreateNestedOneWithoutOrders_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutOrders_updated_byTousersInput, {nullable:true})
    orders_updated_byTousers?: usersCreateNestedOneWithoutOrders_updated_byTousersInput;

    @Field(() => customersCreateNestedOneWithoutOrders_customersInput, {nullable:false})
    orders_customers!: customersCreateNestedOneWithoutOrders_customersInput;

    @Field(() => usersCreateNestedOneWithoutOrders_couriersInput, {nullable:true})
    orders_couriers?: usersCreateNestedOneWithoutOrders_couriersInput;

    @Field(() => order_statusCreateNestedOneWithoutOrders_order_statusInput, {nullable:false})
    orders_order_status!: order_statusCreateNestedOneWithoutOrders_order_statusInput;

    @Field(() => organizationCreateNestedOneWithoutOrders_organizationInput, {nullable:false})
    orders_organization!: organizationCreateNestedOneWithoutOrders_organizationInput;

    @Field(() => terminalsCreateNestedOneWithoutOrders_terminalsInput, {nullable:false})
    orders_terminals!: terminalsCreateNestedOneWithoutOrders_terminalsInput;

    @Field(() => order_actionsCreateNestedManyWithoutOrder_actions_ordersInput, {nullable:true})
    order_actions_orders?: order_actionsCreateNestedManyWithoutOrder_actions_ordersInput;

    @Field(() => order_locationsCreateNestedManyWithoutOrder_locations_ordersInput, {nullable:true})
    order_locations_orders?: order_locationsCreateNestedManyWithoutOrder_locations_ordersInput;
}
