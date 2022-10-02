import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingWhereUniqueInput } from './delivery-pricing-where-unique.input';
import { Type } from 'class-transformer';
import { delivery_pricingUpdateWithoutTerminalInput } from './delivery-pricing-update-without-terminal.input';
import { delivery_pricingCreateWithoutTerminalInput } from './delivery-pricing-create-without-terminal.input';

@InputType()
export class delivery_pricingUpsertWithWhereUniqueWithoutTerminalInput {

    @Field(() => delivery_pricingWhereUniqueInput, {nullable:false})
    @Type(() => delivery_pricingWhereUniqueInput)
    where!: delivery_pricingWhereUniqueInput;

    @Field(() => delivery_pricingUpdateWithoutTerminalInput, {nullable:false})
    @Type(() => delivery_pricingUpdateWithoutTerminalInput)
    update!: delivery_pricingUpdateWithoutTerminalInput;

    @Field(() => delivery_pricingCreateWithoutTerminalInput, {nullable:false})
    @Type(() => delivery_pricingCreateWithoutTerminalInput)
    create!: delivery_pricingCreateWithoutTerminalInput;
}
