import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { drive_type } from './drive-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrdersMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    organization_id?: string;

    @Field(() => String, {nullable:true})
    customer_id?: string;

    @Field(() => String, {nullable:true})
    courier_id?: string;

    @Field(() => String, {nullable:true})
    terminal_id?: string;

    @Field(() => String, {nullable:true})
    order_status_id?: string;

    @Field(() => drive_type, {nullable:true})
    delivery_type?: keyof typeof drive_type;

    @Field(() => Float, {nullable:true})
    from_lat?: number;

    @Field(() => Float, {nullable:true})
    from_lon?: number;

    @Field(() => Float, {nullable:true})
    to_lat?: number;

    @Field(() => Float, {nullable:true})
    to_lon?: number;

    @Field(() => Float, {nullable:true})
    pre_distance?: number;

    @Field(() => Int, {nullable:true})
    pre_duration?: number;

    @Field(() => String, {nullable:true})
    order_number?: string;

    @Field(() => Float, {nullable:true})
    distance?: number;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => Float, {nullable:true})
    order_price?: number;

    @Field(() => Float, {nullable:true})
    delivery_price?: number;

    @Field(() => String, {nullable:true})
    delivery_address?: string;

    @Field(() => Date, {nullable:true})
    finished_date?: Date | string;

    @Field(() => String, {nullable:true})
    delivery_comment?: string;

    @Field(() => String, {nullable:true})
    payment_type?: string;

    @Field(() => String, {nullable:true})
    cancel_reason?: string;

    @Field(() => Boolean, {nullable:true})
    sms_sent_to_customer?: boolean;

    @Field(() => Int, {nullable:true})
    score?: number;

    @Field(() => String, {nullable:true})
    delivery_pricing_id?: string;

    @Field(() => String, {nullable:true})
    cancel_voice_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
