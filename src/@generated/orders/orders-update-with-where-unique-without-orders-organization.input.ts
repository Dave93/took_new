import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrders_organizationInput } from './orders-update-without-orders-organization.input';

@InputType()
export class ordersUpdateWithWhereUniqueWithoutOrders_organizationInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrders_organizationInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrders_organizationInput)
    data!: ordersUpdateWithoutOrders_organizationInput;
}
