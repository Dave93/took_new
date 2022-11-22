import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_transactionsWhereInput } from '../order-transactions/order-transactions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyorderTransactionsArgs {

    @Field(() => order_transactionsWhereInput, {nullable:true})
    @Type(() => order_transactionsWhereInput)
    where?: order_transactionsWhereInput;
}
