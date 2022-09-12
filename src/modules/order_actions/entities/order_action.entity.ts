import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OrderAction {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
