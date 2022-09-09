import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_statusCreateInput } from '../order-status/order-status-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneorderStatusArgs {

    @Field(() => order_statusCreateInput, {nullable:false})
    @Type(() => order_statusCreateInput)
    data!: order_statusCreateInput;
}
