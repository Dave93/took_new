import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_votesWhereInput } from '../order-votes/order-votes-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyorderVotesArgs {

    @Field(() => order_votesWhereInput, {nullable:true})
    @Type(() => order_votesWhereInput)
    where?: order_votesWhereInput;
}
