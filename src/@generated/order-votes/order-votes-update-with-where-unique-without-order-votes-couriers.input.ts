import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesWhereUniqueInput } from './order-votes-where-unique.input';
import { Type } from 'class-transformer';
import { order_votesUpdateWithoutOrder_votes_couriersInput } from './order-votes-update-without-order-votes-couriers.input';

@InputType()
export class order_votesUpdateWithWhereUniqueWithoutOrder_votes_couriersInput {

    @Field(() => order_votesWhereUniqueInput, {nullable:false})
    @Type(() => order_votesWhereUniqueInput)
    where!: order_votesWhereUniqueInput;

    @Field(() => order_votesUpdateWithoutOrder_votes_couriersInput, {nullable:false})
    @Type(() => order_votesUpdateWithoutOrder_votes_couriersInput)
    data!: order_votesUpdateWithoutOrder_votes_couriersInput;
}
