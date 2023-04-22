import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reportsWhereUniqueInput } from '../scheduled-reports/scheduled-reports-where-unique.input';
import { Type } from 'class-transformer';
import { scheduled_reportsCreateInput } from '../scheduled-reports/scheduled-reports-create.input';
import { scheduled_reportsUpdateInput } from '../scheduled-reports/scheduled-reports-update.input';

@ArgsType()
export class UpsertOnescheduledReportsArgs {

    @Field(() => scheduled_reportsWhereUniqueInput, {nullable:false})
    @Type(() => scheduled_reportsWhereUniqueInput)
    where!: scheduled_reportsWhereUniqueInput;

    @Field(() => scheduled_reportsCreateInput, {nullable:false})
    @Type(() => scheduled_reportsCreateInput)
    create!: scheduled_reportsCreateInput;

    @Field(() => scheduled_reportsUpdateInput, {nullable:false})
    @Type(() => scheduled_reportsUpdateInput)
    update!: scheduled_reportsUpdateInput;
}
