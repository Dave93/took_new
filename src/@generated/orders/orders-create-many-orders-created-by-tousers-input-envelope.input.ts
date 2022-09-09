import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateManyOrders_created_byTousersInput } from './orders-create-many-orders-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class ordersCreateManyOrders_created_byTousersInputEnvelope {

    @Field(() => [ordersCreateManyOrders_created_byTousersInput], {nullable:false})
    @Type(() => ordersCreateManyOrders_created_byTousersInput)
    data!: Array<ordersCreateManyOrders_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
