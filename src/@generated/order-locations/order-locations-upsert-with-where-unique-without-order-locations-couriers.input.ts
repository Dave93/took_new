import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsWhereUniqueInput } from './order-locations-where-unique.input';
import { Type } from 'class-transformer';
import { order_locationsUpdateWithoutOrder_locations_couriersInput } from './order-locations-update-without-order-locations-couriers.input';
import { order_locationsCreateWithoutOrder_locations_couriersInput } from './order-locations-create-without-order-locations-couriers.input';

@InputType()
export class order_locationsUpsertWithWhereUniqueWithoutOrder_locations_couriersInput {

    @Field(() => order_locationsWhereUniqueInput, {nullable:false})
    @Type(() => order_locationsWhereUniqueInput)
    where!: order_locationsWhereUniqueInput;

    @Field(() => order_locationsUpdateWithoutOrder_locations_couriersInput, {nullable:false})
    @Type(() => order_locationsUpdateWithoutOrder_locations_couriersInput)
    update!: order_locationsUpdateWithoutOrder_locations_couriersInput;

    @Field(() => order_locationsCreateWithoutOrder_locations_couriersInput, {nullable:false})
    @Type(() => order_locationsCreateWithoutOrder_locations_couriersInput)
    create!: order_locationsCreateWithoutOrder_locations_couriersInput;
}
