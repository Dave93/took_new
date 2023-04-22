import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_bonus_pricingWhereInput } from '../order-bonus-pricing/order-bonus-pricing-where.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingOrderByWithRelationInput } from '../order-bonus-pricing/order-bonus-pricing-order-by-with-relation.input';
import { order_bonus_pricingWhereUniqueInput } from '../order-bonus-pricing/order-bonus-pricing-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Order_bonus_pricingScalarFieldEnum } from './order-bonus-pricing-scalar-field.enum';

@ArgsType()
export class FindManyorderBonusPricingArgs {

    @Field(() => order_bonus_pricingWhereInput, {nullable:true})
    @Type(() => order_bonus_pricingWhereInput)
    where?: order_bonus_pricingWhereInput;

    @Field(() => [order_bonus_pricingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<order_bonus_pricingOrderByWithRelationInput>;

    @Field(() => order_bonus_pricingWhereUniqueInput, {nullable:true})
    cursor?: order_bonus_pricingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Order_bonus_pricingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Order_bonus_pricingScalarFieldEnum>;
}
