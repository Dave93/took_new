import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ConnectClient {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

@ObjectType()
export class CheckServiceResult {
  @Field(() => Boolean, {})
  result: boolean;
}
