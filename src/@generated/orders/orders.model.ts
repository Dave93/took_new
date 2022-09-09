import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { users } from '../users/users.model';
import { customers } from '../customers/customers.model';
import { order_status } from '../order-status/order-status.model';
import { organization } from '../organization/organization.model';
import { terminals } from '../terminals/terminals.model';

@ObjectType()
export class orders {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:false})
    customer_id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

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
    pre_distance!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    pre_duration!: number;

    @Field(() => Float, {nullable:true,defaultValue:0})
    distance!: number | null;

    @Field(() => Int, {nullable:true,defaultValue:0})
    duration!: number | null;

    @Field(() => Float, {nullable:false,defaultValue:0})
    delivery_price!: number;

    @Field(() => String, {nullable:false})
    delivery_address!: string;

    @Field(() => Date, {nullable:false})
    delivery_date!: Date;

    @Field(() => Date, {nullable:true})
    finished_date!: Date | null;

    @Field(() => String, {nullable:true})
    delivery_comment!: string | null;

    @Field(() => String, {nullable:false})
    delivery_phone!: string;

    @Field(() => String, {nullable:false})
    delivery_name!: string;

    @Field(() => String, {nullable:false})
    payment_type_id!: string;

    @Field(() => String, {nullable:true})
    cancel_reason!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    order_items!: any | null;

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

    @Field(() => users, {nullable:false})
    orders_couriers?: users;

    @Field(() => order_status, {nullable:false})
    orders_order_status?: order_status;

    @Field(() => organization, {nullable:false})
    orders_organization?: organization;

    @Field(() => terminals, {nullable:false})
    orders_terminals?: terminals;
}
