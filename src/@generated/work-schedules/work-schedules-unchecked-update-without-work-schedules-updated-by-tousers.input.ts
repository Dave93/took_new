import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_work_schedulesUncheckedUpdateManyWithoutWork_schedulesNestedInput } from '../users-work-schedules/users-work-schedules-unchecked-update-many-without-work-schedules-nested.input';
import { work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_work_schedulesNestedInput } from '../work-schedule-entries/work-schedule-entries-unchecked-update-many-without-work-schedule-entries-work-schedules-nested.input';

@InputType()
export class work_schedulesUncheckedUpdateWithoutWork_schedules_updated_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:true})
    organization_id?: string;

    @Field(() => [String], {nullable:true})
    days?: Array<string>;

    @Field(() => Date, {nullable:true})
    start_time?: Date | string;

    @Field(() => Date, {nullable:true})
    end_time?: Date | string;

    @Field(() => Date, {nullable:true})
    max_start_time?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => users_work_schedulesUncheckedUpdateManyWithoutWork_schedulesNestedInput, {nullable:true})
    users_work_schedules?: users_work_schedulesUncheckedUpdateManyWithoutWork_schedulesNestedInput;

    @Field(() => work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_work_schedulesNestedInput, {nullable:true})
    work_schedule_entries_work_schedules?: work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_work_schedulesNestedInput;
}
