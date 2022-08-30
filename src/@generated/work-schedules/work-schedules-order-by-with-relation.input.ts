import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { organizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { users_work_schedulesOrderByRelationAggregateInput } from '../users-work-schedules/users-work-schedules-order-by-relation-aggregate.input';
import { work_schedule_entriesOrderByRelationAggregateInput } from '../work-schedule-entries/work-schedule-entries-order-by-relation-aggregate.input';

@InputType()
export class work_schedulesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => organizationOrderByWithRelationInput, {nullable:true})
    organization?: organizationOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    days?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    start_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    end_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_start_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    work_schedules_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    work_schedules_updated_byTousers?: usersOrderByWithRelationInput;

    @Field(() => users_work_schedulesOrderByRelationAggregateInput, {nullable:true})
    users_work_schedules?: users_work_schedulesOrderByRelationAggregateInput;

    @Field(() => work_schedule_entriesOrderByRelationAggregateInput, {nullable:true})
    work_schedule_entries_work_schedules?: work_schedule_entriesOrderByRelationAggregateInput;
}
