import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrders_updated_byTousersInput } from './orders-update-without-orders-updated-by-tousers.input';

@InputType()
export class ordersUpdateWithWhereUniqueWithoutOrders_updated_byTousersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrders_updated_byTousersInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrders_updated_byTousersInput)
    data!: ordersUpdateWithoutOrders_updated_byTousersInput;
}
