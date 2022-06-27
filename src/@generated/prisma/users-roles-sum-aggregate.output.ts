import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Users_rolesSumAggregate {

    @Field(() => Int, {nullable:true})
    role_id?: number;
}
