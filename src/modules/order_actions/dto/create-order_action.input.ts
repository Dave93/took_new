import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderActionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
