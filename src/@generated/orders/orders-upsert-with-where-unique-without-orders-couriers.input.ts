import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrders_couriersInput } from './orders-update-without-orders-couriers.input';
import { ordersCreateWithoutOrders_couriersInput } from './orders-create-without-orders-couriers.input';

@InputType()
export class ordersUpsertWithWhereUniqueWithoutOrders_couriersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrders_couriersInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrders_couriersInput)
    update!: ordersUpdateWithoutOrders_couriersInput;

    @Field(() => ordersCreateWithoutOrders_couriersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrders_couriersInput)
    create!: ordersCreateWithoutOrders_couriersInput;
}
