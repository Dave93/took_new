import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateNestedManyWithoutOrders_customersInput } from '../orders/orders-create-nested-many-without-orders-customers.input';

@InputType()
export class customersCreateWithoutCustomers_comments_customersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => ordersCreateNestedManyWithoutOrders_customersInput, {nullable:true})
    orders_customers?: ordersCreateNestedManyWithoutOrders_customersInput;
}
