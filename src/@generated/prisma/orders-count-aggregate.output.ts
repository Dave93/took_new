import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrdersCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    organization_id!: number;

    @Field(() => Int, {nullable:false})
    customer_id!: number;

    @Field(() => Int, {nullable:false})
    courier_id!: number;

    @Field(() => Int, {nullable:false})
    terminal_id!: number;

    @Field(() => Int, {nullable:false})
    order_status_id!: number;

    @Field(() => Int, {nullable:false})
    delivery_type!: number;

    @Field(() => Int, {nullable:false})
    from_lat!: number;

    @Field(() => Int, {nullable:false})
    from_lon!: number;

    @Field(() => Int, {nullable:false})
    to_lat!: number;

    @Field(() => Int, {nullable:false})
    to_lon!: number;

    @Field(() => Int, {nullable:false})
    wrong_lat!: number;

    @Field(() => Int, {nullable:false})
    wrong_lon!: number;

    @Field(() => Int, {nullable:false})
    pre_distance!: number;

    @Field(() => Int, {nullable:false})
    pre_duration!: number;

    @Field(() => Int, {nullable:false})
    order_number!: number;

    @Field(() => Int, {nullable:false})
    distance!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Int, {nullable:false})
    order_price!: number;

    @Field(() => Int, {nullable:false})
    delivery_price!: number;

    @Field(() => Int, {nullable:false})
    customer_delivery_price!: number;

    @Field(() => Int, {nullable:false})
    delivery_address!: number;

    @Field(() => Int, {nullable:false})
    finished_date!: number;

    @Field(() => Int, {nullable:false})
    delivery_comment!: number;

    @Field(() => Int, {nullable:false})
    payment_type!: number;

    @Field(() => Int, {nullable:false})
    cancel_reason!: number;

    @Field(() => Int, {nullable:false})
    sms_sent_to_customer!: number;

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => Int, {nullable:false})
    order_items!: number;

    @Field(() => Int, {nullable:false})
    delivery_pricing_id!: number;

    @Field(() => Int, {nullable:false})
    cancel_voice_id!: number;

    @Field(() => Int, {nullable:false})
    operator_notes!: number;

    @Field(() => Int, {nullable:false})
    delivery_schedule!: number;

    @Field(() => Int, {nullable:false})
    later_time!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    updated_by!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
