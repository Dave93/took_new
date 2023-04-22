import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutOrder_bonus_pricing_courier_idTusersInput } from '../users/users-create-nested-one-without-order-bonus-pricing-courier-id-tusers.input';
import { usersCreateNestedOneWithoutOrder_bonus_pricing_created_byTousersInput } from '../users/users-create-nested-one-without-order-bonus-pricing-created-by-tousers.input';
import { usersCreateNestedOneWithoutOrder_bonus_pricing_updated_byTousersInput } from '../users/users-create-nested-one-without-order-bonus-pricing-updated-by-tousers.input';
import { organizationCreateNestedOneWithoutOrder_bonus_pricingInput } from '../organization/organization-create-nested-one-without-order-bonus-pricing.input';

@InputType()
export class order_bonus_pricingCreateWithoutTerminalsInput {

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

    @Field(() => usersCreateNestedOneWithoutOrder_bonus_pricing_courier_idTusersInput, {nullable:true})
    courier?: usersCreateNestedOneWithoutOrder_bonus_pricing_courier_idTusersInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutOrder_bonus_pricing_created_byTousersInput, {nullable:true})
    users_order_bonus_pricing_created_byTousers?: usersCreateNestedOneWithoutOrder_bonus_pricing_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutOrder_bonus_pricing_updated_byTousersInput, {nullable:true})
    users_order_bonus_pricing_updated_byTousers?: usersCreateNestedOneWithoutOrder_bonus_pricing_updated_byTousersInput;

    @Field(() => organizationCreateNestedOneWithoutOrder_bonus_pricingInput, {nullable:true})
    organization?: organizationCreateNestedOneWithoutOrder_bonus_pricingInput;
}
