import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsWhereUniqueInput } from './order-locations-where-unique.input';
import { Type } from 'class-transformer';
import { order_locationsCreateWithoutOrder_locations_ordersInput } from './order-locations-create-without-order-locations-orders.input';

@InputType()
export class order_locationsCreateOrConnectWithoutOrder_locations_ordersInput {

    @Field(() => order_locationsWhereUniqueInput, {nullable:false})
    @Type(() => order_locationsWhereUniqueInput)
    where!: order_locationsWhereUniqueInput;

    @Field(() => order_locationsCreateWithoutOrder_locations_ordersInput, {nullable:false})
    @Type(() => order_locationsCreateWithoutOrder_locations_ordersInput)
    create!: order_locationsCreateWithoutOrder_locations_ordersInput;
}
