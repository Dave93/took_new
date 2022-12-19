import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { timesheetUpdateInput } from './timesheet-update.input';
import { Type } from 'class-transformer';
import { timesheetWhereUniqueInput } from './timesheet-where-unique.input';

@ArgsType()
export class UpdateOnetimesheetArgs {

    @Field(() => timesheetUpdateInput, {nullable:false})
    @Type(() => timesheetUpdateInput)
    data!: timesheetUpdateInput;

    @Field(() => timesheetWhereUniqueInput, {nullable:false})
    @Type(() => timesheetWhereUniqueInput)
    where!: timesheetWhereUniqueInput;
}
