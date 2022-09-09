import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrders_couriersInput } from './orders-create-without-orders-couriers.input';

@InputType()
export class ordersCreateOrConnectWithoutOrders_couriersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersCreateWithoutOrders_couriersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrders_couriersInput)
    create!: ordersCreateWithoutOrders_couriersInput;
}
