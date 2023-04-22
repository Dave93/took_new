import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { OrganizationRelationFilter } from '../prisma/organization-relation-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { Users_work_schedulesListRelationFilter } from '../prisma/users-work-schedules-list-relation-filter.input';
import { Work_schedule_entriesListRelationFilter } from '../prisma/work-schedule-entries-list-relation-filter.input';

@InputType()
export class work_schedulesWhereInput {

    @Field(() => [work_schedulesWhereInput], {nullable:true})
    AND?: Array<work_schedulesWhereInput>;

    @Field(() => [work_schedulesWhereInput], {nullable:true})
    OR?: Array<work_schedulesWhereInput>;

    @Field(() => [work_schedulesWhereInput], {nullable:true})
    NOT?: Array<work_schedulesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    organization_id?: StringFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    days?: StringNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    start_time?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    end_time?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    max_start_time?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    bonus_price?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    work_schedules_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    work_schedules_updated_byTousers?: UsersRelationFilter;

    @Field(() => Users_work_schedulesListRelationFilter, {nullable:true})
    users_work_schedules?: Users_work_schedulesListRelationFilter;

    @Field(() => Work_schedule_entriesListRelationFilter, {nullable:true})
    work_schedule_entries_work_schedules?: Work_schedule_entriesListRelationFilter;
}
