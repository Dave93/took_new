import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { order_transaction_status } from './order-transaction-status.enum';
import { order_transaction_payment_type } from './order-transaction-payment-type.enum';
import { Order_transactionsCountAggregate } from './order-transactions-count-aggregate.output';
import { Order_transactionsAvgAggregate } from './order-transactions-avg-aggregate.output';
import { Order_transactionsSumAggregate } from './order-transactions-sum-aggregate.output';
import { Order_transactionsMinAggregate } from './order-transactions-min-aggregate.output';
import { Order_transactionsMaxAggregate } from './order-transactions-max-aggregate.output';

@ObjectType()
export class Order_transactionsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    order_id?: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:true})
    card_number?: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    balance_before!: number;

    @Field(() => Float, {nullable:false})
    balance_after!: number;

    @Field(() => Float, {nullable:false})
    not_paid_amount!: number;

    @Field(() => order_transaction_status, {nullable:false})
    status!: keyof typeof order_transaction_status;

    @Field(() => order_transaction_payment_type, {nullable:false})
    transaction_payment_type!: keyof typeof order_transaction_payment_type;

    @Field(() => String, {nullable:false})
    transaction_type!: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => String, {nullable:true})
    error_text?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Order_transactionsCountAggregate, {nullable:true})
    _count?: Order_transactionsCountAggregate;

    @Field(() => Order_transactionsAvgAggregate, {nullable:true})
    _avg?: Order_transactionsAvgAggregate;

    @Field(() => Order_transactionsSumAggregate, {nullable:true})
    _sum?: Order_transactionsSumAggregate;

    @Field(() => Order_transactionsMinAggregate, {nullable:true})
    _min?: Order_transactionsMinAggregate;

    @Field(() => Order_transactionsMaxAggregate, {nullable:true})
    _max?: Order_transactionsMaxAggregate;
}
