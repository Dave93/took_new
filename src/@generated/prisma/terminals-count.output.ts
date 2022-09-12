import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TerminalsCount {

    @Field(() => Int, {nullable:false})
    users_terminals!: number;

    @Field(() => Int, {nullable:false})
    orders_terminals!: number;

    @Field(() => Int, {nullable:false})
    order_actions_terminals!: number;

    @Field(() => Int, {nullable:false})
    order_locations_terminals!: number;
}
