import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { drive_type } from '../prisma/drive-type.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { usersCreateNestedOneWithoutDelivery_pricing_created_byTousersInput } from '../users/users-create-nested-one-without-delivery-pricing-created-by-tousers.input';

@InputType()
export class delivery_pricingCreateWithoutUsers_delivery_pricing_updated_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Boolean, {nullable:true})
    default?: boolean;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => drive_type, {nullable:true})
    drive_type?: keyof typeof drive_type;

    @Field(() => [String], {nullable:true})
    days?: Array<string>;

    @Field(() => String, {nullable:false})
    start_time!: string;

    @Field(() => String, {nullable:false})
    end_time!: string;

    @Field(() => Int, {nullable:true})
    min_price?: number;

    @Field(() => GraphQLJSON, {nullable:false})
    rules!: any;

    @Field(() => Int, {nullable:true})
    price_per_km?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => usersCreateNestedOneWithoutDelivery_pricing_created_byTousersInput, {nullable:true})
    users_delivery_pricing_created_byTousers?: usersCreateNestedOneWithoutDelivery_pricing_created_byTousersInput;
}
