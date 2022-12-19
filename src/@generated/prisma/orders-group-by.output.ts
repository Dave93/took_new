import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { drive_type } from './drive-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { OrdersCountAggregate } from './orders-count-aggregate.output';
import { OrdersAvgAggregate } from './orders-avg-aggregate.output';
import { OrdersSumAggregate } from './orders-sum-aggregate.output';
import { OrdersMinAggregate } from './orders-min-aggregate.output';
import { OrdersMaxAggregate } from './orders-max-aggregate.output';

@ObjectType()
export class OrdersGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:false})
    customer_id!: string;

    @Field(() => String, {nullable:true})
    courier_id?: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    order_status_id!: string;

    @Field(() => drive_type, {nullable:false})
    delivery_type!: keyof typeof drive_type;

    @Field(() => Float, {nullable:false})
    from_lat!: number;

    @Field(() => Float, {nullable:false})
    from_lon!: number;

    @Field(() => Float, {nullable:false})
    to_lat!: number;

    @Field(() => Float, {nullable:false})
    to_lon!: number;

    @Field(() => Float, {nullable:false})
    pre_distance!: number;

    @Field(() => Int, {nullable:false})
    pre_duration!: number;

    @Field(() => String, {nullable:false})
    order_number!: string;

    @Field(() => Float, {nullable:true})
    distance?: number;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => Float, {nullable:false})
    order_price!: number;

    @Field(() => Float, {nullable:false})
    delivery_price!: number;

    @Field(() => String, {nullable:false})
    delivery_address!: string;

    @Field(() => Date, {nullable:true})
    finished_date?: Date | string;

    @Field(() => String, {nullable:true})
    delivery_comment?: string;

    @Field(() => String, {nullable:false})
    payment_type!: string;

    @Field(() => String, {nullable:true})
    cancel_reason?: string;

    @Field(() => Boolean, {nullable:false})
    sms_sent_to_customer!: boolean;

    @Field(() => Int, {nullable:true})
    score?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    order_items?: any;

    @Field(() => String, {nullable:true})
    delivery_pricing_id?: string;

    @Field(() => String, {nullable:true})
    cancel_voice_id?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => OrdersCountAggregate, {nullable:true})
    _count?: OrdersCountAggregate;

    @Field(() => OrdersAvgAggregate, {nullable:true})
    _avg?: OrdersAvgAggregate;

    @Field(() => OrdersSumAggregate, {nullable:true})
    _sum?: OrdersSumAggregate;

    @Field(() => OrdersMinAggregate, {nullable:true})
    _min?: OrdersMinAggregate;

    @Field(() => OrdersMaxAggregate, {nullable:true})
    _max?: OrdersMaxAggregate;
}
