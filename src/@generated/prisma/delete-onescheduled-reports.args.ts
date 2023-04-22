import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reportsWhereUniqueInput } from '../scheduled-reports/scheduled-reports-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnescheduledReportsArgs {

    @Field(() => scheduled_reportsWhereUniqueInput, {nullable:false})
    @Type(() => scheduled_reportsWhereUniqueInput)
    where!: scheduled_reportsWhereUniqueInput;
}
