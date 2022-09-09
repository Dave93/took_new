import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersUncheckedUpdateManyWithoutOrders_customersNestedInput } from '../orders/orders-unchecked-update-many-without-orders-customers-nested.input';

@InputType()
export class customersUncheckedUpdateWithoutCustomers_comments_customersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => ordersUncheckedUpdateManyWithoutOrders_customersNestedInput, {nullable:true})
    orders_customers?: ordersUncheckedUpdateManyWithoutOrders_customersNestedInput;
}
