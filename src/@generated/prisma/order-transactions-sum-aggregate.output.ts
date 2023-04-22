import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Order_transactionsSumAggregate {

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    balance_before?: number;

    @Field(() => Float, {nullable:true})
    balance_after?: number;

    @Field(() => Float, {nullable:true})
    not_paid_amount?: number;
}
