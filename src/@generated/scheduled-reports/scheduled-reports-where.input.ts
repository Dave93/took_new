import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { Scheduled_reports_subscriptionListRelationFilter } from '../prisma/scheduled-reports-subscription-list-relation-filter.input';

@InputType()
export class scheduled_reportsWhereInput {

    @Field(() => [scheduled_reportsWhereInput], {nullable:true})
    AND?: Array<scheduled_reportsWhereInput>;

    @Field(() => [scheduled_reportsWhereInput], {nullable:true})
    OR?: Array<scheduled_reportsWhereInput>;

    @Field(() => [scheduled_reportsWhereInput], {nullable:true})
    NOT?: Array<scheduled_reportsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    cron?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => Scheduled_reports_subscriptionListRelationFilter, {nullable:true})
    scheduled_reports_scheduled_reports_subscriptions?: Scheduled_reports_subscriptionListRelationFilter;
}
