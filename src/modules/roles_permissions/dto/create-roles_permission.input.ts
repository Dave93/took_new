import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRolesPermissionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
