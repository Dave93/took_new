import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MigrationsSumAggregate {

    @Field(() => String, {nullable:true})
    timestamp?: bigint | number;
}
