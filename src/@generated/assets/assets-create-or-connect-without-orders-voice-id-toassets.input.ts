import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { assetsWhereUniqueInput } from './assets-where-unique.input';
import { Type } from 'class-transformer';
import { assetsCreateWithoutOrders_voice_idToassetsInput } from './assets-create-without-orders-voice-id-toassets.input';

@InputType()
export class assetsCreateOrConnectWithoutOrders_voice_idToassetsInput {

    @Field(() => assetsWhereUniqueInput, {nullable:false})
    @Type(() => assetsWhereUniqueInput)
    where!: assetsWhereUniqueInput;

    @Field(() => assetsCreateWithoutOrders_voice_idToassetsInput, {nullable:false})
    @Type(() => assetsCreateWithoutOrders_voice_idToassetsInput)
    create!: assetsCreateWithoutOrders_voice_idToassetsInput;
}
