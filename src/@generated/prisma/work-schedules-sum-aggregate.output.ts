import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Work_schedulesSumAggregate {

    @Field(() => Int, {nullable:true})
    bonus_price?: number;
}
