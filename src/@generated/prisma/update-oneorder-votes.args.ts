import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_votesUpdateInput } from '../order-votes/order-votes-update.input';
import { Type } from 'class-transformer';
import { order_votesWhereUniqueInput } from '../order-votes/order-votes-where-unique.input';

@ArgsType()
export class UpdateOneorderVotesArgs {

    @Field(() => order_votesUpdateInput, {nullable:false})
    @Type(() => order_votesUpdateInput)
    data!: order_votesUpdateInput;

    @Field(() => order_votesWhereUniqueInput, {nullable:false})
    @Type(() => order_votesWhereUniqueInput)
    where!: order_votesWhereUniqueInput;
}
