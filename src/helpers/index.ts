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

@ObjectType()
class RollCallCourier {
  @Field(() => String)
  id: string;

  @Field(() => String)
  first_name: string;

  @Field(() => String, { nullable: true })
  drive_type?: string;

  @Field(() => String)
  last_name: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date;

  @Field(() => Date, { nullable: true })
  date?: Date;

  @Field(() => Boolean, { nullable: true })
  is_late?: boolean;

  @Field(() => Boolean, { nullable: true })
  is_online?: boolean;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  app_version;
}

@ObjectType()
class RollCallItem {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => [RollCallCourier])
  couriers: RollCallCourier[];
}

export {
  HashHelper,
  BatchPayload,
  WorkScheduleEntriesReportRecord,
  WorkScheduleEntriesReportRes,
  WorkScheduleEntriesReportCouriers,
  TookSuccessResponse,
  RollCallItem,
};
