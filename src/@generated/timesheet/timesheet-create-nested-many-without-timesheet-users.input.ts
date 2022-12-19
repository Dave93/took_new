import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { timesheetCreateWithoutTimesheet_usersInput } from './timesheet-create-without-timesheet-users.input';
import { Type } from 'class-transformer';
import { timesheetCreateOrConnectWithoutTimesheet_usersInput } from './timesheet-create-or-connect-without-timesheet-users.input';
import { timesheetCreateManyTimesheet_usersInputEnvelope } from './timesheet-create-many-timesheet-users-input-envelope.input';
import { timesheetWhereUniqueInput } from './timesheet-where-unique.input';

@InputType()
export class timesheetCreateNestedManyWithoutTimesheet_usersInput {

    @Field(() => [timesheetCreateWithoutTimesheet_usersInput], {nullable:true})
    @Type(() => timesheetCreateWithoutTimesheet_usersInput)
    create?: Array<timesheetCreateWithoutTimesheet_usersInput>;

    @Field(() => [timesheetCreateOrConnectWithoutTimesheet_usersInput], {nullable:true})
    @Type(() => timesheetCreateOrConnectWithoutTimesheet_usersInput)
    connectOrCreate?: Array<timesheetCreateOrConnectWithoutTimesheet_usersInput>;

    @Field(() => timesheetCreateManyTimesheet_usersInputEnvelope, {nullable:true})
    @Type(() => timesheetCreateManyTimesheet_usersInputEnvelope)
    createMany?: timesheetCreateManyTimesheet_usersInputEnvelope;

    @Field(() => [timesheetWhereUniqueInput], {nullable:true})
    @Type(() => timesheetWhereUniqueInput)
    connect?: Array<timesheetWhereUniqueInput>;
}
