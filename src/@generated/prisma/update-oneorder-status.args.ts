import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_statusUpdateInput } from '../order-status/order-status-update.input';
import { Type } from 'class-transformer';
import { order_statusWhereUniqueInput } from '../order-status/order-status-where-unique.input';

@ArgsType()
export class UpdateOneorderStatusArgs {

    @Field(() => order_statusUpdateInput, {nullable:false})
    @Type(() => order_statusUpdateInput)
    data!: order_statusUpdateInput;

    @Field(() => order_statusWhereUniqueInput, {nullable:false})
    @Type(() => order_statusWhereUniqueInput)
    where!: order_statusWhereUniqueInput;
}
