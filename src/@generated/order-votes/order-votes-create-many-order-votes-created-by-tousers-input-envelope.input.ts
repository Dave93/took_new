import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesCreateManyOrder_votes_created_byTousersInput } from './order-votes-create-many-order-votes-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class order_votesCreateManyOrder_votes_created_byTousersInputEnvelope {

    @Field(() => [order_votesCreateManyOrder_votes_created_byTousersInput], {nullable:false})
    @Type(() => order_votesCreateManyOrder_votes_created_byTousersInput)
    data!: Array<order_votesCreateManyOrder_votes_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
