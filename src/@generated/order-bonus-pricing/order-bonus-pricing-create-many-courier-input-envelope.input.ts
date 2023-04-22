import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingCreateManyCourierInput } from './order-bonus-pricing-create-many-courier.input';
import { Type } from 'class-transformer';

@InputType()
export class order_bonus_pricingCreateManyCourierInputEnvelope {

    @Field(() => [order_bonus_pricingCreateManyCourierInput], {nullable:false})
    @Type(() => order_bonus_pricingCreateManyCourierInput)
    data!: Array<order_bonus_pricingCreateManyCourierInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
