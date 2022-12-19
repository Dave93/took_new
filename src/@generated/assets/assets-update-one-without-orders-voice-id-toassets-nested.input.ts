import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { assetsCreateWithoutOrders_voice_idToassetsInput } from './assets-create-without-orders-voice-id-toassets.input';
import { Type } from 'class-transformer';
import { assetsCreateOrConnectWithoutOrders_voice_idToassetsInput } from './assets-create-or-connect-without-orders-voice-id-toassets.input';
import { assetsUpsertWithoutOrders_voice_idToassetsInput } from './assets-upsert-without-orders-voice-id-toassets.input';
import { assetsWhereUniqueInput } from './assets-where-unique.input';
import { assetsUpdateWithoutOrders_voice_idToassetsInput } from './assets-update-without-orders-voice-id-toassets.input';

@InputType()
export class assetsUpdateOneWithoutOrders_voice_idToassetsNestedInput {

    @Field(() => assetsCreateWithoutOrders_voice_idToassetsInput, {nullable:true})
    @Type(() => assetsCreateWithoutOrders_voice_idToassetsInput)
    create?: assetsCreateWithoutOrders_voice_idToassetsInput;

    @Field(() => assetsCreateOrConnectWithoutOrders_voice_idToassetsInput, {nullable:true})
    @Type(() => assetsCreateOrConnectWithoutOrders_voice_idToassetsInput)
    connectOrCreate?: assetsCreateOrConnectWithoutOrders_voice_idToassetsInput;

    @Field(() => assetsUpsertWithoutOrders_voice_idToassetsInput, {nullable:true})
    @Type(() => assetsUpsertWithoutOrders_voice_idToassetsInput)
    upsert?: assetsUpsertWithoutOrders_voice_idToassetsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => assetsWhereUniqueInput, {nullable:true})
    @Type(() => assetsWhereUniqueInput)
    connect?: assetsWhereUniqueInput;

    @Field(() => assetsUpdateWithoutOrders_voice_idToassetsInput, {nullable:true})
    @Type(() => assetsUpdateWithoutOrders_voice_idToassetsInput)
    update?: assetsUpdateWithoutOrders_voice_idToassetsInput;
}
