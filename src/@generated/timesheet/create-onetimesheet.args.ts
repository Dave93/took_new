import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { timesheetCreateInput } from './timesheet-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnetimesheetArgs {

    @Field(() => timesheetCreateInput, {nullable:false})
    @Type(() => timesheetCreateInput)
    data!: timesheetCreateInput;
}
