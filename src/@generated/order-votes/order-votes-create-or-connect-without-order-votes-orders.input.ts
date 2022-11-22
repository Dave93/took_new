import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesWhereUniqueInput } from './order-votes-where-unique.input';
import { Type } from 'class-transformer';
import { order_votesCreateWithoutOrder_votes_ordersInput } from './order-votes-create-without-order-votes-orders.input';

@InputType()
export class order_votesCreateOrConnectWithoutOrder_votes_ordersInput {

    @Field(() => order_votesWhereUniqueInput, {nullable:false})
    @Type(() => order_votesWhereUniqueInput)
    where!: order_votesWhereUniqueInput;

    @Field(() => order_votesCreateWithoutOrder_votes_ordersInput, {nullable:false})
    @Type(() => order_votesCreateWithoutOrder_votes_ordersInput)
    create!: order_votesCreateWithoutOrder_votes_ordersInput;
}
