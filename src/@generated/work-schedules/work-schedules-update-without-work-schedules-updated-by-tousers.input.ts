import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationUpdateOneRequiredWithoutWork_schedules_organization_idTorganizationNestedInput } from '../organization/organization-update-one-required-without-work-schedules-organization-id-torganization-nested.input';
import { usersUpdateOneWithoutWork_schedules_created_byTousersNestedInput } from '../users/users-update-one-without-work-schedules-created-by-tousers-nested.input';
import { users_work_schedulesUpdateManyWithoutWork_schedulesNestedInput } from '../users-work-schedules/users-work-schedules-update-many-without-work-schedules-nested.input';
import { work_schedule_entriesUpdateManyWithoutWork_schedule_entries_work_schedulesNestedInput } from '../work-schedule-entries/work-schedule-entries-update-many-without-work-schedule-entries-work-schedules-nested.input';

@InputType()
export class work_schedulesUpdateWithoutWork_schedules_updated_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => organizationUpdateOneRequiredWithoutWork_schedules_organization_idTorganizationNestedInput, {nullable:true})
    organization?: organizationUpdateOneRequiredWithoutWork_schedules_organization_idTorganizationNestedInput;

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

    @Field(() => usersUpdateOneWithoutWork_schedules_created_byTousersNestedInput, {nullable:true})
    work_schedules_created_byTousers?: usersUpdateOneWithoutWork_schedules_created_byTousersNestedInput;

    @Field(() => users_work_schedulesUpdateManyWithoutWork_schedulesNestedInput, {nullable:true})
    users_work_schedules?: users_work_schedulesUpdateManyWithoutWork_schedulesNestedInput;

    @Field(() => work_schedule_entriesUpdateManyWithoutWork_schedule_entries_work_schedulesNestedInput, {nullable:true})
    work_schedule_entries_work_schedules?: work_schedule_entriesUpdateManyWithoutWork_schedule_entries_work_schedulesNestedInput;
}
