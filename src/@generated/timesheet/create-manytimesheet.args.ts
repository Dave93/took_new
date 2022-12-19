import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { timesheetCreateManyInput } from './timesheet-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManytimesheetArgs {

    @Field(() => [timesheetCreateManyInput], {nullable:false})
    @Type(() => timesheetCreateManyInput)
    data!: Array<timesheetCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
