import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateManyOrders_voice_idToassetsInput } from './orders-create-many-orders-voice-id-toassets.input';
import { Type } from 'class-transformer';

@InputType()
export class ordersCreateManyOrders_voice_idToassetsInputEnvelope {

    @Field(() => [ordersCreateManyOrders_voice_idToassetsInput], {nullable:false})
    @Type(() => ordersCreateManyOrders_voice_idToassetsInput)
    data!: Array<ordersCreateManyOrders_voice_idToassetsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
