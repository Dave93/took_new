import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { timesheetCreateWithoutTimesheet_usersInput } from './timesheet-create-without-timesheet-users.input';
import { Type } from 'class-transformer';
import { timesheetCreateOrConnectWithoutTimesheet_usersInput } from './timesheet-create-or-connect-without-timesheet-users.input';
import { timesheetUpsertWithWhereUniqueWithoutTimesheet_usersInput } from './timesheet-upsert-with-where-unique-without-timesheet-users.input';
import { timesheetCreateManyTimesheet_usersInputEnvelope } from './timesheet-create-many-timesheet-users-input-envelope.input';
import { timesheetWhereUniqueInput } from './timesheet-where-unique.input';
import { timesheetUpdateWithWhereUniqueWithoutTimesheet_usersInput } from './timesheet-update-with-where-unique-without-timesheet-users.input';
import { timesheetUpdateManyWithWhereWithoutTimesheet_usersInput } from './timesheet-update-many-with-where-without-timesheet-users.input';
import { timesheetScalarWhereInput } from './timesheet-scalar-where.input';

@InputType()
export class timesheetUpdateManyWithoutTimesheet_usersNestedInput {

    @Field(() => [timesheetCreateWithoutTimesheet_usersInput], {nullable:true})
    @Type(() => timesheetCreateWithoutTimesheet_usersInput)
    create?: Array<timesheetCreateWithoutTimesheet_usersInput>;

    @Field(() => [timesheetCreateOrConnectWithoutTimesheet_usersInput], {nullable:true})
    @Type(() => timesheetCreateOrConnectWithoutTimesheet_usersInput)
    connectOrCreate?: Array<timesheetCreateOrConnectWithoutTimesheet_usersInput>;

    @Field(() => [timesheetUpsertWithWhereUniqueWithoutTimesheet_usersInput], {nullable:true})
    @Type(() => timesheetUpsertWithWhereUniqueWithoutTimesheet_usersInput)
    upsert?: Array<timesheetUpsertWithWhereUniqueWithoutTimesheet_usersInput>;

    @Field(() => timesheetCreateManyTimesheet_usersInputEnvelope, {nullable:true})
    @Type(() => timesheetCreateManyTimesheet_usersInputEnvelope)
    createMany?: timesheetCreateManyTimesheet_usersInputEnvelope;

    @Field(() => [timesheetWhereUniqueInput], {nullable:true})
    @Type(() => timesheetWhereUniqueInput)
    set?: Array<timesheetWhereUniqueInput>;

    @Field(() => [timesheetWhereUniqueInput], {nullable:true})
    @Type(() => timesheetWhereUniqueInput)
    disconnect?: Array<timesheetWhereUniqueInput>;

    @Field(() => [timesheetWhereUniqueInput], {nullable:true})
    @Type(() => timesheetWhereUniqueInput)
    delete?: Array<timesheetWhereUniqueInput>;

    @Field(() => [timesheetWhereUniqueInput], {nullable:true})
    @Type(() => timesheetWhereUniqueInput)
    connect?: Array<timesheetWhereUniqueInput>;

    @Field(() => [timesheetUpdateWithWhereUniqueWithoutTimesheet_usersInput], {nullable:true})
    @Type(() => timesheetUpdateWithWhereUniqueWithoutTimesheet_usersInput)
    update?: Array<timesheetUpdateWithWhereUniqueWithoutTimesheet_usersInput>;

    @Field(() => [timesheetUpdateManyWithWhereWithoutTimesheet_usersInput], {nullable:true})
    @Type(() => timesheetUpdateManyWithWhereWithoutTimesheet_usersInput)
    updateMany?: Array<timesheetUpdateManyWithWhereWithoutTimesheet_usersInput>;

    @Field(() => [timesheetScalarWhereInput], {nullable:true})
    @Type(() => timesheetScalarWhereInput)
    deleteMany?: Array<timesheetScalarWhereInput>;
}
