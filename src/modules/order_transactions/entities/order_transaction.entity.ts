import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OrderTransaction {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
