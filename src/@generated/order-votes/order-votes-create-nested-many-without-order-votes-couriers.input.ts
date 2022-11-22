import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesCreateWithoutOrder_votes_couriersInput } from './order-votes-create-without-order-votes-couriers.input';
import { Type } from 'class-transformer';
import { order_votesCreateOrConnectWithoutOrder_votes_couriersInput } from './order-votes-create-or-connect-without-order-votes-couriers.input';
import { order_votesCreateManyOrder_votes_couriersInputEnvelope } from './order-votes-create-many-order-votes-couriers-input-envelope.input';
import { order_votesWhereUniqueInput } from './order-votes-where-unique.input';

@InputType()
export class order_votesCreateNestedManyWithoutOrder_votes_couriersInput {

    @Field(() => [order_votesCreateWithoutOrder_votes_couriersInput], {nullable:true})
    @Type(() => order_votesCreateWithoutOrder_votes_couriersInput)
    create?: Array<order_votesCreateWithoutOrder_votes_couriersInput>;

    @Field(() => [order_votesCreateOrConnectWithoutOrder_votes_couriersInput], {nullable:true})
    @Type(() => order_votesCreateOrConnectWithoutOrder_votes_couriersInput)
    connectOrCreate?: Array<order_votesCreateOrConnectWithoutOrder_votes_couriersInput>;

    @Field(() => order_votesCreateManyOrder_votes_couriersInputEnvelope, {nullable:true})
    @Type(() => order_votesCreateManyOrder_votes_couriersInputEnvelope)
    createMany?: order_votesCreateManyOrder_votes_couriersInputEnvelope;

    @Field(() => [order_votesWhereUniqueInput], {nullable:true})
    @Type(() => order_votesWhereUniqueInput)
    connect?: Array<order_votesWhereUniqueInput>;
}
