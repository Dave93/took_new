import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class OrderBonusPricing {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
