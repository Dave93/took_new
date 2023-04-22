import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';

@InputType()
export class order_bonus_pricingCreateManyOrganizationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    start_time!: Date | string;

    @Field(() => Date, {nullable:false})
    end_time!: Date | string;

    @Field(() => GraphQLJSON, {nullable:false})
    rules!: any;

    @Field(() => Int, {nullable:true})
    min_distance_km?: number;

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
