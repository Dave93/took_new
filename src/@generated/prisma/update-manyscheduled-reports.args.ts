import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reportsUpdateManyMutationInput } from '../scheduled-reports/scheduled-reports-update-many-mutation.input';
import { Type } from 'class-transformer';
import { scheduled_reportsWhereInput } from '../scheduled-reports/scheduled-reports-where.input';

@ArgsType()
export class UpdateManyscheduledReportsArgs {

    @Field(() => scheduled_reportsUpdateManyMutationInput, {nullable:false})
    @Type(() => scheduled_reportsUpdateManyMutationInput)
    data!: scheduled_reportsUpdateManyMutationInput;

    @Field(() => scheduled_reportsWhereInput, {nullable:true})
    @Type(() => scheduled_reportsWhereInput)
    where?: scheduled_reportsWhereInput;
}
