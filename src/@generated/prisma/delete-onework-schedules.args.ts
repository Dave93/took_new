import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedulesWhereUniqueInput } from '../work-schedules/work-schedules-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneworkSchedulesArgs {

    @Field(() => work_schedulesWhereUniqueInput, {nullable:false})
    @Type(() => work_schedulesWhereUniqueInput)
    where!: work_schedulesWhereUniqueInput;
}
