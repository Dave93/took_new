import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { price_type } from '../prisma/price-type.enum';
import { status } from '../prisma/status.enum';
import { sale_type } from '../prisma/sale-type.enum';
import { Float } from '@nestjs/graphql';

@InputType()
export class postCreateManyUsers_post_user_idTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => String, {nullable:false})
    city_id!: string;
}
