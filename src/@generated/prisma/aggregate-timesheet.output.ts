import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TimesheetCountAggregate } from './timesheet-count-aggregate.output';
import { TimesheetMinAggregate } from './timesheet-min-aggregate.output';
import { TimesheetMaxAggregate } from './timesheet-max-aggregate.output';

@ObjectType()
export class AggregateTimesheet {

    @Field(() => TimesheetCountAggregate, {nullable:true})
    _count?: TimesheetCountAggregate;

    @Field(() => TimesheetMinAggregate, {nullable:true})
    _min?: TimesheetMinAggregate;

    @Field(() => TimesheetMaxAggregate, {nullable:true})
    _max?: TimesheetMaxAggregate;
}
