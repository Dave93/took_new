import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateManyOrders_customersInput } from './orders-create-many-orders-customers.input';
import { Type } from 'class-transformer';

@InputType()
export class ordersCreateManyOrders_customersInputEnvelope {

    @Field(() => [ordersCreateManyOrders_customersInput], {nullable:false})
    @Type(() => ordersCreateManyOrders_customersInput)
    data!: Array<ordersCreateManyOrders_customersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
