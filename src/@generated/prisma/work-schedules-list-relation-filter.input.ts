import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesWhereInput } from '../work-schedules/work-schedules-where.input';

@InputType()
export class Work_schedulesListRelationFilter {

    @Field(() => work_schedulesWhereInput, {nullable:true})
    every?: work_schedulesWhereInput;

    @Field(() => work_schedulesWhereInput, {nullable:true})
    some?: work_schedulesWhereInput;

    @Field(() => work_schedulesWhereInput, {nullable:true})
    none?: work_schedulesWhereInput;
}
