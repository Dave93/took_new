import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { scheduled_reports_subscription } from '../scheduled-reports-subscription/scheduled-reports-subscription.model';
import { Scheduled_reportsCount } from '../prisma/scheduled-reports-count.output';

@ObjectType()
export class scheduled_reports {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    cron!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [scheduled_reports_subscription], {nullable:true})
    scheduled_reports_scheduled_reports_subscriptions?: Array<scheduled_reports_subscription>;

    @Field(() => Scheduled_reportsCount, {nullable:false})
    _count?: Scheduled_reportsCount;
}
