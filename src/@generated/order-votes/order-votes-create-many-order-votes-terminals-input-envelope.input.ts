import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesCreateManyOrder_votes_terminalsInput } from './order-votes-create-many-order-votes-terminals.input';
import { Type } from 'class-transformer';

@InputType()
export class order_votesCreateManyOrder_votes_terminalsInputEnvelope {

    @Field(() => [order_votesCreateManyOrder_votes_terminalsInput], {nullable:false})
    @Type(() => order_votesCreateManyOrder_votes_terminalsInput)
    data!: Array<order_votesCreateManyOrder_votes_terminalsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
