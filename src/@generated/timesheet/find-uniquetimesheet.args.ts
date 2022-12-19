import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { timesheetWhereUniqueInput } from './timesheet-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquetimesheetArgs {

    @Field(() => timesheetWhereUniqueInput, {nullable:false})
    @Type(() => timesheetWhereUniqueInput)
    where!: timesheetWhereUniqueInput;
}
