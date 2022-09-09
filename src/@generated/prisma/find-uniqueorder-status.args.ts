import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_statusWhereUniqueInput } from '../order-status/order-status-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueorderStatusArgs {

    @Field(() => order_statusWhereUniqueInput, {nullable:false})
    @Type(() => order_statusWhereUniqueInput)
    where!: order_statusWhereUniqueInput;
}
