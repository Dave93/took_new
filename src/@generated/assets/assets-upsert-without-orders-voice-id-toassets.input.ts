import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { assetsUpdateWithoutOrders_voice_idToassetsInput } from './assets-update-without-orders-voice-id-toassets.input';
import { Type } from 'class-transformer';
import { assetsCreateWithoutOrders_voice_idToassetsInput } from './assets-create-without-orders-voice-id-toassets.input';

@InputType()
export class assetsUpsertWithoutOrders_voice_idToassetsInput {

    @Field(() => assetsUpdateWithoutOrders_voice_idToassetsInput, {nullable:false})
    @Type(() => assetsUpdateWithoutOrders_voice_idToassetsInput)
    update!: assetsUpdateWithoutOrders_voice_idToassetsInput;

    @Field(() => assetsCreateWithoutOrders_voice_idToassetsInput, {nullable:false})
    @Type(() => assetsCreateWithoutOrders_voice_idToassetsInput)
    create!: assetsCreateWithoutOrders_voice_idToassetsInput;
}
