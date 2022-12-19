import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Manager_withdraw_transactionsAvgAggregate {

    @Field(() => Float, {nullable:true})
    amount?: number;
}
