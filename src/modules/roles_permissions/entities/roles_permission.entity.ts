import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RolesPermission {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
