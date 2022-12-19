import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { timesheetWhereUniqueInput } from './timesheet-where-unique.input';
import { Type } from 'class-transformer';
import { timesheetCreateWithoutTimesheet_usersInput } from './timesheet-create-without-timesheet-users.input';

@InputType()
export class timesheetCreateOrConnectWithoutTimesheet_usersInput {

    @Field(() => timesheetWhereUniqueInput, {nullable:false})
    @Type(() => timesheetWhereUniqueInput)
    where!: timesheetWhereUniqueInput;

    @Field(() => timesheetCreateWithoutTimesheet_usersInput, {nullable:false})
    @Type(() => timesheetCreateWithoutTimesheet_usersInput)
    create!: timesheetCreateWithoutTimesheet_usersInput;
}
