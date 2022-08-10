import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Permission {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
