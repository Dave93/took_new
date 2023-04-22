import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingCreateWithoutTerminalsInput } from './order-bonus-pricing-create-without-terminals.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingCreateOrConnectWithoutTerminalsInput } from './order-bonus-pricing-create-or-connect-without-terminals.input';
import { order_bonus_pricingUpsertWithWhereUniqueWithoutTerminalsInput } from './order-bonus-pricing-upsert-with-where-unique-without-terminals.input';
import { order_bonus_pricingCreateManyTerminalsInputEnvelope } from './order-bonus-pricing-create-many-terminals-input-envelope.input';
import { order_bonus_pricingWhereUniqueInput } from './order-bonus-pricing-where-unique.input';
import { order_bonus_pricingUpdateWithWhereUniqueWithoutTerminalsInput } from './order-bonus-pricing-update-with-where-unique-without-terminals.input';
import { order_bonus_pricingUpdateManyWithWhereWithoutTerminalsInput } from './order-bonus-pricing-update-many-with-where-without-terminals.input';
import { order_bonus_pricingScalarWhereInput } from './order-bonus-pricing-scalar-where.input';

@InputType()
export class order_bonus_pricingUncheckedUpdateManyWithoutTerminalsNestedInput {

    @Field(() => [order_bonus_pricingCreateWithoutTerminalsInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateWithoutTerminalsInput)
    create?: Array<order_bonus_pricingCreateWithoutTerminalsInput>;

    @Field(() => [order_bonus_pricingCreateOrConnectWithoutTerminalsInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateOrConnectWithoutTerminalsInput)
    connectOrCreate?: Array<order_bonus_pricingCreateOrConnectWithoutTerminalsInput>;

    @Field(() => [order_bonus_pricingUpsertWithWhereUniqueWithoutTerminalsInput], {nullable:true})
    @Type(() => order_bonus_pricingUpsertWithWhereUniqueWithoutTerminalsInput)
    upsert?: Array<order_bonus_pricingUpsertWithWhereUniqueWithoutTerminalsInput>;

    @Field(() => order_bonus_pricingCreateManyTerminalsInputEnvelope, {nullable:true})
    @Type(() => order_bonus_pricingCreateManyTerminalsInputEnvelope)
    createMany?: order_bonus_pricingCreateManyTerminalsInputEnvelope;

    @Field(() => [order_bonus_pricingWhereUniqueInput], {nullable:true})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    set?: Array<order_bonus_pricingWhereUniqueInput>;

    @Field(() => [order_bonus_pricingWhereUniqueInput], {nullable:true})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    disconnect?: Array<order_bonus_pricingWhereUniqueInput>;

    @Field(() => [order_bonus_pricingWhereUniqueInput], {nullable:true})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    delete?: Array<order_bonus_pricingWhereUniqueInput>;

    @Field(() => [order_bonus_pricingWhereUniqueInput], {nullable:true})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    connect?: Array<order_bonus_pricingWhereUniqueInput>;

    @Field(() => [order_bonus_pricingUpdateWithWhereUniqueWithoutTerminalsInput], {nullable:true})
    @Type(() => order_bonus_pricingUpdateWithWhereUniqueWithoutTerminalsInput)
    update?: Array<order_bonus_pricingUpdateWithWhereUniqueWithoutTerminalsInput>;

    @Field(() => [order_bonus_pricingUpdateManyWithWhereWithoutTerminalsInput], {nullable:true})
    @Type(() => order_bonus_pricingUpdateManyWithWhereWithoutTerminalsInput)
    updateMany?: Array<order_bonus_pricingUpdateManyWithWhereWithoutTerminalsInput>;

    @Field(() => [order_bonus_pricingScalarWhereInput], {nullable:true})
    @Type(() => order_bonus_pricingScalarWhereInput)
    deleteMany?: Array<order_bonus_pricingScalarWhereInput>;
}
