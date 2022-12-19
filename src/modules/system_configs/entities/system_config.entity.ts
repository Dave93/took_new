import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SystemConfig {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
