import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { timesheetCreateManyTimesheet_usersInput } from './timesheet-create-many-timesheet-users.input';
import { Type } from 'class-transformer';

@InputType()
export class timesheetCreateManyTimesheet_usersInputEnvelope {

    @Field(() => [timesheetCreateManyTimesheet_usersInput], {nullable:false})
    @Type(() => timesheetCreateManyTimesheet_usersInput)
    data!: Array<timesheetCreateManyTimesheet_usersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
