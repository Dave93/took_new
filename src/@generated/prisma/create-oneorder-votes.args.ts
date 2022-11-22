import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_votesCreateInput } from '../order-votes/order-votes-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneorderVotesArgs {

    @Field(() => order_votesCreateInput, {nullable:false})
    @Type(() => order_votesCreateInput)
    data!: order_votesCreateInput;
}
