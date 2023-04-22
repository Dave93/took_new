import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { scheduled_reports } from '../scheduled-reports/scheduled-reports.model';
import { users } from '../users/users.model';

@ObjectType()
export class scheduled_reports_subscription {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    report_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => scheduled_reports, {nullable:false})
    scheduled_reports_subscription_reports?: scheduled_reports;

    @Field(() => users, {nullable:false})
    scheduled_reports_subscription_users?: users;
}
