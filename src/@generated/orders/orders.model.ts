import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { users } from '../users/users.model';
import { customers } from '../customers/customers.model';
import { order_status } from '../order-status/order-status.model';
import { organization } from '../organization/organization.model';
import { terminals } from '../terminals/terminals.model';
import { assets } from '../assets/assets.model';
import { order_actions } from '../order-actions/order-actions.model';
import { order_locations } from '../order-locations/order-locations.model';
import { order_votes } from '../order-votes/order-votes.model';
import { order_transactions } from '../order-transactions/order-transactions.model';
import { OrdersCount } from '../prisma/orders-count.output';

@ObjectType()
export class orders {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:false})
    customer_id!: string;

    @Field(() => String, {nullable:true})
    courier_id!: string | null;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    order_status_id!: string;

    @Field(() => drive_type, {nullable:false,defaultValue:'car'})
    delivery_type!: keyof typeof drive_type;

    @Field(() => Float, {nullable:false,defaultValue:0})
    from_lat!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    from_lon!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    to_lat!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    to_lon!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    wrong_lat!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    wrong_lon!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    pre_distance!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    pre_duration!: number;

    @Field(() => String, {nullable:false})
    order_number!: string;

    @Field(() => Float, {nullable:true,defaultValue:0})
    distance!: number | null;

    @Field(() => Int, {nullable:true,defaultValue:0})
    duration!: number | null;

    @Field(() => Float, {nullable:false,defaultValue:0})
    order_price!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    delivery_price!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    customer_delivery_price!: number;

    @Field(() => String, {nullable:false})
    delivery_address!: string;

    @Field(() => Date, {nullable:true})
    finished_date!: Date | null;

    @Field(() => String, {nullable:true})
    delivery_comment!: string | null;

    @Field(() => String, {nullable:false})
    payment_type!: string;

    @Field(() => String, {nullable:true})
    cancel_reason!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    sms_sent_to_customer!: boolean;

    @Field(() => Int, {nullable:true})
    score!: number | null;

    @Field(() => GraphQLJSON, {nullable:true})
    order_items!: any | null;

    @Field(() => String, {nullable:true})
    delivery_pricing_id!: string | null;

    @Field(() => String, {nullable:true})
    cancel_voice_id!: string | null;

    @Field(() => String, {nullable:true})
    operator_notes!: string | null;

    @Field(() => String, {nullable:true})
    delivery_schedule!: string | null;

    @Field(() => String, {nullable:true})
    later_time!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    orders_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    orders_updated_byTousers?: users | null;

    @Field(() => customers, {nullable:false})
    orders_customers?: customers;

    @Field(() => users, {nullable:true})
    orders_couriers?: users | null;

    @Field(() => order_status, {nullable:false})
    orders_order_status?: order_status;

    @Field(() => organization, {nullable:false})
    orders_organization?: organization;

    @Field(() => terminals, {nullable:false})
    orders_terminals?: terminals;

    @Field(() => assets, {nullable:true})
    orders_voice_idToassets?: assets | null;

    @Field(() => [order_actions], {nullable:true})
    order_actions_orders?: Array<order_actions>;

    @Field(() => [order_locations], {nullable:true})
    order_locations_orders?: Array<order_locations>;

    @Field(() => [order_votes], {nullable:true})
    order_votes_orders?: Array<order_votes>;

    @Field(() => [order_transactions], {nullable:true})
    order_transactions_orders?: Array<order_transactions>;

    @Field(() => OrdersCount, {nullable:false})
    _count?: OrdersCount;
}
