import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { timesheetWhereInput } from './timesheet-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManytimesheetArgs {

    @Field(() => timesheetWhereInput, {nullable:true})
    @Type(() => timesheetWhereInput)
    where?: timesheetWhereInput;
}
