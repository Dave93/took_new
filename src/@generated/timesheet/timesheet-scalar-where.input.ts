import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class timesheetScalarWhereInput {

    @Field(() => [timesheetScalarWhereInput], {nullable:true})
    AND?: Array<timesheetScalarWhereInput>;

    @Field(() => [timesheetScalarWhereInput], {nullable:true})
    OR?: Array<timesheetScalarWhereInput>;

    @Field(() => [timesheetScalarWhereInput], {nullable:true})
    NOT?: Array<timesheetScalarWhereInput>;

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
}
