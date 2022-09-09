import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateManyOrders_terminalsInput } from './orders-create-many-orders-terminals.input';
import { Type } from 'class-transformer';

@InputType()
export class ordersCreateManyOrders_terminalsInputEnvelope {

    @Field(() => [ordersCreateManyOrders_terminalsInput], {nullable:false})
    @Type(() => ordersCreateManyOrders_terminalsInput)
    data!: Array<ordersCreateManyOrders_terminalsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
