import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { drive_type } from './drive-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Delivery_pricingMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Boolean, {nullable:true})
    default?: boolean;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => drive_type, {nullable:true})
    drive_type?: keyof typeof drive_type;

    @Field(() => Date, {nullable:true})
    start_time?: Date | string;

    @Field(() => Date, {nullable:true})
    end_time?: Date | string;

    @Field(() => Int, {nullable:true})
    min_price?: number;

    @Field(() => Int, {nullable:true})
    price_per_km?: number;

    @Field(() => String, {nullable:true})
    organization_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
