import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class WorkScheduleEntry {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
