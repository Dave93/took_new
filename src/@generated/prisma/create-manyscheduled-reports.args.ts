import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reportsCreateManyInput } from '../scheduled-reports/scheduled-reports-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyscheduledReportsArgs {

    @Field(() => [scheduled_reportsCreateManyInput], {nullable:false})
    @Type(() => scheduled_reportsCreateManyInput)
    data!: Array<scheduled_reportsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
