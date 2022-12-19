import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { assetsCreateWithoutOrders_voice_idToassetsInput } from './assets-create-without-orders-voice-id-toassets.input';
import { Type } from 'class-transformer';
import { assetsCreateOrConnectWithoutOrders_voice_idToassetsInput } from './assets-create-or-connect-without-orders-voice-id-toassets.input';
import { assetsWhereUniqueInput } from './assets-where-unique.input';

@InputType()
export class assetsCreateNestedOneWithoutOrders_voice_idToassetsInput {

    @Field(() => assetsCreateWithoutOrders_voice_idToassetsInput, {nullable:true})
    @Type(() => assetsCreateWithoutOrders_voice_idToassetsInput)
    create?: assetsCreateWithoutOrders_voice_idToassetsInput;

    @Field(() => assetsCreateOrConnectWithoutOrders_voice_idToassetsInput, {nullable:true})
    @Type(() => assetsCreateOrConnectWithoutOrders_voice_idToassetsInput)
    connectOrCreate?: assetsCreateOrConnectWithoutOrders_voice_idToassetsInput;

    @Field(() => assetsWhereUniqueInput, {nullable:true})
    @Type(() => assetsWhereUniqueInput)
    connect?: assetsWhereUniqueInput;
}
