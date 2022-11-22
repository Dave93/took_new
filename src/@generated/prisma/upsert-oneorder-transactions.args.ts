import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_transactionsWhereUniqueInput } from '../order-transactions/order-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateInput } from '../order-transactions/order-transactions-create.input';
import { order_transactionsUpdateInput } from '../order-transactions/order-transactions-update.input';

@ArgsType()
export class UpsertOneorderTransactionsArgs {

    @Field(() => order_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => order_transactionsWhereUniqueInput)
    where!: order_transactionsWhereUniqueInput;

    @Field(() => order_transactionsCreateInput, {nullable:false})
    @Type(() => order_transactionsCreateInput)
    create!: order_transactionsCreateInput;

    @Field(() => order_transactionsUpdateInput, {nullable:false})
    @Type(() => order_transactionsUpdateInput)
    update!: order_transactionsUpdateInput;
}
