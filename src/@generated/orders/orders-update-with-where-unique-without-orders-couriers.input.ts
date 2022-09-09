import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrders_couriersInput } from './orders-update-without-orders-couriers.input';

@InputType()
export class ordersUpdateWithWhereUniqueWithoutOrders_couriersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrders_couriersInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrders_couriersInput)
    data!: ordersUpdateWithoutOrders_couriersInput;
}
