import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateManyOrders_couriersInput } from './orders-create-many-orders-couriers.input';
import { Type } from 'class-transformer';

@InputType()
export class ordersCreateManyOrders_couriersInputEnvelope {

    @Field(() => [ordersCreateManyOrders_couriersInput], {nullable:false})
    @Type(() => ordersCreateManyOrders_couriersInput)
    data!: Array<ordersCreateManyOrders_couriersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
