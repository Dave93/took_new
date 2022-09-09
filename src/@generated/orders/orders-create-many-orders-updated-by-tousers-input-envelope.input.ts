import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateManyOrders_updated_byTousersInput } from './orders-create-many-orders-updated-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class ordersCreateManyOrders_updated_byTousersInputEnvelope {

    @Field(() => [ordersCreateManyOrders_updated_byTousersInput], {nullable:false})
    @Type(() => ordersCreateManyOrders_updated_byTousersInput)
    data!: Array<ordersCreateManyOrders_updated_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
