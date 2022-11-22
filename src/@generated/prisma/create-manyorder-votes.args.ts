import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_votesCreateManyInput } from '../order-votes/order-votes-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyorderVotesArgs {

    @Field(() => [order_votesCreateManyInput], {nullable:false})
    @Type(() => order_votesCreateManyInput)
    data!: Array<order_votesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
