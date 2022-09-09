import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrders_customersInput } from './orders-update-without-orders-customers.input';

@InputType()
export class ordersUpdateWithWhereUniqueWithoutOrders_customersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrders_customersInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrders_customersInput)
    data!: ordersUpdateWithoutOrders_customersInput;
}
