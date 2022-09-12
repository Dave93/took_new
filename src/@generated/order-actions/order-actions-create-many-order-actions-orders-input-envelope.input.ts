import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsCreateManyOrder_actions_ordersInput } from './order-actions-create-many-order-actions-orders.input';
import { Type } from 'class-transformer';

@InputType()
export class order_actionsCreateManyOrder_actions_ordersInputEnvelope {

    @Field(() => [order_actionsCreateManyOrder_actions_ordersInput], {nullable:false})
    @Type(() => order_actionsCreateManyOrder_actions_ordersInput)
    data!: Array<order_actionsCreateManyOrder_actions_ordersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
