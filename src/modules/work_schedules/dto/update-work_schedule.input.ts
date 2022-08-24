import { CreateWorkScheduleInput } from './create-work_schedule.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWorkScheduleInput extends PartialType(CreateWorkScheduleInput) {
  @Field(() => Int)
  id: number;
}
