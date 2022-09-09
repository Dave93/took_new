import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrders_created_byTousersInput } from './orders-update-without-orders-created-by-tousers.input';

@InputType()
export class ordersUpdateWithWhereUniqueWithoutOrders_created_byTousersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrders_created_byTousersInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrders_created_byTousersInput)
    data!: ordersUpdateWithoutOrders_created_byTousersInput;
}
