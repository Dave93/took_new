import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_voice_idToassetsInput } from './orders-create-without-orders-voice-id-toassets.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_voice_idToassetsInput } from './orders-create-or-connect-without-orders-voice-id-toassets.input';
import { ordersCreateManyOrders_voice_idToassetsInputEnvelope } from './orders-create-many-orders-voice-id-toassets-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersUncheckedCreateNestedManyWithoutOrders_voice_idToassetsInput {

    @Field(() => [ordersCreateWithoutOrders_voice_idToassetsInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_voice_idToassetsInput)
    create?: Array<ordersCreateWithoutOrders_voice_idToassetsInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_voice_idToassetsInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_voice_idToassetsInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_voice_idToassetsInput>;

    @Field(() => ordersCreateManyOrders_voice_idToassetsInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_voice_idToassetsInputEnvelope)
    createMany?: ordersCreateManyOrders_voice_idToassetsInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<ordersWhereUniqueInput>;
}
