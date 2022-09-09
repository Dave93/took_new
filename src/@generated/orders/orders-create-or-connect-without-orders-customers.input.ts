import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrders_customersInput } from './orders-create-without-orders-customers.input';

@InputType()
export class ordersCreateOrConnectWithoutOrders_customersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersCreateWithoutOrders_customersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrders_customersInput)
    create!: ordersCreateWithoutOrders_customersInput;
}
