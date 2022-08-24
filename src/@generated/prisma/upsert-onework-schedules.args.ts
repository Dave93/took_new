import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedulesWhereUniqueInput } from '../work-schedules/work-schedules-where-unique.input';
import { Type } from 'class-transformer';
import { work_schedulesCreateInput } from '../work-schedules/work-schedules-create.input';
import { work_schedulesUpdateInput } from '../work-schedules/work-schedules-update.input';

@ArgsType()
export class UpsertOneworkSchedulesArgs {

    @Field(() => work_schedulesWhereUniqueInput, {nullable:false})
    @Type(() => work_schedulesWhereUniqueInput)
    where!: work_schedulesWhereUniqueInput;

    @Field(() => work_schedulesCreateInput, {nullable:false})
    @Type(() => work_schedulesCreateInput)
    create!: work_schedulesCreateInput;

    @Field(() => work_schedulesUpdateInput, {nullable:false})
    @Type(() => work_schedulesUpdateInput)
    update!: work_schedulesUpdateInput;
}
