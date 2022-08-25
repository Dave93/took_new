import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingCreateManyOrganizationInput } from './delivery-pricing-create-many-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class delivery_pricingCreateManyOrganizationInputEnvelope {

    @Field(() => [delivery_pricingCreateManyOrganizationInput], {nullable:false})
    @Type(() => delivery_pricingCreateManyOrganizationInput)
    data!: Array<delivery_pricingCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
