import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { orders } from '../orders/orders.model';
import { terminals } from '../terminals/terminals.model';

@ObjectType()
export class order_locations {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    order_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => Float, {nullable:false,defaultValue:0})
    lat!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    lon!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => users, {nullable:true})
    order_locations_created_byTousers?: users | null;

    @Field(() => orders, {nullable:false})
    order_locations_orders?: orders;

    @Field(() => terminals, {nullable:false})
    order_locations_terminals?: terminals;

    @Field(() => users, {nullable:false})
    order_locations_couriers?: users;
}
