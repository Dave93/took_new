import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OrderStatus {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
