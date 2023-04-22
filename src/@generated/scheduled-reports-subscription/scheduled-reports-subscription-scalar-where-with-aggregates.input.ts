import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class scheduled_reports_subscriptionScalarWhereWithAggregatesInput {

    @Field(() => [scheduled_reports_subscriptionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<scheduled_reports_subscriptionScalarWhereWithAggregatesInput>;

    @Field(() => [scheduled_reports_subscriptionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<scheduled_reports_subscriptionScalarWhereWithAggregatesInput>;

    @Field(() => [scheduled_reports_subscriptionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<scheduled_reports_subscriptionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    report_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
