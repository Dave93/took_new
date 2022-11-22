import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesCreateWithoutOrder_votes_couriersInput } from './order-votes-create-without-order-votes-couriers.input';
import { Type } from 'class-transformer';
import { order_votesCreateOrConnectWithoutOrder_votes_couriersInput } from './order-votes-create-or-connect-without-order-votes-couriers.input';
import { order_votesUpsertWithWhereUniqueWithoutOrder_votes_couriersInput } from './order-votes-upsert-with-where-unique-without-order-votes-couriers.input';
import { order_votesCreateManyOrder_votes_couriersInputEnvelope } from './order-votes-create-many-order-votes-couriers-input-envelope.input';
import { order_votesWhereUniqueInput } from './order-votes-where-unique.input';
import { order_votesUpdateWithWhereUniqueWithoutOrder_votes_couriersInput } from './order-votes-update-with-where-unique-without-order-votes-couriers.input';
import { order_votesUpdateManyWithWhereWithoutOrder_votes_couriersInput } from './order-votes-update-many-with-where-without-order-votes-couriers.input';
import { order_votesScalarWhereInput } from './order-votes-scalar-where.input';

@InputType()
export class order_votesUncheckedUpdateManyWithoutOrder_votes_couriersNestedInput {

    @Field(() => [order_votesCreateWithoutOrder_votes_couriersInput], {nullable:true})
    @Type(() => order_votesCreateWithoutOrder_votes_couriersInput)
    create?: Array<order_votesCreateWithoutOrder_votes_couriersInput>;

    @Field(() => [order_votesCreateOrConnectWithoutOrder_votes_couriersInput], {nullable:true})
    @Type(() => order_votesCreateOrConnectWithoutOrder_votes_couriersInput)
    connectOrCreate?: Array<order_votesCreateOrConnectWithoutOrder_votes_couriersInput>;

    @Field(() => [order_votesUpsertWithWhereUniqueWithoutOrder_votes_couriersInput], {nullable:true})
    @Type(() => order_votesUpsertWithWhereUniqueWithoutOrder_votes_couriersInput)
    upsert?: Array<order_votesUpsertWithWhereUniqueWithoutOrder_votes_couriersInput>;

    @Field(() => order_votesCreateManyOrder_votes_couriersInputEnvelope, {nullable:true})
    @Type(() => order_votesCreateManyOrder_votes_couriersInputEnvelope)
    createMany?: order_votesCreateManyOrder_votes_couriersInputEnvelope;

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

    @Field(() => [order_votesUpdateWithWhereUniqueWithoutOrder_votes_couriersInput], {nullable:true})
    @Type(() => order_votesUpdateWithWhereUniqueWithoutOrder_votes_couriersInput)
    update?: Array<order_votesUpdateWithWhereUniqueWithoutOrder_votes_couriersInput>;

    @Field(() => [order_votesUpdateManyWithWhereWithoutOrder_votes_couriersInput], {nullable:true})
    @Type(() => order_votesUpdateManyWithWhereWithoutOrder_votes_couriersInput)
    updateMany?: Array<order_votesUpdateManyWithWhereWithoutOrder_votes_couriersInput>;

    @Field(() => [order_votesScalarWhereInput], {nullable:true})
    @Type(() => order_votesScalarWhereInput)
    deleteMany?: Array<order_votesScalarWhereInput>;
}
