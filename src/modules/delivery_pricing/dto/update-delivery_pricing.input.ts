import { CreateDeliveryPricingInput } from './create-delivery_pricing.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDeliveryPricingInput extends PartialType(CreateDeliveryPricingInput) {
  @Field(() => Int)
  id: number;
}
