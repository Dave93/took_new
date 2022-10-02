import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingWhereUniqueInput } from './delivery-pricing-where-unique.input';
import { Type } from 'class-transformer';
import { delivery_pricingUpdateWithoutTerminalInput } from './delivery-pricing-update-without-terminal.input';

@InputType()
export class delivery_pricingUpdateWithWhereUniqueWithoutTerminalInput {

    @Field(() => delivery_pricingWhereUniqueInput, {nullable:false})
    @Type(() => delivery_pricingWhereUniqueInput)
    where!: delivery_pricingWhereUniqueInput;

    @Field(() => delivery_pricingUpdateWithoutTerminalInput, {nullable:false})
    @Type(() => delivery_pricingUpdateWithoutTerminalInput)
    data!: delivery_pricingUpdateWithoutTerminalInput;
}
