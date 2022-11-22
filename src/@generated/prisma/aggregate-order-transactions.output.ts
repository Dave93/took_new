import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Order_transactionsCountAggregate } from './order-transactions-count-aggregate.output';
import { Order_transactionsAvgAggregate } from './order-transactions-avg-aggregate.output';
import { Order_transactionsSumAggregate } from './order-transactions-sum-aggregate.output';
import { Order_transactionsMinAggregate } from './order-transactions-min-aggregate.output';
import { Order_transactionsMaxAggregate } from './order-transactions-max-aggregate.output';

@ObjectType()
export class AggregateOrder_transactions {

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
