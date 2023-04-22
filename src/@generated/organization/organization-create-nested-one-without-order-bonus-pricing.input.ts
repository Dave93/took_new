import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutOrder_bonus_pricingInput } from './organization-create-without-order-bonus-pricing.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutOrder_bonus_pricingInput } from './organization-create-or-connect-without-order-bonus-pricing.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class organizationCreateNestedOneWithoutOrder_bonus_pricingInput {

    @Field(() => organizationCreateWithoutOrder_bonus_pricingInput, {nullable:true})
    @Type(() => organizationCreateWithoutOrder_bonus_pricingInput)
    create?: organizationCreateWithoutOrder_bonus_pricingInput;

    @Field(() => organizationCreateOrConnectWithoutOrder_bonus_pricingInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutOrder_bonus_pricingInput)
    connectOrCreate?: organizationCreateOrConnectWithoutOrder_bonus_pricingInput;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;
}
