import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_votesCreateWithoutOrder_votes_created_byTousersInput } from './order-votes-create-without-order-votes-created-by-tousers.input';
import { Type } from 'class-transformer';
import { order_votesCreateOrConnectWithoutOrder_votes_created_byTousersInput } from './order-votes-create-or-connect-without-order-votes-created-by-tousers.input';
import { order_votesUpsertWithWhereUniqueWithoutOrder_votes_created_byTousersInput } from './order-votes-upsert-with-where-unique-without-order-votes-created-by-tousers.input';
import { order_votesCreateManyOrder_votes_created_byTousersInputEnvelope } from './order-votes-create-many-order-votes-created-by-tousers-input-envelope.input';
import { order_votesWhereUniqueInput } from './order-votes-where-unique.input';
import { order_votesUpdateWithWhereUniqueWithoutOrder_votes_created_byTousersInput } from './order-votes-update-with-where-unique-without-order-votes-created-by-tousers.input';
import { order_votesUpdateManyWithWhereWithoutOrder_votes_created_byTousersInput } from './order-votes-update-many-with-where-without-order-votes-created-by-tousers.input';
import { order_votesScalarWhereInput } from './order-votes-scalar-where.input';

@InputType()
export class order_votesUncheckedUpdateManyWithoutOrder_votes_created_byTousersNestedInput {

    @Field(() => [order_votesCreateWithoutOrder_votes_created_byTousersInput], {nullable:true})
    @Type(() => order_votesCreateWithoutOrder_votes_created_byTousersInput)
    create?: Array<order_votesCreateWithoutOrder_votes_created_byTousersInput>;

    @Field(() => [order_votesCreateOrConnectWithoutOrder_votes_created_byTousersInput], {nullable:true})
    @Type(() => order_votesCreateOrConnectWithoutOrder_votes_created_byTousersInput)
    connectOrCreate?: Array<order_votesCreateOrConnectWithoutOrder_votes_created_byTousersInput>;

    @Field(() => [order_votesUpsertWithWhereUniqueWithoutOrder_votes_created_byTousersInput], {nullable:true})
    @Type(() => order_votesUpsertWithWhereUniqueWithoutOrder_votes_created_byTousersInput)
    upsert?: Array<order_votesUpsertWithWhereUniqueWithoutOrder_votes_created_byTousersInput>;

    @Field(() => order_votesCreateManyOrder_votes_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => order_votesCreateManyOrder_votes_created_byTousersInputEnvelope)
    createMany?: order_votesCreateManyOrder_votes_created_byTousersInputEnvelope;

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

    @Field(() => [order_votesUpdateWithWhereUniqueWithoutOrder_votes_created_byTousersInput], {nullable:true})
    @Type(() => order_votesUpdateWithWhereUniqueWithoutOrder_votes_created_byTousersInput)
    update?: Array<order_votesUpdateWithWhereUniqueWithoutOrder_votes_created_byTousersInput>;

    @Field(() => [order_votesUpdateManyWithWhereWithoutOrder_votes_created_byTousersInput], {nullable:true})
    @Type(() => order_votesUpdateManyWithWhereWithoutOrder_votes_created_byTousersInput)
    updateMany?: Array<order_votesUpdateManyWithWhereWithoutOrder_votes_created_byTousersInput>;

    @Field(() => [order_votesScalarWhereInput], {nullable:true})
    @Type(() => order_votesScalarWhereInput)
    deleteMany?: Array<order_votesScalarWhereInput>;
}
