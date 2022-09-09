import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrders_customersInput } from './orders-update-without-orders-customers.input';
import { ordersCreateWithoutOrders_customersInput } from './orders-create-without-orders-customers.input';

@InputType()
export class ordersUpsertWithWhereUniqueWithoutOrders_customersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrders_customersInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrders_customersInput)
    update!: ordersUpdateWithoutOrders_customersInput;

    @Field(() => ordersCreateWithoutOrders_customersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrders_customersInput)
    create!: ordersCreateWithoutOrders_customersInput;
}
