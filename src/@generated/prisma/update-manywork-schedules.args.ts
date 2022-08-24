import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedulesUpdateManyMutationInput } from '../work-schedules/work-schedules-update-many-mutation.input';
import { Type } from 'class-transformer';
import { work_schedulesWhereInput } from '../work-schedules/work-schedules-where.input';

@ArgsType()
export class UpdateManyworkSchedulesArgs {

    @Field(() => work_schedulesUpdateManyMutationInput, {nullable:false})
    @Type(() => work_schedulesUpdateManyMutationInput)
    data!: work_schedulesUpdateManyMutationInput;

    @Field(() => work_schedulesWhereInput, {nullable:true})
    @Type(() => work_schedulesWhereInput)
    where?: work_schedulesWhereInput;
}
