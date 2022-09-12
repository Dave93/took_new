import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { organizationCreateNestedOneWithoutTerminals_organization_idTorganizationInput } from '../organization/organization-create-nested-one-without-terminals-organization-id-torganization.input';
import { usersCreateNestedOneWithoutTerminals_created_byTousersInput } from '../users/users-create-nested-one-without-terminals-created-by-tousers.input';
import { usersCreateNestedOneWithoutTerminals_updated_byTousersInput } from '../users/users-create-nested-one-without-terminals-updated-by-tousers.input';
import { users_terminalsCreateNestedManyWithoutTerminalsInput } from '../users-terminals/users-terminals-create-nested-many-without-terminals.input';
import { ordersCreateNestedManyWithoutOrders_terminalsInput } from '../orders/orders-create-nested-many-without-orders-terminals.input';
import { order_locationsCreateNestedManyWithoutOrder_locations_terminalsInput } from '../order-locations/order-locations-create-nested-many-without-order-locations-terminals.input';

@InputType()
export class terminalsCreateWithoutOrder_actions_terminalsInput {

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

    @Field(() => organizationCreateNestedOneWithoutTerminals_organization_idTorganizationInput, {nullable:false})
    organization!: organizationCreateNestedOneWithoutTerminals_organization_idTorganizationInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutTerminals_created_byTousersInput, {nullable:true})
    terminals_created_byTousers?: usersCreateNestedOneWithoutTerminals_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutTerminals_updated_byTousersInput, {nullable:true})
    terminals_updated_byTousers?: usersCreateNestedOneWithoutTerminals_updated_byTousersInput;

    @Field(() => users_terminalsCreateNestedManyWithoutTerminalsInput, {nullable:true})
    users_terminals?: users_terminalsCreateNestedManyWithoutTerminalsInput;

    @Field(() => ordersCreateNestedManyWithoutOrders_terminalsInput, {nullable:true})
    orders_terminals?: ordersCreateNestedManyWithoutOrders_terminalsInput;

    @Field(() => order_locationsCreateNestedManyWithoutOrder_locations_terminalsInput, {nullable:true})
    order_locations_terminals?: order_locationsCreateNestedManyWithoutOrder_locations_terminalsInput;
}
