import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrders_voice_idToassetsInput } from './orders-create-without-orders-voice-id-toassets.input';

@InputType()
export class ordersCreateOrConnectWithoutOrders_voice_idToassetsInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersCreateWithoutOrders_voice_idToassetsInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrders_voice_idToassetsInput)
    create!: ordersCreateWithoutOrders_voice_idToassetsInput;
}
