import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Scheduled_reportsCountAggregate } from './scheduled-reports-count-aggregate.output';
import { Scheduled_reportsMinAggregate } from './scheduled-reports-min-aggregate.output';
import { Scheduled_reportsMaxAggregate } from './scheduled-reports-max-aggregate.output';

@ObjectType()
export class Scheduled_reportsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    cron!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Scheduled_reportsCountAggregate, {nullable:true})
    _count?: Scheduled_reportsCountAggregate;

    @Field(() => Scheduled_reportsMinAggregate, {nullable:true})
    _min?: Scheduled_reportsMinAggregate;

    @Field(() => Scheduled_reportsMaxAggregate, {nullable:true})
    _max?: Scheduled_reportsMaxAggregate;
}
