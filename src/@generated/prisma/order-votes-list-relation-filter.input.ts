import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesWhereInput } from '../order-votes/order-votes-where.input';

@InputType()
export class Order_votesListRelationFilter {

    @Field(() => order_votesWhereInput, {nullable:true})
    every?: order_votesWhereInput;

    @Field(() => order_votesWhereInput, {nullable:true})
    some?: order_votesWhereInput;

    @Field(() => order_votesWhereInput, {nullable:true})
    none?: order_votesWhereInput;
}
