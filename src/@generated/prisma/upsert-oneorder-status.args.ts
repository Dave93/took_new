import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_statusWhereUniqueInput } from '../order-status/order-status-where-unique.input';
import { Type } from 'class-transformer';
import { order_statusCreateInput } from '../order-status/order-status-create.input';
import { order_statusUpdateInput } from '../order-status/order-status-update.input';

@ArgsType()
export class UpsertOneorderStatusArgs {

    @Field(() => order_statusWhereUniqueInput, {nullable:false})
    @Type(() => order_statusWhereUniqueInput)
    where!: order_statusWhereUniqueInput;

    @Field(() => order_statusCreateInput, {nullable:false})
    @Type(() => order_statusCreateInput)
    create!: order_statusCreateInput;

    @Field(() => order_statusUpdateInput, {nullable:false})
    @Type(() => order_statusUpdateInput)
    update!: order_statusUpdateInput;
}
