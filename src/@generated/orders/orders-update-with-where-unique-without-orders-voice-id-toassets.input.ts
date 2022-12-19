import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersUpdateWithoutOrders_voice_idToassetsInput } from './orders-update-without-orders-voice-id-toassets.input';

@InputType()
export class ordersUpdateWithWhereUniqueWithoutOrders_voice_idToassetsInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrders_voice_idToassetsInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrders_voice_idToassetsInput)
    data!: ordersUpdateWithoutOrders_voice_idToassetsInput;
}
