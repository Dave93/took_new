import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesCreateWithoutOrder_votes_ordersInput } from './order-votes-create-without-order-votes-orders.input';
import { Type } from 'class-transformer';
import { order_votesCreateOrConnectWithoutOrder_votes_ordersInput } from './order-votes-create-or-connect-without-order-votes-orders.input';
import { order_votesCreateManyOrder_votes_ordersInputEnvelope } from './order-votes-create-many-order-votes-orders-input-envelope.input';
import { order_votesWhereUniqueInput } from './order-votes-where-unique.input';

@InputType()
export class order_votesCreateNestedManyWithoutOrder_votes_ordersInput {

    @Field(() => [order_votesCreateWithoutOrder_votes_ordersInput], {nullable:true})
    @Type(() => order_votesCreateWithoutOrder_votes_ordersInput)
    create?: Array<order_votesCreateWithoutOrder_votes_ordersInput>;

    @Field(() => [order_votesCreateOrConnectWithoutOrder_votes_ordersInput], {nullable:true})
    @Type(() => order_votesCreateOrConnectWithoutOrder_votes_ordersInput)
    connectOrCreate?: Array<order_votesCreateOrConnectWithoutOrder_votes_ordersInput>;

    @Field(() => order_votesCreateManyOrder_votes_ordersInputEnvelope, {nullable:true})
    @Type(() => order_votesCreateManyOrder_votes_ordersInputEnvelope)
    createMany?: order_votesCreateManyOrder_votes_ordersInputEnvelope;

    @Field(() => [order_votesWhereUniqueInput], {nullable:true})
    @Type(() => order_votesWhereUniqueInput)
    connect?: Array<order_votesWhereUniqueInput>;
}
