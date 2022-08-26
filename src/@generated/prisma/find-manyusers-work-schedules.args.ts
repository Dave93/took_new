import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_work_schedulesWhereInput } from '../users-work-schedules/users-work-schedules-where.input';
import { Type } from 'class-transformer';
import { users_work_schedulesOrderByWithRelationInput } from '../users-work-schedules/users-work-schedules-order-by-with-relation.input';
import { users_work_schedulesWhereUniqueInput } from '../users-work-schedules/users-work-schedules-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Users_work_schedulesScalarFieldEnum } from './users-work-schedules-scalar-field.enum';

@ArgsType()
export class FindManyusersWorkSchedulesArgs {

    @Field(() => users_work_schedulesWhereInput, {nullable:true})
    @Type(() => users_work_schedulesWhereInput)
    where?: users_work_schedulesWhereInput;

    @Field(() => [users_work_schedulesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<users_work_schedulesOrderByWithRelationInput>;

    @Field(() => users_work_schedulesWhereUniqueInput, {nullable:true})
    cursor?: users_work_schedulesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Users_work_schedulesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Users_work_schedulesScalarFieldEnum>;
}
