import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { timesheetScalarWhereInput } from './timesheet-scalar-where.input';
import { Type } from 'class-transformer';
import { timesheetUpdateManyMutationInput } from './timesheet-update-many-mutation.input';

@InputType()
export class timesheetUpdateManyWithWhereWithoutTimesheet_usersInput {

    @Field(() => timesheetScalarWhereInput, {nullable:false})
    @Type(() => timesheetScalarWhereInput)
    where!: timesheetScalarWhereInput;

    @Field(() => timesheetUpdateManyMutationInput, {nullable:false})
    @Type(() => timesheetUpdateManyMutationInput)
    data!: timesheetUpdateManyMutationInput;
}
