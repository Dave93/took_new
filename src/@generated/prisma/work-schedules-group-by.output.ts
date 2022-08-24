import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Work_schedulesCountAggregate } from './work-schedules-count-aggregate.output';
import { Work_schedulesMinAggregate } from './work-schedules-min-aggregate.output';
import { Work_schedulesMaxAggregate } from './work-schedules-max-aggregate.output';

@ObjectType()
export class Work_schedulesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => [String], {nullable:true})
    days?: Array<string>;

    @Field(() => Date, {nullable:false})
    start_time!: Date | string;

    @Field(() => Date, {nullable:false})
    end_time!: Date | string;

    @Field(() => Date, {nullable:false})
    max_start_time!: Date | string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Work_schedulesCountAggregate, {nullable:true})
    _count?: Work_schedulesCountAggregate;

    @Field(() => Work_schedulesMinAggregate, {nullable:true})
    _min?: Work_schedulesMinAggregate;

    @Field(() => Work_schedulesMaxAggregate, {nullable:true})
    _max?: Work_schedulesMaxAggregate;
}
