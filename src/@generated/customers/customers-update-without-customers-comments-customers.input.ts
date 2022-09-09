import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersUpdateManyWithoutOrders_customersNestedInput } from '../orders/orders-update-many-without-orders-customers-nested.input';

@InputType()
export class customersUpdateWithoutCustomers_comments_customersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => ordersUpdateManyWithoutOrders_customersNestedInput, {nullable:true})
    orders_customers?: ordersUpdateManyWithoutOrders_customersNestedInput;
}
