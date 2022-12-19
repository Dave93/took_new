import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAsssetInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
