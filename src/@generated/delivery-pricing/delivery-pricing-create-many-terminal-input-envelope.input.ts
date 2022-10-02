import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingCreateManyTerminalInput } from './delivery-pricing-create-many-terminal.input';
import { Type } from 'class-transformer';

@InputType()
export class delivery_pricingCreateManyTerminalInputEnvelope {

    @Field(() => [delivery_pricingCreateManyTerminalInput], {nullable:false})
    @Type(() => delivery_pricingCreateManyTerminalInput)
    data!: Array<delivery_pricingCreateManyTerminalInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
