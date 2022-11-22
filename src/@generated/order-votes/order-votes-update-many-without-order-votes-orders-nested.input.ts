import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesCreateWithoutOrder_votes_ordersInput } from './order-votes-create-without-order-votes-orders.input';
import { Type } from 'class-transformer';
import { order_votesCreateOrConnectWithoutOrder_votes_ordersInput } from './order-votes-create-or-connect-without-order-votes-orders.input';
import { order_votesUpsertWithWhereUniqueWithoutOrder_votes_ordersInput } from './order-votes-upsert-with-where-unique-without-order-votes-orders.input';
import { order_votesCreateManyOrder_votes_ordersInputEnvelope } from './order-votes-create-many-order-votes-orders-input-envelope.input';
import { order_votesWhereUniqueInput } from './order-votes-where-unique.input';
import { order_votesUpdateWithWhereUniqueWithoutOrder_votes_ordersInput } from './order-votes-update-with-where-unique-without-order-votes-orders.input';
import { order_votesUpdateManyWithWhereWithoutOrder_votes_ordersInput } from './order-votes-update-many-with-where-without-order-votes-orders.input';
import { order_votesScalarWhereInput } from './order-votes-scalar-where.input';

@InputType()
export class order_votesUpdateManyWithoutOrder_votes_ordersNestedInput {

    @Field(() => [order_votesCreateWithoutOrder_votes_ordersInput], {nullable:true})
    @Type(() => order_votesCreateWithoutOrder_votes_ordersInput)
    create?: Array<order_votesCreateWithoutOrder_votes_ordersInput>;

    @Field(() => [order_votesCreateOrConnectWithoutOrder_votes_ordersInput], {nullable:true})
    @Type(() => order_votesCreateOrConnectWithoutOrder_votes_ordersInput)
    connectOrCreate?: Array<order_votesCreateOrConnectWithoutOrder_votes_ordersInput>;

    @Field(() => [order_votesUpsertWithWhereUniqueWithoutOrder_votes_ordersInput], {nullable:true})
    @Type(() => order_votesUpsertWithWhereUniqueWithoutOrder_votes_ordersInput)
    upsert?: Array<order_votesUpsertWithWhereUniqueWithoutOrder_votes_ordersInput>;

    @Field(() => order_votesCreateManyOrder_votes_ordersInputEnvelope, {nullable:true})
    @Type(() => order_votesCreateManyOrder_votes_ordersInputEnvelope)
    createMany?: order_votesCreateManyOrder_votes_ordersInputEnvelope;

    @Field(() => [order_votesWhereUniqueInput], {nullable:true})
    @Type(() => order_votesWhereUniqueInput)
    set?: Array<order_votesWhereUniqueInput>;

    @Field(() => [order_votesWhereUniqueInput], {nullable:true})
    @Type(() => order_votesWhereUniqueInput)
    disconnect?: Array<order_votesWhereUniqueInput>;

    @Field(() => [order_votesWhereUniqueInput], {nullable:true})
    @Type(() => order_votesWhereUniqueInput)
    delete?: Array<order_votesWhereUniqueInput>;

    @Field(() => [order_votesWhereUniqueInput], {nullable:true})
    @Type(() => order_votesWhereUniqueInput)
    connect?: Array<order_votesWhereUniqueInput>;

    @Field(() => [order_votesUpdateWithWhereUniqueWithoutOrder_votes_ordersInput], {nullable:true})
    @Type(() => order_votesUpdateWithWhereUniqueWithoutOrder_votes_ordersInput)
    update?: Array<order_votesUpdateWithWhereUniqueWithoutOrder_votes_ordersInput>;

    @Field(() => [order_votesUpdateManyWithWhereWithoutOrder_votes_ordersInput], {nullable:true})
    @Type(() => order_votesUpdateManyWithWhereWithoutOrder_votes_ordersInput)
    updateMany?: Array<order_votesUpdateManyWithWhereWithoutOrder_votes_ordersInput>;

    @Field(() => [order_votesScalarWhereInput], {nullable:true})
    @Type(() => order_votesScalarWhereInput)
    deleteMany?: Array<order_votesScalarWhereInput>;
}
