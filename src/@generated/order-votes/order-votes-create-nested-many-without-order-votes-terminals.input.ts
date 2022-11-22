import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesCreateWithoutOrder_votes_terminalsInput } from './order-votes-create-without-order-votes-terminals.input';
import { Type } from 'class-transformer';
import { order_votesCreateOrConnectWithoutOrder_votes_terminalsInput } from './order-votes-create-or-connect-without-order-votes-terminals.input';
import { order_votesCreateManyOrder_votes_terminalsInputEnvelope } from './order-votes-create-many-order-votes-terminals-input-envelope.input';
import { order_votesWhereUniqueInput } from './order-votes-where-unique.input';

@InputType()
export class order_votesCreateNestedManyWithoutOrder_votes_terminalsInput {

    @Field(() => [order_votesCreateWithoutOrder_votes_terminalsInput], {nullable:true})
    @Type(() => order_votesCreateWithoutOrder_votes_terminalsInput)
    create?: Array<order_votesCreateWithoutOrder_votes_terminalsInput>;

    @Field(() => [order_votesCreateOrConnectWithoutOrder_votes_terminalsInput], {nullable:true})
    @Type(() => order_votesCreateOrConnectWithoutOrder_votes_terminalsInput)
    connectOrCreate?: Array<order_votesCreateOrConnectWithoutOrder_votes_terminalsInput>;

    @Field(() => order_votesCreateManyOrder_votes_terminalsInputEnvelope, {nullable:true})
    @Type(() => order_votesCreateManyOrder_votes_terminalsInputEnvelope)
    createMany?: order_votesCreateManyOrder_votes_terminalsInputEnvelope;

    @Field(() => [order_votesWhereUniqueInput], {nullable:true})
    @Type(() => order_votesWhereUniqueInput)
    connect?: Array<order_votesWhereUniqueInput>;
}
