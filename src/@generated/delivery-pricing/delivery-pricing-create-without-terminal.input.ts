import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { drive_type } from '../prisma/drive-type.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { organization_payment_types } from '../organization/organization-payment-types.enum';
import { organizationCreateNestedOneWithoutDelivery_pricing_organization_idTorganizationInput } from '../organization/organization-create-nested-one-without-delivery-pricing-organization-id-torganization.input';
import { usersCreateNestedOneWithoutDelivery_pricing_created_byTousersInput } from '../users/users-create-nested-one-without-delivery-pricing-created-by-tousers.input';
import { usersCreateNestedOneWithoutDelivery_pricing_updated_byTousersInput } from '../users/users-create-nested-one-without-delivery-pricing-updated-by-tousers.input';

@InputType()
export class delivery_pricingCreateWithoutTerminalInput {

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

    @Field(() => organization_payment_types, {nullable:true})
    payment_type?: keyof typeof organization_payment_types;

    @Field(() => organizationCreateNestedOneWithoutDelivery_pricing_organization_idTorganizationInput, {nullable:false})
    organization!: organizationCreateNestedOneWithoutDelivery_pricing_organization_idTorganizationInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutDelivery_pricing_created_byTousersInput, {nullable:true})
    users_delivery_pricing_created_byTousers?: usersCreateNestedOneWithoutDelivery_pricing_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutDelivery_pricing_updated_byTousersInput, {nullable:true})
    users_delivery_pricing_updated_byTousers?: usersCreateNestedOneWithoutDelivery_pricing_updated_byTousersInput;
}
