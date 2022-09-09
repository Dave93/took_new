import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { users_terminalsUncheckedUpdateManyWithoutTerminalsNestedInput } from '../users-terminals/users-terminals-unchecked-update-many-without-terminals-nested.input';
import { ordersUncheckedUpdateManyWithoutOrders_terminalsNestedInput } from '../orders/orders-unchecked-update-many-without-orders-terminals-nested.input';

@InputType()
export class terminalsUncheckedUpdateWithoutOrganizationInput {

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

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => users_terminalsUncheckedUpdateManyWithoutTerminalsNestedInput, {nullable:true})
    users_terminals?: users_terminalsUncheckedUpdateManyWithoutTerminalsNestedInput;

    @Field(() => ordersUncheckedUpdateManyWithoutOrders_terminalsNestedInput, {nullable:true})
    orders_terminals?: ordersUncheckedUpdateManyWithoutOrders_terminalsNestedInput;
}
