import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_work_schedulesUncheckedCreateNestedManyWithoutWork_schedulesInput } from '../users-work-schedules/users-work-schedules-unchecked-create-nested-many-without-work-schedules.input';
import { work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_work_schedulesInput } from '../work-schedule-entries/work-schedule-entries-unchecked-create-nested-many-without-work-schedule-entries-work-schedules.input';

@InputType()
export class work_schedulesUncheckedCreateWithoutWork_schedules_updated_byTousersInput {

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

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => users_work_schedulesUncheckedCreateNestedManyWithoutWork_schedulesInput, {nullable:true})
    users_work_schedules?: users_work_schedulesUncheckedCreateNestedManyWithoutWork_schedulesInput;

    @Field(() => work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_work_schedulesInput, {nullable:true})
    work_schedule_entries_work_schedules?: work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_work_schedulesInput;
}
