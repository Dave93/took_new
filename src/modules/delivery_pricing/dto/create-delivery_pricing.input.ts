import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDeliveryPricingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
