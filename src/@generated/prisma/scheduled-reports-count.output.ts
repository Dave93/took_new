import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Scheduled_reportsCount {

    @Field(() => Int, {nullable:false})
    scheduled_reports_scheduled_reports_subscriptions!: number;
}
