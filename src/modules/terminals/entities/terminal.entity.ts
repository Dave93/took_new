import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Terminal {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
