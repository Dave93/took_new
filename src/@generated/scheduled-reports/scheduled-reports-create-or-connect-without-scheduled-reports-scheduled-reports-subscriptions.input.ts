import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reportsWhereUniqueInput } from './scheduled-reports-where-unique.input';
import { Type } from 'class-transformer';
import { scheduled_reportsCreateWithoutScheduled_reports_scheduled_reports_subscriptionsInput } from './scheduled-reports-create-without-scheduled-reports-scheduled-reports-subscriptions.input';

@InputType()
export class scheduled_reportsCreateOrConnectWithoutScheduled_reports_scheduled_reports_subscriptionsInput {

    @Field(() => scheduled_reportsWhereUniqueInput, {nullable:false})
    @Type(() => scheduled_reportsWhereUniqueInput)
    where!: scheduled_reportsWhereUniqueInput;

    @Field(() => scheduled_reportsCreateWithoutScheduled_reports_scheduled_reports_subscriptionsInput, {nullable:false})
    @Type(() => scheduled_reportsCreateWithoutScheduled_reports_scheduled_reports_subscriptionsInput)
    create!: scheduled_reportsCreateWithoutScheduled_reports_scheduled_reports_subscriptionsInput;
}
