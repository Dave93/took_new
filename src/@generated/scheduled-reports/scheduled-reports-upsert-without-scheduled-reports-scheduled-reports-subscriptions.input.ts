import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reportsUpdateWithoutScheduled_reports_scheduled_reports_subscriptionsInput } from './scheduled-reports-update-without-scheduled-reports-scheduled-reports-subscriptions.input';
import { Type } from 'class-transformer';
import { scheduled_reportsCreateWithoutScheduled_reports_scheduled_reports_subscriptionsInput } from './scheduled-reports-create-without-scheduled-reports-scheduled-reports-subscriptions.input';

@InputType()
export class scheduled_reportsUpsertWithoutScheduled_reports_scheduled_reports_subscriptionsInput {

    @Field(() => scheduled_reportsUpdateWithoutScheduled_reports_scheduled_reports_subscriptionsInput, {nullable:false})
    @Type(() => scheduled_reportsUpdateWithoutScheduled_reports_scheduled_reports_subscriptionsInput)
    update!: scheduled_reportsUpdateWithoutScheduled_reports_scheduled_reports_subscriptionsInput;

    @Field(() => scheduled_reportsCreateWithoutScheduled_reports_scheduled_reports_subscriptionsInput, {nullable:false})
    @Type(() => scheduled_reportsCreateWithoutScheduled_reports_scheduled_reports_subscriptionsInput)
    create!: scheduled_reportsCreateWithoutScheduled_reports_scheduled_reports_subscriptionsInput;
}
