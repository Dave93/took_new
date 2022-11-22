import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsCreateManyOrder_transactions_terminalsInput } from './order-transactions-create-many-order-transactions-terminals.input';
import { Type } from 'class-transformer';

@InputType()
export class order_transactionsCreateManyOrder_transactions_terminalsInputEnvelope {

    @Field(() => [order_transactionsCreateManyOrder_transactions_terminalsInput], {nullable:false})
    @Type(() => order_transactionsCreateManyOrder_transactions_terminalsInput)
    data!: Array<order_transactionsCreateManyOrder_transactions_terminalsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
