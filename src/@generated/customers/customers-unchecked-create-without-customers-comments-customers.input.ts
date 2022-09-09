import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersUncheckedCreateNestedManyWithoutOrders_customersInput } from '../orders/orders-unchecked-create-nested-many-without-orders-customers.input';

@InputType()
export class customersUncheckedCreateWithoutCustomers_comments_customersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => ordersUncheckedCreateNestedManyWithoutOrders_customersInput, {nullable:true})
    orders_customers?: ordersUncheckedCreateNestedManyWithoutOrders_customersInput;
}
