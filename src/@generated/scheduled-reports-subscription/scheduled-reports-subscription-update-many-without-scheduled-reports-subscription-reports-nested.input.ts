import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionCreateWithoutScheduled_reports_subscription_reportsInput } from './scheduled-reports-subscription-create-without-scheduled-reports-subscription-reports.input';
import { Type } from 'class-transformer';
import { scheduled_reports_subscriptionCreateOrConnectWithoutScheduled_reports_subscription_reportsInput } from './scheduled-reports-subscription-create-or-connect-without-scheduled-reports-subscription-reports.input';
import { scheduled_reports_subscriptionUpsertWithWhereUniqueWithoutScheduled_reports_subscription_reportsInput } from './scheduled-reports-subscription-upsert-with-where-unique-without-scheduled-reports-subscription-reports.input';
import { scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_reportsInputEnvelope } from './scheduled-reports-subscription-create-many-scheduled-reports-subscription-reports-input-envelope.input';
import { scheduled_reports_subscriptionWhereUniqueInput } from './scheduled-reports-subscription-where-unique.input';
import { scheduled_reports_subscriptionUpdateWithWhereUniqueWithoutScheduled_reports_subscription_reportsInput } from './scheduled-reports-subscription-update-with-where-unique-without-scheduled-reports-subscription-reports.input';
import { scheduled_reports_subscriptionUpdateManyWithWhereWithoutScheduled_reports_subscription_reportsInput } from './scheduled-reports-subscription-update-many-with-where-without-scheduled-reports-subscription-reports.input';
import { scheduled_reports_subscriptionScalarWhereInput } from './scheduled-reports-subscription-scalar-where.input';

@InputType()
export class scheduled_reports_subscriptionUpdateManyWithoutScheduled_reports_subscription_reportsNestedInput {

    @Field(() => [scheduled_reports_subscriptionCreateWithoutScheduled_reports_subscription_reportsInput], {nullable:true})
    @Type(() => scheduled_reports_subscriptionCreateWithoutScheduled_reports_subscription_reportsInput)
    create?: Array<scheduled_reports_subscriptionCreateWithoutScheduled_reports_subscription_reportsInput>;

    @Field(() => [scheduled_reports_subscriptionCreateOrConnectWithoutScheduled_reports_subscription_reportsInput], {nullable:true})
    @Type(() => scheduled_reports_subscriptionCreateOrConnectWithoutScheduled_reports_subscription_reportsInput)
    connectOrCreate?: Array<scheduled_reports_subscriptionCreateOrConnectWithoutScheduled_reports_subscription_reportsInput>;

    @Field(() => [scheduled_reports_subscriptionUpsertWithWhereUniqueWithoutScheduled_reports_subscription_reportsInput], {nullable:true})
    @Type(() => scheduled_reports_subscriptionUpsertWithWhereUniqueWithoutScheduled_reports_subscription_reportsInput)
    upsert?: Array<scheduled_reports_subscriptionUpsertWithWhereUniqueWithoutScheduled_reports_subscription_reportsInput>;

    @Field(() => scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_reportsInputEnvelope, {nullable:true})
    @Type(() => scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_reportsInputEnvelope)
    createMany?: scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_reportsInputEnvelope;

    @Field(() => [scheduled_reports_subscriptionWhereUniqueInput], {nullable:true})
    @Type(() => scheduled_reports_subscriptionWhereUniqueInput)
    set?: Array<scheduled_reports_subscriptionWhereUniqueInput>;

    @Field(() => [scheduled_reports_subscriptionWhereUniqueInput], {nullable:true})
    @Type(() => scheduled_reports_subscriptionWhereUniqueInput)
    disconnect?: Array<scheduled_reports_subscriptionWhereUniqueInput>;

    @Field(() => [scheduled_reports_subscriptionWhereUniqueInput], {nullable:true})
    @Type(() => scheduled_reports_subscriptionWhereUniqueInput)
    delete?: Array<scheduled_reports_subscriptionWhereUniqueInput>;

    @Field(() => [scheduled_reports_subscriptionWhereUniqueInput], {nullable:true})
    @Type(() => scheduled_reports_subscriptionWhereUniqueInput)
    connect?: Array<scheduled_reports_subscriptionWhereUniqueInput>;

    @Field(() => [scheduled_reports_subscriptionUpdateWithWhereUniqueWithoutScheduled_reports_subscription_reportsInput], {nullable:true})
    @Type(() => scheduled_reports_subscriptionUpdateWithWhereUniqueWithoutScheduled_reports_subscription_reportsInput)
    update?: Array<scheduled_reports_subscriptionUpdateWithWhereUniqueWithoutScheduled_reports_subscription_reportsInput>;

    @Field(() => [scheduled_reports_subscriptionUpdateManyWithWhereWithoutScheduled_reports_subscription_reportsInput], {nullable:true})
    @Type(() => scheduled_reports_subscriptionUpdateManyWithWhereWithoutScheduled_reports_subscription_reportsInput)
    updateMany?: Array<scheduled_reports_subscriptionUpdateManyWithWhereWithoutScheduled_reports_subscription_reportsInput>;

    @Field(() => [scheduled_reports_subscriptionScalarWhereInput], {nullable:true})
    @Type(() => scheduled_reports_subscriptionScalarWhereInput)
    deleteMany?: Array<scheduled_reports_subscriptionScalarWhereInput>;
}
