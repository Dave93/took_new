import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reportsCreateInput } from '../scheduled-reports/scheduled-reports-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnescheduledReportsArgs {

    @Field(() => scheduled_reportsCreateInput, {nullable:false})
    @Type(() => scheduled_reportsCreateInput)
    data!: scheduled_reportsCreateInput;
}
