import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TerminalsSumAggregate {

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;
}
