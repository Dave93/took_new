import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutOrder_bonus_pricingInput } from './organization-create-without-order-bonus-pricing.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutOrder_bonus_pricingInput } from './organization-create-or-connect-without-order-bonus-pricing.input';
import { organizationUpsertWithoutOrder_bonus_pricingInput } from './organization-upsert-without-order-bonus-pricing.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { organizationUpdateWithoutOrder_bonus_pricingInput } from './organization-update-without-order-bonus-pricing.input';

@InputType()
export class organizationUpdateOneWithoutOrder_bonus_pricingNestedInput {

    @Field(() => organizationCreateWithoutOrder_bonus_pricingInput, {nullable:true})
    @Type(() => organizationCreateWithoutOrder_bonus_pricingInput)
    create?: organizationCreateWithoutOrder_bonus_pricingInput;

    @Field(() => organizationCreateOrConnectWithoutOrder_bonus_pricingInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutOrder_bonus_pricingInput)
    connectOrCreate?: organizationCreateOrConnectWithoutOrder_bonus_pricingInput;

    @Field(() => organizationUpsertWithoutOrder_bonus_pricingInput, {nullable:true})
    @Type(() => organizationUpsertWithoutOrder_bonus_pricingInput)
    upsert?: organizationUpsertWithoutOrder_bonus_pricingInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;

    @Field(() => organizationUpdateWithoutOrder_bonus_pricingInput, {nullable:true})
    @Type(() => organizationUpdateWithoutOrder_bonus_pricingInput)
    update?: organizationUpdateWithoutOrder_bonus_pricingInput;
}
