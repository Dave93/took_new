import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_transactionsUpdateInput } from '../order-transactions/order-transactions-update.input';
import { Type } from 'class-transformer';
import { order_transactionsWhereUniqueInput } from '../order-transactions/order-transactions-where-unique.input';

@ArgsType()
export class UpdateOneorderTransactionsArgs {

    @Field(() => order_transactionsUpdateInput, {nullable:false})
    @Type(() => order_transactionsUpdateInput)
    data!: order_transactionsUpdateInput;

    @Field(() => order_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => order_transactionsWhereUniqueInput)
    where!: order_transactionsWhereUniqueInput;
}
