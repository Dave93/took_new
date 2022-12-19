import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TimesheetCountAggregate } from './timesheet-count-aggregate.output';
import { TimesheetMinAggregate } from './timesheet-min-aggregate.output';
import { TimesheetMaxAggregate } from './timesheet-max-aggregate.output';

@ObjectType()
export class TimesheetGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Boolean, {nullable:false})
    is_late!: boolean;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => TimesheetCountAggregate, {nullable:true})
    _count?: TimesheetCountAggregate;

    @Field(() => TimesheetMinAggregate, {nullable:true})
    _min?: TimesheetMinAggregate;

    @Field(() => TimesheetMaxAggregate, {nullable:true})
    _max?: TimesheetMaxAggregate;
}
