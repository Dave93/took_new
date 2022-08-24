import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedulesUpdateInput } from '../work-schedules/work-schedules-update.input';
import { Type } from 'class-transformer';
import { work_schedulesWhereUniqueInput } from '../work-schedules/work-schedules-where-unique.input';

@ArgsType()
export class UpdateOneworkSchedulesArgs {

    @Field(() => work_schedulesUpdateInput, {nullable:false})
    @Type(() => work_schedulesUpdateInput)
    data!: work_schedulesUpdateInput;

    @Field(() => work_schedulesWhereUniqueInput, {nullable:false})
    @Type(() => work_schedulesWhereUniqueInput)
    where!: work_schedulesWhereUniqueInput;
}
