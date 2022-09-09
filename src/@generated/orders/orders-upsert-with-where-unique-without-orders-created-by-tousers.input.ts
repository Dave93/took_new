import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrders_created_byTousersInput } from './orders-update-without-orders-created-by-tousers.input';
import { ordersCreateWithoutOrders_created_byTousersInput } from './orders-create-without-orders-created-by-tousers.input';

@InputType()
export class ordersUpsertWithWhereUniqueWithoutOrders_created_byTousersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrders_created_byTousersInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrders_created_byTousersInput)
    update!: ordersUpdateWithoutOrders_created_byTousersInput;

    @Field(() => ordersCreateWithoutOrders_created_byTousersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrders_created_byTousersInput)
    create!: ordersCreateWithoutOrders_created_byTousersInput;
}
