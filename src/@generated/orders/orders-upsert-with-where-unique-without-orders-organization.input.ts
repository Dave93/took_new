import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrders_organizationInput } from './orders-update-without-orders-organization.input';
import { ordersCreateWithoutOrders_organizationInput } from './orders-create-without-orders-organization.input';

@InputType()
export class ordersUpsertWithWhereUniqueWithoutOrders_organizationInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrders_organizationInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrders_organizationInput)
    update!: ordersUpdateWithoutOrders_organizationInput;

    @Field(() => ordersCreateWithoutOrders_organizationInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrders_organizationInput)
    create!: ordersCreateWithoutOrders_organizationInput;
}
