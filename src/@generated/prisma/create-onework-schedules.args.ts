import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedulesCreateInput } from '../work-schedules/work-schedules-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneworkSchedulesArgs {

    @Field(() => work_schedulesCreateInput, {nullable:false})
    @Type(() => work_schedulesCreateInput)
    data!: work_schedulesCreateInput;
}
