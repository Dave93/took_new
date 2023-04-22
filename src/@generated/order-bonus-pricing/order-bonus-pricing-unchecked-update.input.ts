import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';

@InputType()
export class order_bonus_pricingUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    start_time?: Date | string;

    @Field(() => Date, {nullable:true})
    end_time?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    rules?: any;

    @Field(() => Int, {nullable:true})
    min_distance_km?: number;

    @Field(() => String, {nullable:true})
    organization_id?: string;

    @Field(() => String, {nullable:true})
    terminal_id?: string;

    @Field(() => String, {nullable:true})
    courier_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
