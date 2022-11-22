import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesWhereUniqueInput } from './order-votes-where-unique.input';
import { Type } from 'class-transformer';
import { order_votesUpdateWithoutOrder_votes_ordersInput } from './order-votes-update-without-order-votes-orders.input';

@InputType()
export class order_votesUpdateWithWhereUniqueWithoutOrder_votes_ordersInput {

    @Field(() => order_votesWhereUniqueInput, {nullable:false})
    @Type(() => order_votesWhereUniqueInput)
    where!: order_votesWhereUniqueInput;

    @Field(() => order_votesUpdateWithoutOrder_votes_ordersInput, {nullable:false})
    @Type(() => order_votesUpdateWithoutOrder_votes_ordersInput)
    data!: order_votesUpdateWithoutOrder_votes_ordersInput;
}
