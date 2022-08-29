import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLinkRecordInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
