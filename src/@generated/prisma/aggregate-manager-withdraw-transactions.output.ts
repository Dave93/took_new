import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Manager_withdraw_transactionsCountAggregate } from './manager-withdraw-transactions-count-aggregate.output';
import { Manager_withdraw_transactionsAvgAggregate } from './manager-withdraw-transactions-avg-aggregate.output';
import { Manager_withdraw_transactionsSumAggregate } from './manager-withdraw-transactions-sum-aggregate.output';
import { Manager_withdraw_transactionsMinAggregate } from './manager-withdraw-transactions-min-aggregate.output';
import { Manager_withdraw_transactionsMaxAggregate } from './manager-withdraw-transactions-max-aggregate.output';

@ObjectType()
export class AggregateManager_withdraw_transactions {

    @Field(() => Manager_withdraw_transactionsCountAggregate, {nullable:true})
    _count?: Manager_withdraw_transactionsCountAggregate;

    @Field(() => Manager_withdraw_transactionsAvgAggregate, {nullable:true})
    _avg?: Manager_withdraw_transactionsAvgAggregate;

    @Field(() => Manager_withdraw_transactionsSumAggregate, {nullable:true})
    _sum?: Manager_withdraw_transactionsSumAggregate;

    @Field(() => Manager_withdraw_transactionsMinAggregate, {nullable:true})
    _min?: Manager_withdraw_transactionsMinAggregate;

    @Field(() => Manager_withdraw_transactionsMaxAggregate, {nullable:true})
    _max?: Manager_withdraw_transactionsMaxAggregate;
}
