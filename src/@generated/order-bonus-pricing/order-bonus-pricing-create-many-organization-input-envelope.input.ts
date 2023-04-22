import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingCreateManyOrganizationInput } from './order-bonus-pricing-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class order_bonus_pricingCreateManyOrganizationInputEnvelope {

    @Field(() => [order_bonus_pricingCreateManyOrganizationInput], {nullable:false})
    @Type(() => order_bonus_pricingCreateManyOrganizationInput)
    data!: Array<order_bonus_pricingCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
