import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';

@InputType()
export class timesheetWhereInput {

    @Field(() => [timesheetWhereInput], {nullable:true})
    AND?: Array<timesheetWhereInput>;

    @Field(() => [timesheetWhereInput], {nullable:true})
    OR?: Array<timesheetWhereInput>;

    @Field(() => [timesheetWhereInput], {nullable:true})
    NOT?: Array<timesheetWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_late?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    timesheet_users?: UsersRelationFilter;
}
