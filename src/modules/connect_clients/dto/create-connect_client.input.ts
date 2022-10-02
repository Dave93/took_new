import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateConnectClientInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
