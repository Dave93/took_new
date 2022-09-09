import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_statusWhereInput } from '../order-status/order-status-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyorderStatusArgs {

    @Field(() => order_statusWhereInput, {nullable:true})
    @Type(() => order_statusWhereInput)
    where?: order_statusWhereInput;
}
