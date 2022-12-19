import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Manager_withdraw_transactionsSumAggregate {

    @Field(() => Float, {nullable:true})
    amount?: number;
}
