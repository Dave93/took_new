import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { Scheduled_reportsRelationFilter } from '../prisma/scheduled-reports-relation-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';

@InputType()
export class scheduled_reports_subscriptionWhereInput {

    @Field(() => [scheduled_reports_subscriptionWhereInput], {nullable:true})
    AND?: Array<scheduled_reports_subscriptionWhereInput>;

    @Field(() => [scheduled_reports_subscriptionWhereInput], {nullable:true})
    OR?: Array<scheduled_reports_subscriptionWhereInput>;

    @Field(() => [scheduled_reports_subscriptionWhereInput], {nullable:true})
    NOT?: Array<scheduled_reports_subscriptionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    report_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => Scheduled_reportsRelationFilter, {nullable:true})
    scheduled_reports_subscription_reports?: Scheduled_reportsRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    scheduled_reports_subscription_users?: UsersRelationFilter;
}
