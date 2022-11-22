import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_votesWhereUniqueInput } from '../order-votes/order-votes-where-unique.input';
import { Type } from 'class-transformer';
import { order_votesCreateInput } from '../order-votes/order-votes-create.input';
import { order_votesUpdateInput } from '../order-votes/order-votes-update.input';

@ArgsType()
export class UpsertOneorderVotesArgs {

    @Field(() => order_votesWhereUniqueInput, {nullable:false})
    @Type(() => order_votesWhereUniqueInput)
    where!: order_votesWhereUniqueInput;

    @Field(() => order_votesCreateInput, {nullable:false})
    @Type(() => order_votesCreateInput)
    create!: order_votesCreateInput;

    @Field(() => order_votesUpdateInput, {nullable:false})
    @Type(() => order_votesUpdateInput)
    update!: order_votesUpdateInput;
}
