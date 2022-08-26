import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesWhereInput } from '../work-schedules/work-schedules-where.input';

@InputType()
export class Work_schedulesRelationFilter {

    @Field(() => work_schedulesWhereInput, {nullable:true})
    is?: work_schedulesWhereInput;

    @Field(() => work_schedulesWhereInput, {nullable:true})
    isNot?: work_schedulesWhereInput;
}
