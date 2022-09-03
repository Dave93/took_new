import { Field, ObjectType } from '@nestjs/graphql';
import { HashHelper } from './hash.helper';

@ObjectType()
class BatchPayload {
  @Field(() => Number)
  count: number;
}

@ObjectType()
class WorkScheduleEnrtiesReportRecord {
  @Field(() => String)
  user_id: string;

  @Field(() => Number)
  duration: number;

  @Field(() => Date)
  day: Date;

  @Field(() => Boolean)
  late: boolean;

  @Field(() => String)
  first_name: string;

  @Field(() => String)
  last_name: string;
}

export { HashHelper, BatchPayload, WorkScheduleEnrtiesReportRecord };
