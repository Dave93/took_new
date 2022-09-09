import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateManyOrders_order_statusInput } from './orders-create-many-orders-order-status.input';
import { Type } from 'class-transformer';

@InputType()
export class ordersCreateManyOrders_order_statusInputEnvelope {

    @Field(() => [ordersCreateManyOrders_order_statusInput], {nullable:false})
    @Type(() => ordersCreateManyOrders_order_statusInput)
    data!: Array<ordersCreateManyOrders_order_statusInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
