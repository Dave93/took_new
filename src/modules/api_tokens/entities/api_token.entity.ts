import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ApiToken {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
