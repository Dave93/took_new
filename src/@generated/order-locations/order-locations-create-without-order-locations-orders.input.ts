import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutOrder_locations_created_byTousersInput } from '../users/users-create-nested-one-without-order-locations-created-by-tousers.input';
import { terminalsCreateNestedOneWithoutOrder_locations_terminalsInput } from '../terminals/terminals-create-nested-one-without-order-locations-terminals.input';
import { usersCreateNestedOneWithoutOrder_locations_couriersInput } from '../users/users-create-nested-one-without-order-locations-couriers.input';

@InputType()
export class order_locationsCreateWithoutOrder_locations_ordersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    lat?: number;

    @Field(() => Float, {nullable:true})
    lon?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutOrder_locations_created_byTousersInput, {nullable:true})
    order_locations_created_byTousers?: usersCreateNestedOneWithoutOrder_locations_created_byTousersInput;

    @Field(() => terminalsCreateNestedOneWithoutOrder_locations_terminalsInput, {nullable:false})
    order_locations_terminals!: terminalsCreateNestedOneWithoutOrder_locations_terminalsInput;

    @Field(() => usersCreateNestedOneWithoutOrder_locations_couriersInput, {nullable:false})
    order_locations_couriers!: usersCreateNestedOneWithoutOrder_locations_couriersInput;
}
