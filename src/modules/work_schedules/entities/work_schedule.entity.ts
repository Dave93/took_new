import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class WorkSchedule {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
