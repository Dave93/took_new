import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrders_terminalsInput } from './orders-update-without-orders-terminals.input';

@InputType()
export class ordersUpdateWithWhereUniqueWithoutOrders_terminalsInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrders_terminalsInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrders_terminalsInput)
    data!: ordersUpdateWithoutOrders_terminalsInput;
}
