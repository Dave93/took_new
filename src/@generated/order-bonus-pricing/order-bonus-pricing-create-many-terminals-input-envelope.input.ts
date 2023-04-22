import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingCreateManyTerminalsInput } from './order-bonus-pricing-create-many-terminals.input';
import { Type } from 'class-transformer';

@InputType()
export class order_bonus_pricingCreateManyTerminalsInputEnvelope {

    @Field(() => [order_bonus_pricingCreateManyTerminalsInput], {nullable:false})
    @Type(() => order_bonus_pricingCreateManyTerminalsInput)
    data!: Array<order_bonus_pricingCreateManyTerminalsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
