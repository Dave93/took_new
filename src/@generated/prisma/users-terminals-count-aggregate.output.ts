import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Users_terminalsCountAggregate {

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Int, {nullable:false})
    terminal_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
