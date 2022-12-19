import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { timesheetWhereInput } from '../timesheet/timesheet-where.input';

@InputType()
export class TimesheetListRelationFilter {

    @Field(() => timesheetWhereInput, {nullable:true})
    every?: timesheetWhereInput;

    @Field(() => timesheetWhereInput, {nullable:true})
    some?: timesheetWhereInput;

    @Field(() => timesheetWhereInput, {nullable:true})
    none?: timesheetWhereInput;
}
