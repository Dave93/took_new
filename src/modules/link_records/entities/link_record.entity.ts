import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LinkRecord {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
