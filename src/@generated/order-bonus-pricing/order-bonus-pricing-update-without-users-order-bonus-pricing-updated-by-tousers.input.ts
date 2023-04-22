import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { usersUpdateOneWithoutOrder_bonus_pricing_courier_idTusersNestedInput } from '../users/users-update-one-without-order-bonus-pricing-courier-id-tusers-nested.input';
import { usersUpdateOneWithoutOrder_bonus_pricing_created_byTousersNestedInput } from '../users/users-update-one-without-order-bonus-pricing-created-by-tousers-nested.input';
import { terminalsUpdateOneWithoutOrder_bonus_pricingNestedInput } from '../terminals/terminals-update-one-without-order-bonus-pricing-nested.input';
import { organizationUpdateOneWithoutOrder_bonus_pricingNestedInput } from '../organization/organization-update-one-without-order-bonus-pricing-nested.input';

@InputType()
export class order_bonus_pricingUpdateWithoutUsers_order_bonus_pricing_updated_byTousersInput {

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

    @Field(() => usersUpdateOneWithoutOrder_bonus_pricing_courier_idTusersNestedInput, {nullable:true})
    courier?: usersUpdateOneWithoutOrder_bonus_pricing_courier_idTusersNestedInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneWithoutOrder_bonus_pricing_created_byTousersNestedInput, {nullable:true})
    users_order_bonus_pricing_created_byTousers?: usersUpdateOneWithoutOrder_bonus_pricing_created_byTousersNestedInput;

    @Field(() => terminalsUpdateOneWithoutOrder_bonus_pricingNestedInput, {nullable:true})
    terminals?: terminalsUpdateOneWithoutOrder_bonus_pricingNestedInput;

    @Field(() => organizationUpdateOneWithoutOrder_bonus_pricingNestedInput, {nullable:true})
    organization?: organizationUpdateOneWithoutOrder_bonus_pricingNestedInput;
}
