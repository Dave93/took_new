import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_work_schedulesNestedInput } from '../work-schedule-entries/work-schedule-entries-unchecked-update-many-without-work-schedule-entries-work-schedules-nested.input';

@InputType()
export class work_schedulesUncheckedUpdateWithoutUsers_work_schedulesInput {

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

    @Field(() => Int, {nullable:true})
    bonus_price?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_work_schedulesNestedInput, {nullable:true})
    work_schedule_entries_work_schedules?: work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_work_schedulesNestedInput;
}
