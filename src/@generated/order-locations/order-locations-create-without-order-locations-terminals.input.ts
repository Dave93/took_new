import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutOrder_locations_created_byTousersInput } from '../users/users-create-nested-one-without-order-locations-created-by-tousers.input';
import { ordersCreateNestedOneWithoutOrder_locations_ordersInput } from '../orders/orders-create-nested-one-without-order-locations-orders.input';
import { usersCreateNestedOneWithoutOrder_locations_couriersInput } from '../users/users-create-nested-one-without-order-locations-couriers.input';

@InputType()
export class order_locationsCreateWithoutOrder_locations_terminalsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    order_status_id!: string;

    @Field(() => Float, {nullable:true})
    lat?: number;

    @Field(() => Float, {nullable:true})
    lon?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutOrder_locations_created_byTousersInput, {nullable:true})
    order_locations_created_byTousers?: usersCreateNestedOneWithoutOrder_locations_created_byTousersInput;

    @Field(() => ordersCreateNestedOneWithoutOrder_locations_ordersInput, {nullable:false})
    order_locations_orders!: ordersCreateNestedOneWithoutOrder_locations_ordersInput;

    @Field(() => usersCreateNestedOneWithoutOrder_locations_couriersInput, {nullable:false})
    order_locations_couriers!: usersCreateNestedOneWithoutOrder_locations_couriersInput;
}
