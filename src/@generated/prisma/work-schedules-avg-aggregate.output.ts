import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Work_schedulesAvgAggregate {

    @Field(() => Float, {nullable:true})
    bonus_price?: number;
}
