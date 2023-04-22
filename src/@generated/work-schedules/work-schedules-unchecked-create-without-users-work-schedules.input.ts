import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_work_schedulesInput } from '../work-schedule-entries/work-schedule-entries-unchecked-create-nested-many-without-work-schedule-entries-work-schedules.input';

@InputType()
export class work_schedulesUncheckedCreateWithoutUsers_work_schedulesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => [String], {nullable:true})
    days?: Array<string>;

    @Field(() => Date, {nullable:false})
    start_time!: Date | string;

    @Field(() => Date, {nullable:false})
    end_time!: Date | string;

    @Field(() => Date, {nullable:false})
    max_start_time!: Date | string;

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

    @Field(() => work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_work_schedulesInput, {nullable:true})
    work_schedule_entries_work_schedules?: work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_work_schedulesInput;
}
