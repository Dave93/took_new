import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesCreateManyOrder_votes_ordersInput } from './order-votes-create-many-order-votes-orders.input';
import { Type } from 'class-transformer';

@InputType()
export class order_votesCreateManyOrder_votes_ordersInputEnvelope {

    @Field(() => [order_votesCreateManyOrder_votes_ordersInput], {nullable:false})
    @Type(() => order_votesCreateManyOrder_votes_ordersInput)
    data!: Array<order_votesCreateManyOrder_votes_ordersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
