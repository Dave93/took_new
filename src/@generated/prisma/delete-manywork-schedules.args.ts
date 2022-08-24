import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedulesWhereInput } from '../work-schedules/work-schedules-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyworkSchedulesArgs {

    @Field(() => work_schedulesWhereInput, {nullable:true})
    @Type(() => work_schedulesWhereInput)
    where?: work_schedulesWhereInput;
}
