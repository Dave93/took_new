import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePermissionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
