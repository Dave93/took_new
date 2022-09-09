import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { usersUpdateOneWithoutTerminals_created_byTousersNestedInput } from '../users/users-update-one-without-terminals-created-by-tousers-nested.input';
import { usersUpdateOneWithoutTerminals_updated_byTousersNestedInput } from '../users/users-update-one-without-terminals-updated-by-tousers-nested.input';
import { users_terminalsUpdateManyWithoutTerminalsNestedInput } from '../users-terminals/users-terminals-update-many-without-terminals-nested.input';
import { ordersUpdateManyWithoutOrders_terminalsNestedInput } from '../orders/orders-update-many-without-orders-terminals-nested.input';

@InputType()
export class terminalsUpdateWithoutOrganizationInput {

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

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneWithoutTerminals_created_byTousersNestedInput, {nullable:true})
    terminals_created_byTousers?: usersUpdateOneWithoutTerminals_created_byTousersNestedInput;

    @Field(() => usersUpdateOneWithoutTerminals_updated_byTousersNestedInput, {nullable:true})
    terminals_updated_byTousers?: usersUpdateOneWithoutTerminals_updated_byTousersNestedInput;

    @Field(() => users_terminalsUpdateManyWithoutTerminalsNestedInput, {nullable:true})
    users_terminals?: users_terminalsUpdateManyWithoutTerminalsNestedInput;

    @Field(() => ordersUpdateManyWithoutOrders_terminalsNestedInput, {nullable:true})
    orders_terminals?: ordersUpdateManyWithoutOrders_terminalsNestedInput;
}
