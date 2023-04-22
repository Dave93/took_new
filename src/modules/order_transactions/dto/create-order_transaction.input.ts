import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderTransactionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
