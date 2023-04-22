import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderBonusPricingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
