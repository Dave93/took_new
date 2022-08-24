import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { drive_type } from '../prisma/drive-type.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { usersCreateNestedOneWithoutDelivery_pricing_created_byTousersInput } from '../users/users-create-nested-one-without-delivery-pricing-created-by-tousers.input';
import { usersCreateNestedOneWithoutDelivery_pricing_organization_idTousersInput } from '../users/users-create-nested-one-without-delivery-pricing-organization-id-tousers.input';

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

    @Field(() => Date, {nullable:false})
    start_time!: Date | string;

    @Field(() => Date, {nullable:false})
    end_time!: Date | string;

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

    @Field(() => usersCreateNestedOneWithoutDelivery_pricing_created_byTousersInput, {nullable:true})
    users_delivery_pricing_created_byTousers?: usersCreateNestedOneWithoutDelivery_pricing_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutDelivery_pricing_organization_idTousersInput, {nullable:false})
    delivery_pricing_organization_idTousers!: usersCreateNestedOneWithoutDelivery_pricing_organization_idTousersInput;
}
