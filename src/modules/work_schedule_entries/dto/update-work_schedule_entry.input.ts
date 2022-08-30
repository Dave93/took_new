import { CreateWorkScheduleEntryInput } from './create-work_schedule_entry.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWorkScheduleEntryInput extends PartialType(CreateWorkScheduleEntryInput) {
  @Field(() => Int)
  id: number;
}
