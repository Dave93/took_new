import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reportsCreateWithoutScheduled_reports_scheduled_reports_subscriptionsInput } from './scheduled-reports-create-without-scheduled-reports-scheduled-reports-subscriptions.input';
import { Type } from 'class-transformer';
import { scheduled_reportsCreateOrConnectWithoutScheduled_reports_scheduled_reports_subscriptionsInput } from './scheduled-reports-create-or-connect-without-scheduled-reports-scheduled-reports-subscriptions.input';
import { scheduled_reportsWhereUniqueInput } from './scheduled-reports-where-unique.input';

@InputType()
export class scheduled_reportsCreateNestedOneWithoutScheduled_reports_scheduled_reports_subscriptionsInput {

    @Field(() => scheduled_reportsCreateWithoutScheduled_reports_scheduled_reports_subscriptionsInput, {nullable:true})
    @Type(() => scheduled_reportsCreateWithoutScheduled_reports_scheduled_reports_subscriptionsInput)
    create?: scheduled_reportsCreateWithoutScheduled_reports_scheduled_reports_subscriptionsInput;

    @Field(() => scheduled_reportsCreateOrConnectWithoutScheduled_reports_scheduled_reports_subscriptionsInput, {nullable:true})
    @Type(() => scheduled_reportsCreateOrConnectWithoutScheduled_reports_scheduled_reports_subscriptionsInput)
    connectOrCreate?: scheduled_reportsCreateOrConnectWithoutScheduled_reports_scheduled_reports_subscriptionsInput;

    @Field(() => scheduled_reportsWhereUniqueInput, {nullable:true})
    @Type(() => scheduled_reportsWhereUniqueInput)
    connect?: scheduled_reportsWhereUniqueInput;
}
