import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { orders } from '../orders/orders.model';
import { terminals } from '../terminals/terminals.model';

@ObjectType()
export class order_votes {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    order_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    is_voting!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_chosen!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => users, {nullable:true})
    order_votes_created_byTousers?: users | null;

    @Field(() => orders, {nullable:false})
    order_votes_orders?: orders;

    @Field(() => terminals, {nullable:false})
    order_votes_terminals?: terminals;

    @Field(() => users, {nullable:false})
    order_votes_couriers?: users;
}
