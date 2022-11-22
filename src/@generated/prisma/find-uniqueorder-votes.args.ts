import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_votesWhereUniqueInput } from '../order-votes/order-votes-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueorderVotesArgs {

    @Field(() => order_votesWhereUniqueInput, {nullable:false})
    @Type(() => order_votesWhereUniqueInput)
    where!: order_votesWhereUniqueInput;
}
