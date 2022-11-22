import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_votesUpdateManyMutationInput } from '../order-votes/order-votes-update-many-mutation.input';
import { Type } from 'class-transformer';
import { order_votesWhereInput } from '../order-votes/order-votes-where.input';

@ArgsType()
export class UpdateManyorderVotesArgs {

    @Field(() => order_votesUpdateManyMutationInput, {nullable:false})
    @Type(() => order_votesUpdateManyMutationInput)
    data!: order_votesUpdateManyMutationInput;

    @Field(() => order_votesWhereInput, {nullable:true})
    @Type(() => order_votesWhereInput)
    where?: order_votesWhereInput;
}
