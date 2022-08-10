import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class PrismaAggregateAllCount {
  @Field(() => Number, { nullable: false })
  id: number;
}

@ObjectType()
export class PrismaAggregateCount {
  @Field(() => PrismaAggregateAllCount, { nullable: false })
  _count: PrismaAggregateAllCount;
}
