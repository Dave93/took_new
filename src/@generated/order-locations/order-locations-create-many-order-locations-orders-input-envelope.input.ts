import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsCreateManyOrder_locations_ordersInput } from './order-locations-create-many-order-locations-orders.input';
import { Type } from 'class-transformer';

@InputType()
export class order_locationsCreateManyOrder_locations_ordersInputEnvelope {

    @Field(() => [order_locationsCreateManyOrder_locations_ordersInput], {nullable:false})
    @Type(() => order_locationsCreateManyOrder_locations_ordersInput)
    data!: Array<order_locationsCreateManyOrder_locations_ordersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
