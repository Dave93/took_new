import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reportsUpdateInput } from '../scheduled-reports/scheduled-reports-update.input';
import { Type } from 'class-transformer';
import { scheduled_reportsWhereUniqueInput } from '../scheduled-reports/scheduled-reports-where-unique.input';

@ArgsType()
export class UpdateOnescheduledReportsArgs {

    @Field(() => scheduled_reportsUpdateInput, {nullable:false})
    @Type(() => scheduled_reportsUpdateInput)
    data!: scheduled_reportsUpdateInput;

    @Field(() => scheduled_reportsWhereUniqueInput, {nullable:false})
    @Type(() => scheduled_reportsWhereUniqueInput)
    where!: scheduled_reportsWhereUniqueInput;
}
