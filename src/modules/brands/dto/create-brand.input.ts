import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBrandInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
