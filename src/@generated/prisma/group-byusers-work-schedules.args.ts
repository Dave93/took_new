import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_work_schedulesWhereInput } from '../users-work-schedules/users-work-schedules-where.input';
import { Type } from 'class-transformer';
import { users_work_schedulesOrderByWithAggregationInput } from '../users-work-schedules/users-work-schedules-order-by-with-aggregation.input';
import { Users_work_schedulesScalarFieldEnum } from './users-work-schedules-scalar-field.enum';
import { users_work_schedulesScalarWhereWithAggregatesInput } from '../users-work-schedules/users-work-schedules-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByusersWorkSchedulesArgs {

    @Field(() => users_work_schedulesWhereInput, {nullable:true})
    @Type(() => users_work_schedulesWhereInput)
    where?: users_work_schedulesWhereInput;

    @Field(() => [users_work_schedulesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<users_work_schedulesOrderByWithAggregationInput>;

    @Field(() => [Users_work_schedulesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Users_work_schedulesScalarFieldEnum>;

    @Field(() => users_work_schedulesScalarWhereWithAggregatesInput, {nullable:true})
    having?: users_work_schedulesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
