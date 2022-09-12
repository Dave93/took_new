import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrder_locations_ordersInput } from './orders-create-without-order-locations-orders.input';

@InputType()
export class ordersCreateOrConnectWithoutOrder_locations_ordersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersCreateWithoutOrder_locations_ordersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrder_locations_ordersInput)
    create!: ordersCreateWithoutOrder_locations_ordersInput;
}
