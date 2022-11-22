import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesCreateWithoutOrder_votes_created_byTousersInput } from './order-votes-create-without-order-votes-created-by-tousers.input';
import { Type } from 'class-transformer';
import { order_votesCreateOrConnectWithoutOrder_votes_created_byTousersInput } from './order-votes-create-or-connect-without-order-votes-created-by-tousers.input';
import { order_votesCreateManyOrder_votes_created_byTousersInputEnvelope } from './order-votes-create-many-order-votes-created-by-tousers-input-envelope.input';
import { order_votesWhereUniqueInput } from './order-votes-where-unique.input';

@InputType()
export class order_votesCreateNestedManyWithoutOrder_votes_created_byTousersInput {

    @Field(() => [order_votesCreateWithoutOrder_votes_created_byTousersInput], {nullable:true})
    @Type(() => order_votesCreateWithoutOrder_votes_created_byTousersInput)
    create?: Array<order_votesCreateWithoutOrder_votes_created_byTousersInput>;

    @Field(() => [order_votesCreateOrConnectWithoutOrder_votes_created_byTousersInput], {nullable:true})
    @Type(() => order_votesCreateOrConnectWithoutOrder_votes_created_byTousersInput)
    connectOrCreate?: Array<order_votesCreateOrConnectWithoutOrder_votes_created_byTousersInput>;

    @Field(() => order_votesCreateManyOrder_votes_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => order_votesCreateManyOrder_votes_created_byTousersInputEnvelope)
    createMany?: order_votesCreateManyOrder_votes_created_byTousersInputEnvelope;

    @Field(() => [order_votesWhereUniqueInput], {nullable:true})
    @Type(() => order_votesWhereUniqueInput)
    connect?: Array<order_votesWhereUniqueInput>;
}
