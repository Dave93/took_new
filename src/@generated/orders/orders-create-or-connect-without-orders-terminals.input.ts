import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrders_terminalsInput } from './orders-create-without-orders-terminals.input';

@InputType()
export class ordersCreateOrConnectWithoutOrders_terminalsInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersCreateWithoutOrders_terminalsInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrders_terminalsInput)
    create!: ordersCreateWithoutOrders_terminalsInput;
}
