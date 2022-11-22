import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsCreateManyOrder_transactions_organizationsInput } from './order-transactions-create-many-order-transactions-organizations.input';
import { Type } from 'class-transformer';

@InputType()
export class order_transactionsCreateManyOrder_transactions_organizationsInputEnvelope {

    @Field(() => [order_transactionsCreateManyOrder_transactions_organizationsInput], {nullable:false})
    @Type(() => order_transactionsCreateManyOrder_transactions_organizationsInput)
    data!: Array<order_transactionsCreateManyOrder_transactions_organizationsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
