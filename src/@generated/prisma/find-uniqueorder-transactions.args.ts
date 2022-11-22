import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_transactionsWhereUniqueInput } from '../order-transactions/order-transactions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueorderTransactionsArgs {

    @Field(() => order_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => order_transactionsWhereUniqueInput)
    where!: order_transactionsWhereUniqueInput;
}
