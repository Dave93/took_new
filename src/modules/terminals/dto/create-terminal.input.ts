import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTerminalInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
