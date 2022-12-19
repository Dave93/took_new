import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Order_transactionsCount {

    @Field(() => Int, {nullable:false})
    manager_withdraw_transactions_transaction!: number;
}
