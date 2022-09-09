import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsUncheckedUpdateManyWithoutCustomers_comments_customersNestedInput } from '../customers-comments/customers-comments-unchecked-update-many-without-customers-comments-customers-nested.input';
import { ordersUncheckedUpdateManyWithoutOrders_customersNestedInput } from '../orders/orders-unchecked-update-many-without-orders-customers-nested.input';

@InputType()
export class customersUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => customers_commentsUncheckedUpdateManyWithoutCustomers_comments_customersNestedInput, {nullable:true})
    customers_comments_customers?: customers_commentsUncheckedUpdateManyWithoutCustomers_comments_customersNestedInput;

    @Field(() => ordersUncheckedUpdateManyWithoutOrders_customersNestedInput, {nullable:true})
    orders_customers?: ordersUncheckedUpdateManyWithoutOrders_customersNestedInput;
}
