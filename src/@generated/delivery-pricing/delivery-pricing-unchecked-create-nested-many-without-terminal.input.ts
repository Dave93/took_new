import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingCreateWithoutTerminalInput } from './delivery-pricing-create-without-terminal.input';
import { Type } from 'class-transformer';
import { delivery_pricingCreateOrConnectWithoutTerminalInput } from './delivery-pricing-create-or-connect-without-terminal.input';
import { delivery_pricingCreateManyTerminalInputEnvelope } from './delivery-pricing-create-many-terminal-input-envelope.input';
import { delivery_pricingWhereUniqueInput } from './delivery-pricing-where-unique.input';

@InputType()
export class delivery_pricingUncheckedCreateNestedManyWithoutTerminalInput {

    @Field(() => [delivery_pricingCreateWithoutTerminalInput], {nullable:true})
    @Type(() => delivery_pricingCreateWithoutTerminalInput)
    create?: Array<delivery_pricingCreateWithoutTerminalInput>;

    @Field(() => [delivery_pricingCreateOrConnectWithoutTerminalInput], {nullable:true})
    @Type(() => delivery_pricingCreateOrConnectWithoutTerminalInput)
    connectOrCreate?: Array<delivery_pricingCreateOrConnectWithoutTerminalInput>;

    @Field(() => delivery_pricingCreateManyTerminalInputEnvelope, {nullable:true})
    @Type(() => delivery_pricingCreateManyTerminalInputEnvelope)
    createMany?: delivery_pricingCreateManyTerminalInputEnvelope;

    @Field(() => [delivery_pricingWhereUniqueInput], {nullable:true})
    @Type(() => delivery_pricingWhereUniqueInput)
    connect?: Array<delivery_pricingWhereUniqueInput>;
}
