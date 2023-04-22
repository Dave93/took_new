import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingCreateWithoutCourierInput } from './order-bonus-pricing-create-without-courier.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingCreateOrConnectWithoutCourierInput } from './order-bonus-pricing-create-or-connect-without-courier.input';
import { order_bonus_pricingUpsertWithWhereUniqueWithoutCourierInput } from './order-bonus-pricing-upsert-with-where-unique-without-courier.input';
import { order_bonus_pricingCreateManyCourierInputEnvelope } from './order-bonus-pricing-create-many-courier-input-envelope.input';
import { order_bonus_pricingWhereUniqueInput } from './order-bonus-pricing-where-unique.input';
import { order_bonus_pricingUpdateWithWhereUniqueWithoutCourierInput } from './order-bonus-pricing-update-with-where-unique-without-courier.input';
import { order_bonus_pricingUpdateManyWithWhereWithoutCourierInput } from './order-bonus-pricing-update-many-with-where-without-courier.input';
import { order_bonus_pricingScalarWhereInput } from './order-bonus-pricing-scalar-where.input';

@InputType()
export class order_bonus_pricingUncheckedUpdateManyWithoutCourierNestedInput {

    @Field(() => [order_bonus_pricingCreateWithoutCourierInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateWithoutCourierInput)
    create?: Array<order_bonus_pricingCreateWithoutCourierInput>;

    @Field(() => [order_bonus_pricingCreateOrConnectWithoutCourierInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateOrConnectWithoutCourierInput)
    connectOrCreate?: Array<order_bonus_pricingCreateOrConnectWithoutCourierInput>;

    @Field(() => [order_bonus_pricingUpsertWithWhereUniqueWithoutCourierInput], {nullable:true})
    @Type(() => order_bonus_pricingUpsertWithWhereUniqueWithoutCourierInput)
    upsert?: Array<order_bonus_pricingUpsertWithWhereUniqueWithoutCourierInput>;

    @Field(() => order_bonus_pricingCreateManyCourierInputEnvelope, {nullable:true})
    @Type(() => order_bonus_pricingCreateManyCourierInputEnvelope)
    createMany?: order_bonus_pricingCreateManyCourierInputEnvelope;

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

    @Field(() => [order_bonus_pricingUpdateWithWhereUniqueWithoutCourierInput], {nullable:true})
    @Type(() => order_bonus_pricingUpdateWithWhereUniqueWithoutCourierInput)
    update?: Array<order_bonus_pricingUpdateWithWhereUniqueWithoutCourierInput>;

    @Field(() => [order_bonus_pricingUpdateManyWithWhereWithoutCourierInput], {nullable:true})
    @Type(() => order_bonus_pricingUpdateManyWithWhereWithoutCourierInput)
    updateMany?: Array<order_bonus_pricingUpdateManyWithWhereWithoutCourierInput>;

    @Field(() => [order_bonus_pricingScalarWhereInput], {nullable:true})
    @Type(() => order_bonus_pricingScalarWhereInput)
    deleteMany?: Array<order_bonus_pricingScalarWhereInput>;
}
