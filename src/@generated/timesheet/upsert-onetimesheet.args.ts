import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { timesheetWhereUniqueInput } from './timesheet-where-unique.input';
import { Type } from 'class-transformer';
import { timesheetCreateInput } from './timesheet-create.input';
import { timesheetUpdateInput } from './timesheet-update.input';

@ArgsType()
export class UpsertOnetimesheetArgs {

    @Field(() => timesheetWhereUniqueInput, {nullable:false})
    @Type(() => timesheetWhereUniqueInput)
    where!: timesheetWhereUniqueInput;

    @Field(() => timesheetCreateInput, {nullable:false})
    @Type(() => timesheetCreateInput)
    create!: timesheetCreateInput;

    @Field(() => timesheetUpdateInput, {nullable:false})
    @Type(() => timesheetUpdateInput)
    update!: timesheetUpdateInput;
}
