import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsCreateManyOrder_locations_couriersInput } from './order-locations-create-many-order-locations-couriers.input';
import { Type } from 'class-transformer';

@InputType()
export class order_locationsCreateManyOrder_locations_couriersInputEnvelope {

    @Field(() => [order_locationsCreateManyOrder_locations_couriersInput], {nullable:false})
    @Type(() => order_locationsCreateManyOrder_locations_couriersInput)
    data!: Array<order_locationsCreateManyOrder_locations_couriersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
