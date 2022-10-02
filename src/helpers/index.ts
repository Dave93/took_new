import { Field, ObjectType } from '@nestjs/graphql';
import { users } from 'src/@generated/users/users.model';
import { HashHelper } from './hash.helper';

@ObjectType()
class TookSuccessResponse {
  @Field(() => Boolean, { nullable: false })
  success: boolean;
}

@ObjectType()
class BatchPayload {
  @Field(() => Number)
  count: number;
}

@ObjectType()
class WorkScheduleEntriesReportCouriers {
  @Field(() => String)
  id: string;

  @Field(() => String)
  first_name: string;

  @Field(() => String)
  last_name: string;
}

@ObjectType()
class WorkScheduleEntriesReportRes {
  @Field(() => [WorkScheduleEntriesReportCouriers])
  users: WorkScheduleEntriesReportCouriers[];

  @Field(() => [WorkScheduleEntriesReportRecord])
  work_schedule_entries: WorkScheduleEntriesReportRecord[];
}

@ObjectType()
class WorkScheduleEntriesReportRecord {
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

export {
  HashHelper,
  BatchPayload,
  WorkScheduleEntriesReportRecord,
  WorkScheduleEntriesReportRes,
  WorkScheduleEntriesReportCouriers,
  TookSuccessResponse,
};
