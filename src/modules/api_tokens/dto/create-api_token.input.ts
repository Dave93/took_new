import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateApiTokenInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
