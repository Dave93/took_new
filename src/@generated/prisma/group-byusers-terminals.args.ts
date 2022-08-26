import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_terminalsWhereInput } from '../users-terminals/users-terminals-where.input';
import { Type } from 'class-transformer';
import { users_terminalsOrderByWithAggregationInput } from '../users-terminals/users-terminals-order-by-with-aggregation.input';
import { Users_terminalsScalarFieldEnum } from './users-terminals-scalar-field.enum';
import { users_terminalsScalarWhereWithAggregatesInput } from '../users-terminals/users-terminals-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByusersTerminalsArgs {

    @Field(() => users_terminalsWhereInput, {nullable:true})
    @Type(() => users_terminalsWhereInput)
    where?: users_terminalsWhereInput;

    @Field(() => [users_terminalsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<users_terminalsOrderByWithAggregationInput>;

    @Field(() => [Users_terminalsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Users_terminalsScalarFieldEnum>;

    @Field(() => users_terminalsScalarWhereWithAggregatesInput, {nullable:true})
    having?: users_terminalsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
