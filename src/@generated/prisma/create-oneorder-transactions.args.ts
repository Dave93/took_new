import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_transactionsCreateInput } from '../order-transactions/order-transactions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneorderTransactionsArgs {

    @Field(() => order_transactionsCreateInput, {nullable:false})
    @Type(() => order_transactionsCreateInput)
    data!: order_transactionsCreateInput;
}
