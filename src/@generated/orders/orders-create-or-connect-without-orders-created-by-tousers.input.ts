import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrders_created_byTousersInput } from './orders-create-without-orders-created-by-tousers.input';

@InputType()
export class ordersCreateOrConnectWithoutOrders_created_byTousersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersCreateWithoutOrders_created_byTousersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrders_created_byTousersInput)
    create!: ordersCreateWithoutOrders_created_byTousersInput;
}
