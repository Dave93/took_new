import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedulesWhereInput } from '../work-schedules/work-schedules-where.input';
import { Type } from 'class-transformer';
import { work_schedulesOrderByWithRelationInput } from '../work-schedules/work-schedules-order-by-with-relation.input';
import { work_schedulesWhereUniqueInput } from '../work-schedules/work-schedules-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateworkSchedulesArgs {

    @Field(() => work_schedulesWhereInput, {nullable:true})
    @Type(() => work_schedulesWhereInput)
    where?: work_schedulesWhereInput;

    @Field(() => [work_schedulesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<work_schedulesOrderByWithRelationInput>;

    @Field(() => work_schedulesWhereUniqueInput, {nullable:true})
    cursor?: work_schedulesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
