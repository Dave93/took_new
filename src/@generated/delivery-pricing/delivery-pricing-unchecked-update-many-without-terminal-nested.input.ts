import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingCreateWithoutTerminalInput } from './delivery-pricing-create-without-terminal.input';
import { Type } from 'class-transformer';
import { delivery_pricingCreateOrConnectWithoutTerminalInput } from './delivery-pricing-create-or-connect-without-terminal.input';
import { delivery_pricingUpsertWithWhereUniqueWithoutTerminalInput } from './delivery-pricing-upsert-with-where-unique-without-terminal.input';
import { delivery_pricingCreateManyTerminalInputEnvelope } from './delivery-pricing-create-many-terminal-input-envelope.input';
import { delivery_pricingWhereUniqueInput } from './delivery-pricing-where-unique.input';
import { delivery_pricingUpdateWithWhereUniqueWithoutTerminalInput } from './delivery-pricing-update-with-where-unique-without-terminal.input';
import { delivery_pricingUpdateManyWithWhereWithoutTerminalInput } from './delivery-pricing-update-many-with-where-without-terminal.input';
import { delivery_pricingScalarWhereInput } from './delivery-pricing-scalar-where.input';

@InputType()
export class delivery_pricingUncheckedUpdateManyWithoutTerminalNestedInput {

    @Field(() => [delivery_pricingCreateWithoutTerminalInput], {nullable:true})
    @Type(() => delivery_pricingCreateWithoutTerminalInput)
    create?: Array<delivery_pricingCreateWithoutTerminalInput>;

    @Field(() => [delivery_pricingCreateOrConnectWithoutTerminalInput], {nullable:true})
    @Type(() => delivery_pricingCreateOrConnectWithoutTerminalInput)
    connectOrCreate?: Array<delivery_pricingCreateOrConnectWithoutTerminalInput>;

    @Field(() => [delivery_pricingUpsertWithWhereUniqueWithoutTerminalInput], {nullable:true})
    @Type(() => delivery_pricingUpsertWithWhereUniqueWithoutTerminalInput)
    upsert?: Array<delivery_pricingUpsertWithWhereUniqueWithoutTerminalInput>;

    @Field(() => delivery_pricingCreateManyTerminalInputEnvelope, {nullable:true})
    @Type(() => delivery_pricingCreateManyTerminalInputEnvelope)
    createMany?: delivery_pricingCreateManyTerminalInputEnvelope;

    @Field(() => [delivery_pricingWhereUniqueInput], {nullable:true})
    @Type(() => delivery_pricingWhereUniqueInput)
    set?: Array<delivery_pricingWhereUniqueInput>;

    @Field(() => [delivery_pricingWhereUniqueInput], {nullable:true})
    @Type(() => delivery_pricingWhereUniqueInput)
    disconnect?: Array<delivery_pricingWhereUniqueInput>;

    @Field(() => [delivery_pricingWhereUniqueInput], {nullable:true})
    @Type(() => delivery_pricingWhereUniqueInput)
    delete?: Array<delivery_pricingWhereUniqueInput>;

    @Field(() => [delivery_pricingWhereUniqueInput], {nullable:true})
    @Type(() => delivery_pricingWhereUniqueInput)
    connect?: Array<delivery_pricingWhereUniqueInput>;

    @Field(() => [delivery_pricingUpdateWithWhereUniqueWithoutTerminalInput], {nullable:true})
    @Type(() => delivery_pricingUpdateWithWhereUniqueWithoutTerminalInput)
    update?: Array<delivery_pricingUpdateWithWhereUniqueWithoutTerminalInput>;

    @Field(() => [delivery_pricingUpdateManyWithWhereWithoutTerminalInput], {nullable:true})
    @Type(() => delivery_pricingUpdateManyWithWhereWithoutTerminalInput)
    updateMany?: Array<delivery_pricingUpdateManyWithWhereWithoutTerminalInput>;

    @Field(() => [delivery_pricingScalarWhereInput], {nullable:true})
    @Type(() => delivery_pricingScalarWhereInput)
    deleteMany?: Array<delivery_pricingScalarWhereInput>;
}
