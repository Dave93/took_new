import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsCreateManyOrder_transactions_created_byTousersInput } from './order-transactions-create-many-order-transactions-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class order_transactionsCreateManyOrder_transactions_created_byTousersInputEnvelope {

    @Field(() => [order_transactionsCreateManyOrder_transactions_created_byTousersInput], {nullable:false})
    @Type(() => order_transactionsCreateManyOrder_transactions_created_byTousersInput)
    data!: Array<order_transactionsCreateManyOrder_transactions_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
