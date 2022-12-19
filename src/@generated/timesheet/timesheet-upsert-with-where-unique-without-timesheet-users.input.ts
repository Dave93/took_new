import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { timesheetWhereUniqueInput } from './timesheet-where-unique.input';
import { Type } from 'class-transformer';
import { timesheetUpdateWithoutTimesheet_usersInput } from './timesheet-update-without-timesheet-users.input';
import { timesheetCreateWithoutTimesheet_usersInput } from './timesheet-create-without-timesheet-users.input';

@InputType()
export class timesheetUpsertWithWhereUniqueWithoutTimesheet_usersInput {

    @Field(() => timesheetWhereUniqueInput, {nullable:false})
    @Type(() => timesheetWhereUniqueInput)
    where!: timesheetWhereUniqueInput;

    @Field(() => timesheetUpdateWithoutTimesheet_usersInput, {nullable:false})
    @Type(() => timesheetUpdateWithoutTimesheet_usersInput)
    update!: timesheetUpdateWithoutTimesheet_usersInput;

    @Field(() => timesheetCreateWithoutTimesheet_usersInput, {nullable:false})
    @Type(() => timesheetCreateWithoutTimesheet_usersInput)
    create!: timesheetCreateWithoutTimesheet_usersInput;
}
