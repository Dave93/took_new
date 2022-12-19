import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_voice_idToassetsInput } from './orders-create-without-orders-voice-id-toassets.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_voice_idToassetsInput } from './orders-create-or-connect-without-orders-voice-id-toassets.input';
import { ordersUpsertWithWhereUniqueWithoutOrders_voice_idToassetsInput } from './orders-upsert-with-where-unique-without-orders-voice-id-toassets.input';
import { ordersCreateManyOrders_voice_idToassetsInputEnvelope } from './orders-create-many-orders-voice-id-toassets-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { ordersUpdateWithWhereUniqueWithoutOrders_voice_idToassetsInput } from './orders-update-with-where-unique-without-orders-voice-id-toassets.input';
import { ordersUpdateManyWithWhereWithoutOrders_voice_idToassetsInput } from './orders-update-many-with-where-without-orders-voice-id-toassets.input';
import { ordersScalarWhereInput } from './orders-scalar-where.input';

@InputType()
export class ordersUpdateManyWithoutOrders_voice_idToassetsNestedInput {

    @Field(() => [ordersCreateWithoutOrders_voice_idToassetsInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_voice_idToassetsInput)
    create?: Array<ordersCreateWithoutOrders_voice_idToassetsInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_voice_idToassetsInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_voice_idToassetsInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_voice_idToassetsInput>;

    @Field(() => [ordersUpsertWithWhereUniqueWithoutOrders_voice_idToassetsInput], {nullable:true})
    @Type(() => ordersUpsertWithWhereUniqueWithoutOrders_voice_idToassetsInput)
    upsert?: Array<ordersUpsertWithWhereUniqueWithoutOrders_voice_idToassetsInput>;

    @Field(() => ordersCreateManyOrders_voice_idToassetsInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_voice_idToassetsInputEnvelope)
    createMany?: ordersCreateManyOrders_voice_idToassetsInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    set?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    disconnect?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    delete?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersUpdateWithWhereUniqueWithoutOrders_voice_idToassetsInput], {nullable:true})
    @Type(() => ordersUpdateWithWhereUniqueWithoutOrders_voice_idToassetsInput)
    update?: Array<ordersUpdateWithWhereUniqueWithoutOrders_voice_idToassetsInput>;

    @Field(() => [ordersUpdateManyWithWhereWithoutOrders_voice_idToassetsInput], {nullable:true})
    @Type(() => ordersUpdateManyWithWhereWithoutOrders_voice_idToassetsInput)
    updateMany?: Array<ordersUpdateManyWithWhereWithoutOrders_voice_idToassetsInput>;

    @Field(() => [ordersScalarWhereInput], {nullable:true})
    @Type(() => ordersScalarWhereInput)
    deleteMany?: Array<ordersScalarWhereInput>;
}
