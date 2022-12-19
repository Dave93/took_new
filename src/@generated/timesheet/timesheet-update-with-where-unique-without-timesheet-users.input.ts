import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { timesheetWhereUniqueInput } from './timesheet-where-unique.input';
import { Type } from 'class-transformer';
import { timesheetUpdateWithoutTimesheet_usersInput } from './timesheet-update-without-timesheet-users.input';

@InputType()
export class timesheetUpdateWithWhereUniqueWithoutTimesheet_usersInput {

    @Field(() => timesheetWhereUniqueInput, {nullable:false})
    @Type(() => timesheetWhereUniqueInput)
    where!: timesheetWhereUniqueInput;

    @Field(() => timesheetUpdateWithoutTimesheet_usersInput, {nullable:false})
    @Type(() => timesheetUpdateWithoutTimesheet_usersInput)
    data!: timesheetUpdateWithoutTimesheet_usersInput;
}
