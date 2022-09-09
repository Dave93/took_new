import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrders_organizationInput } from './orders-create-without-orders-organization.input';

@InputType()
export class ordersCreateOrConnectWithoutOrders_organizationInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersCreateWithoutOrders_organizationInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrders_organizationInput)
    create!: ordersCreateWithoutOrders_organizationInput;
}
