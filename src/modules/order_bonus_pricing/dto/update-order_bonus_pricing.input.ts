import { CreateOrderBonusPricingInput } from './create-order_bonus_pricing.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderBonusPricingInput extends PartialType(CreateOrderBonusPricingInput) {
  @Field(() => Int)
  id: number;
}
