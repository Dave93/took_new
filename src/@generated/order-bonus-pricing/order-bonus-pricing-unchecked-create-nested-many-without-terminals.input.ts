import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingCreateWithoutTerminalsInput } from './order-bonus-pricing-create-without-terminals.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingCreateOrConnectWithoutTerminalsInput } from './order-bonus-pricing-create-or-connect-without-terminals.input';
import { order_bonus_pricingCreateManyTerminalsInputEnvelope } from './order-bonus-pricing-create-many-terminals-input-envelope.input';
import { order_bonus_pricingWhereUniqueInput } from './order-bonus-pricing-where-unique.input';

@InputType()
export class order_bonus_pricingUncheckedCreateNestedManyWithoutTerminalsInput {

    @Field(() => [order_bonus_pricingCreateWithoutTerminalsInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateWithoutTerminalsInput)
    create?: Array<order_bonus_pricingCreateWithoutTerminalsInput>;

    @Field(() => [order_bonus_pricingCreateOrConnectWithoutTerminalsInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateOrConnectWithoutTerminalsInput)
    connectOrCreate?: Array<order_bonus_pricingCreateOrConnectWithoutTerminalsInput>;

    @Field(() => order_bonus_pricingCreateManyTerminalsInputEnvelope, {nullable:true})
    @Type(() => order_bonus_pricingCreateManyTerminalsInputEnvelope)
    createMany?: order_bonus_pricingCreateManyTerminalsInputEnvelope;

    @Field(() => [order_bonus_pricingWhereUniqueInput], {nullable:true})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    connect?: Array<order_bonus_pricingWhereUniqueInput>;
}
