import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_votesWhereInput } from '../order-votes/order-votes-where.input';
import { Type } from 'class-transformer';
import { order_votesOrderByWithRelationInput } from '../order-votes/order-votes-order-by-with-relation.input';
import { order_votesWhereUniqueInput } from '../order-votes/order-votes-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateorderVotesArgs {

    @Field(() => order_votesWhereInput, {nullable:true})
    @Type(() => order_votesWhereInput)
    where?: order_votesWhereInput;

    @Field(() => [order_votesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<order_votesOrderByWithRelationInput>;

    @Field(() => order_votesWhereUniqueInput, {nullable:true})
    cursor?: order_votesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
