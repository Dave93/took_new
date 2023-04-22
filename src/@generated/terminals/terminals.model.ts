import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { organization } from '../organization/organization.model';
import { users_terminals } from '../users-terminals/users-terminals.model';
import { orders } from '../orders/orders.model';
import { order_actions } from '../order-actions/order-actions.model';
import { order_locations } from '../order-locations/order-locations.model';
import { delivery_pricing } from '../delivery-pricing/delivery-pricing.model';
import { order_votes } from '../order-votes/order-votes.model';
import { order_transactions } from '../order-transactions/order-transactions.model';
import { courier_terminal_balance } from '../courier-terminal-balance/courier-terminal-balance.model';
import { manager_withdraw } from '../manager-withdraw/manager-withdraw.model';
import { order_bonus_pricing } from '../order-bonus-pricing/order-bonus-pricing.model';
import { TerminalsCount } from '../prisma/terminals-count.output';

@ObjectType()
export class terminals {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    active!: boolean;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => Float, {nullable:false,defaultValue:0})
    latitude!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    longitude!: number;

    @Field(() => String, {nullable:false})
    external_id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:true})
    manager_name!: string | null;

    @Field(() => organization, {nullable:false})
    organization?: organization;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [users_terminals], {nullable:true})
    users_terminals?: Array<users_terminals>;

    @Field(() => [orders], {nullable:true})
    orders_terminals?: Array<orders>;

    @Field(() => [order_actions], {nullable:true})
    order_actions_terminals?: Array<order_actions>;

    @Field(() => [order_locations], {nullable:true})
    order_locations_terminals?: Array<order_locations>;

    @Field(() => [delivery_pricing], {nullable:true})
    delivery_pricing_terminal_idTterminal?: Array<delivery_pricing>;

    @Field(() => [order_votes], {nullable:true})
    order_votes_terminals?: Array<order_votes>;

    @Field(() => [order_transactions], {nullable:true})
    order_transactions_terminals?: Array<order_transactions>;

    @Field(() => [courier_terminal_balance], {nullable:true})
    courier_terminal_balance_terminals?: Array<courier_terminal_balance>;

    @Field(() => [manager_withdraw], {nullable:true})
    manager_withdraw_terminals?: Array<manager_withdraw>;

    @Field(() => [order_bonus_pricing], {nullable:true})
    order_bonus_pricing?: Array<order_bonus_pricing>;

    @Field(() => TerminalsCount, {nullable:false})
    _count?: TerminalsCount;
}
