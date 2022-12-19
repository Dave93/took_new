import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

@ObjectType()
export class UserProfileNumbers {
  @Field(() => Int)
  wallet: number;

  @Field(() => Float)
  score: number;
}
