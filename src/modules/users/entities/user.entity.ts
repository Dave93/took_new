import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { users } from 'src/@generated/users/users.model';

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

@ObjectType()
export class CouriersLocation extends users {
  @Field(() => String)
  short_name: string;
}
