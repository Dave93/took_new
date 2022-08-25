import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingScalarWhereInput } from './delivery-pricing-scalar-where.input';
import { Type } from 'class-transformer';
import { delivery_pricingUpdateManyMutationInput } from './delivery-pricing-update-many-mutation.input';

@InputType()
export class delivery_pricingUpdateManyWithWhereWithoutOrganizationInput {

    @Field(() => delivery_pricingScalarWhereInput, {nullable:false})
    @Type(() => delivery_pricingScalarWhereInput)
    where!: delivery_pricingScalarWhereInput;

    @Field(() => delivery_pricingUpdateManyMutationInput, {nullable:false})
    @Type(() => delivery_pricingUpdateManyMutationInput)
    data!: delivery_pricingUpdateManyMutationInput;
}
