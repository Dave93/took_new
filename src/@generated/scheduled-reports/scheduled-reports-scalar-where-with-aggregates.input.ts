import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class scheduled_reportsScalarWhereWithAggregatesInput {

    @Field(() => [scheduled_reportsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<scheduled_reportsScalarWhereWithAggregatesInput>;

    @Field(() => [scheduled_reportsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<scheduled_reportsScalarWhereWithAggregatesInput>;

    @Field(() => [scheduled_reportsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<scheduled_reportsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    cron?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
