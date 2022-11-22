import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesWhereUniqueInput } from './order-votes-where-unique.input';
import { Type } from 'class-transformer';
import { order_votesUpdateWithoutOrder_votes_terminalsInput } from './order-votes-update-without-order-votes-terminals.input';
import { order_votesCreateWithoutOrder_votes_terminalsInput } from './order-votes-create-without-order-votes-terminals.input';

@InputType()
export class order_votesUpsertWithWhereUniqueWithoutOrder_votes_terminalsInput {

    @Field(() => order_votesWhereUniqueInput, {nullable:false})
    @Type(() => order_votesWhereUniqueInput)
    where!: order_votesWhereUniqueInput;

    @Field(() => order_votesUpdateWithoutOrder_votes_terminalsInput, {nullable:false})
    @Type(() => order_votesUpdateWithoutOrder_votes_terminalsInput)
    update!: order_votesUpdateWithoutOrder_votes_terminalsInput;

    @Field(() => order_votesCreateWithoutOrder_votes_terminalsInput, {nullable:false})
    @Type(() => order_votesCreateWithoutOrder_votes_terminalsInput)
    create!: order_votesCreateWithoutOrder_votes_terminalsInput;
}
