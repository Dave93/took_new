import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingCreateWithoutCourierInput } from './order-bonus-pricing-create-without-courier.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingCreateOrConnectWithoutCourierInput } from './order-bonus-pricing-create-or-connect-without-courier.input';
import { order_bonus_pricingCreateManyCourierInputEnvelope } from './order-bonus-pricing-create-many-courier-input-envelope.input';
import { order_bonus_pricingWhereUniqueInput } from './order-bonus-pricing-where-unique.input';

@InputType()
export class order_bonus_pricingUncheckedCreateNestedManyWithoutCourierInput {

    @Field(() => [order_bonus_pricingCreateWithoutCourierInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateWithoutCourierInput)
    create?: Array<order_bonus_pricingCreateWithoutCourierInput>;

    @Field(() => [order_bonus_pricingCreateOrConnectWithoutCourierInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateOrConnectWithoutCourierInput)
    connectOrCreate?: Array<order_bonus_pricingCreateOrConnectWithoutCourierInput>;

    @Field(() => order_bonus_pricingCreateManyCourierInputEnvelope, {nullable:true})
    @Type(() => order_bonus_pricingCreateManyCourierInputEnvelope)
    createMany?: order_bonus_pricingCreateManyCourierInputEnvelope;

    @Field(() => [order_bonus_pricingWhereUniqueInput], {nullable:true})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    connect?: Array<order_bonus_pricingWhereUniqueInput>;
}
