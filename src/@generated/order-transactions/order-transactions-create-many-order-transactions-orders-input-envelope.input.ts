import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsCreateManyOrder_transactions_ordersInput } from './order-transactions-create-many-order-transactions-orders.input';
import { Type } from 'class-transformer';

@InputType()
export class order_transactionsCreateManyOrder_transactions_ordersInputEnvelope {

    @Field(() => [order_transactionsCreateManyOrder_transactions_ordersInput], {nullable:false})
    @Type(() => order_transactionsCreateManyOrder_transactions_ordersInput)
    data!: Array<order_transactionsCreateManyOrder_transactions_ordersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
