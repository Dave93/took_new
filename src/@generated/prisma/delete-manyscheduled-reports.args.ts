import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reportsWhereInput } from '../scheduled-reports/scheduled-reports-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyscheduledReportsArgs {

    @Field(() => scheduled_reportsWhereInput, {nullable:true})
    @Type(() => scheduled_reportsWhereInput)
    where?: scheduled_reportsWhereInput;
}
