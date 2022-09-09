import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrders_updated_byTousersInput } from './orders-create-without-orders-updated-by-tousers.input';

@InputType()
export class ordersCreateOrConnectWithoutOrders_updated_byTousersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersCreateWithoutOrders_updated_byTousersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrders_updated_byTousersInput)
    create!: ordersCreateWithoutOrders_updated_byTousersInput;
}
