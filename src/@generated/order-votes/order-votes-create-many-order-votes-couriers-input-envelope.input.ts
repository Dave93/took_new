import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesCreateManyOrder_votes_couriersInput } from './order-votes-create-many-order-votes-couriers.input';
import { Type } from 'class-transformer';

@InputType()
export class order_votesCreateManyOrder_votes_couriersInputEnvelope {

    @Field(() => [order_votesCreateManyOrder_votes_couriersInput], {nullable:false})
    @Type(() => order_votesCreateManyOrder_votes_couriersInput)
    data!: Array<order_votesCreateManyOrder_votes_couriersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
