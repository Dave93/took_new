import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { orders } from '../orders/orders.model';
import { terminals } from '../terminals/terminals.model';

@ObjectType()
export class order_actions {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    order_id!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    duration!: number;

    @Field(() => String, {nullable:true})
    action!: string | null;

    @Field(() => String, {nullable:false})
    action_text!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => users, {nullable:true})
    order_actions_created_byTousers?: users | null;

    @Field(() => orders, {nullable:false})
    order_actions_orders?: orders;

    @Field(() => terminals, {nullable:false})
    order_actions_terminals?: terminals;
}
