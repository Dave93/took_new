import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersUpdateWithoutOrder_locations_ordersInput } from './orders-update-without-order-locations-orders.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrder_locations_ordersInput } from './orders-create-without-order-locations-orders.input';

@InputType()
export class ordersUpsertWithoutOrder_locations_ordersInput {

    @Field(() => ordersUpdateWithoutOrder_locations_ordersInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrder_locations_ordersInput)
    update!: ordersUpdateWithoutOrder_locations_ordersInput;

    @Field(() => ordersCreateWithoutOrder_locations_ordersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrder_locations_ordersInput)
    create!: ordersCreateWithoutOrder_locations_ordersInput;
}
