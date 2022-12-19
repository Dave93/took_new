import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Courier_terminal_balanceAvgAggregate {

    @Field(() => Float, {nullable:true})
    balance?: number;
}
