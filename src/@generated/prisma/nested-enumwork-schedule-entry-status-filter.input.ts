import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entry_status } from './work-schedule-entry-status.enum';

@InputType()
export class NestedEnumwork_schedule_entry_statusFilter {

    @Field(() => work_schedule_entry_status, {nullable:true})
    equals?: keyof typeof work_schedule_entry_status;

    @Field(() => [work_schedule_entry_status], {nullable:true})
    in?: Array<keyof typeof work_schedule_entry_status>;

    @Field(() => [work_schedule_entry_status], {nullable:true})
    notIn?: Array<keyof typeof work_schedule_entry_status>;

    @Field(() => NestedEnumwork_schedule_entry_statusFilter, {nullable:true})
    not?: NestedEnumwork_schedule_entry_statusFilter;
}
