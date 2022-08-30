import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkScheduleEntryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
