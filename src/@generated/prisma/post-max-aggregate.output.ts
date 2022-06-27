import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { price_type } from './price-type.enum';
import { status } from './status.enum';
import { sale_type } from './sale-type.enum';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PostMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => price_type, {nullable:true})
    price_type?: keyof typeof price_type;

    @Field(() => status, {nullable:true})
    status?: keyof typeof status;

    @Field(() => sale_type, {nullable:true})
    sale_type?: keyof typeof sale_type;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Int, {nullable:true})
    comments_count?: number;

    @Field(() => String, {nullable:true})
    city_id?: string;
}
