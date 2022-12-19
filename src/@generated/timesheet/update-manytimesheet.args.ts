import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { timesheetUpdateManyMutationInput } from './timesheet-update-many-mutation.input';
import { Type } from 'class-transformer';
import { timesheetWhereInput } from './timesheet-where.input';

@ArgsType()
export class UpdateManytimesheetArgs {

    @Field(() => timesheetUpdateManyMutationInput, {nullable:false})
    @Type(() => timesheetUpdateManyMutationInput)
    data!: timesheetUpdateManyMutationInput;

    @Field(() => timesheetWhereInput, {nullable:true})
    @Type(() => timesheetWhereInput)
    where?: timesheetWhereInput;
}
