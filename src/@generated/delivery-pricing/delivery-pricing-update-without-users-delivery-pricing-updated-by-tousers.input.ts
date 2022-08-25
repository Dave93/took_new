import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { drive_type } from '../prisma/drive-type.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { organizationUpdateOneRequiredWithoutDelivery_pricing_organization_idTorganizationNestedInput } from '../organization/organization-update-one-required-without-delivery-pricing-organization-id-torganization-nested.input';
import { usersUpdateOneWithoutDelivery_pricing_created_byTousersNestedInput } from '../users/users-update-one-without-delivery-pricing-created-by-tousers-nested.input';

@InputType()
export class delivery_pricingUpdateWithoutUsers_delivery_pricing_updated_byTousersInput {

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

    @Field(() => [String], {nullable:true})
    days?: Array<string>;

    @Field(() => Date, {nullable:true})
    start_time?: Date | string;

    @Field(() => Date, {nullable:true})
    end_time?: Date | string;

    @Field(() => Int, {nullable:true})
    min_price?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    rules?: any;

    @Field(() => Int, {nullable:true})
    price_per_km?: number;

    @Field(() => organizationUpdateOneRequiredWithoutDelivery_pricing_organization_idTorganizationNestedInput, {nullable:true})
    organization?: organizationUpdateOneRequiredWithoutDelivery_pricing_organization_idTorganizationNestedInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneWithoutDelivery_pricing_created_byTousersNestedInput, {nullable:true})
    users_delivery_pricing_created_byTousers?: usersUpdateOneWithoutDelivery_pricing_created_byTousersNestedInput;
}
