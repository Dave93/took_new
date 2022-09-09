import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrders_terminalsInput } from './orders-update-without-orders-terminals.input';
import { ordersCreateWithoutOrders_terminalsInput } from './orders-create-without-orders-terminals.input';

@InputType()
export class ordersUpsertWithWhereUniqueWithoutOrders_terminalsInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrders_terminalsInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrders_terminalsInput)
    update!: ordersUpdateWithoutOrders_terminalsInput;

    @Field(() => ordersCreateWithoutOrders_terminalsInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrders_terminalsInput)
    create!: ordersCreateWithoutOrders_terminalsInput;
}
