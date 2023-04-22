import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class scheduled_reports_subscriptionScalarWhereInput {

    @Field(() => [scheduled_reports_subscriptionScalarWhereInput], {nullable:true})
    AND?: Array<scheduled_reports_subscriptionScalarWhereInput>;

    @Field(() => [scheduled_reports_subscriptionScalarWhereInput], {nullable:true})
    OR?: Array<scheduled_reports_subscriptionScalarWhereInput>;

    @Field(() => [scheduled_reports_subscriptionScalarWhereInput], {nullable:true})
    NOT?: Array<scheduled_reports_subscriptionScalarWhereInput>;

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
}
