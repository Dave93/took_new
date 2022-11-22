import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsCreateManyOrder_transactions_couriersInput } from './order-transactions-create-many-order-transactions-couriers.input';
import { Type } from 'class-transformer';

@InputType()
export class order_transactionsCreateManyOrder_transactions_couriersInputEnvelope {

    @Field(() => [order_transactionsCreateManyOrder_transactions_couriersInput], {nullable:false})
    @Type(() => order_transactionsCreateManyOrder_transactions_couriersInput)
    data!: Array<order_transactionsCreateManyOrder_transactions_couriersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
