import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingScalarWhereInput } from './order-bonus-pricing-scalar-where.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingUpdateManyMutationInput } from './order-bonus-pricing-update-many-mutation.input';

@InputType()
export class order_bonus_pricingUpdateManyWithWhereWithoutTerminalsInput {

    @Field(() => order_bonus_pricingScalarWhereInput, {nullable:false})
    @Type(() => order_bonus_pricingScalarWhereInput)
    where!: order_bonus_pricingScalarWhereInput;

    @Field(() => order_bonus_pricingUpdateManyMutationInput, {nullable:false})
    @Type(() => order_bonus_pricingUpdateManyMutationInput)
    data!: order_bonus_pricingUpdateManyMutationInput;
}
