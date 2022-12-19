import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { timesheetWhereInput } from './timesheet-where.input';
import { Type } from 'class-transformer';
import { timesheetOrderByWithAggregationInput } from './timesheet-order-by-with-aggregation.input';
import { TimesheetScalarFieldEnum } from '../prisma/timesheet-scalar-field.enum';
import { timesheetScalarWhereWithAggregatesInput } from './timesheet-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class timesheetGroupByArgs {

    @Field(() => timesheetWhereInput, {nullable:true})
    @Type(() => timesheetWhereInput)
    where?: timesheetWhereInput;

    @Field(() => [timesheetOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<timesheetOrderByWithAggregationInput>;

    @Field(() => [TimesheetScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TimesheetScalarFieldEnum>;

    @Field(() => timesheetScalarWhereWithAggregatesInput, {nullable:true})
    having?: timesheetScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
