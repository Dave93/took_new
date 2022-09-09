import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsCreateNestedManyWithoutCustomers_comments_customersInput } from '../customers-comments/customers-comments-create-nested-many-without-customers-comments-customers.input';
import { ordersCreateNestedManyWithoutOrders_customersInput } from '../orders/orders-create-nested-many-without-orders-customers.input';

@InputType()
export class customersCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => customers_commentsCreateNestedManyWithoutCustomers_comments_customersInput, {nullable:true})
    customers_comments_customers?: customers_commentsCreateNestedManyWithoutCustomers_comments_customersInput;

    @Field(() => ordersCreateNestedManyWithoutOrders_customersInput, {nullable:true})
    orders_customers?: ordersCreateNestedManyWithoutOrders_customersInput;
}
