import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MigrationsAvgAggregate {

    @Field(() => Float, {nullable:true})
    timestamp?: number;
}
