import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdrawWhereInput } from '../manager-withdraw/manager-withdraw-where.input';
import { Type } from 'class-transformer';
import { manager_withdrawOrderByWithAggregationInput } from '../manager-withdraw/manager-withdraw-order-by-with-aggregation.input';
import { Manager_withdrawScalarFieldEnum } from './manager-withdraw-scalar-field.enum';
import { manager_withdrawScalarWhereWithAggregatesInput } from '../manager-withdraw/manager-withdraw-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymanagerWithdrawArgs {

    @Field(() => manager_withdrawWhereInput, {nullable:true})
    @Type(() => manager_withdrawWhereInput)
    where?: manager_withdrawWhereInput;

    @Field(() => [manager_withdrawOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<manager_withdrawOrderByWithAggregationInput>;

    @Field(() => [Manager_withdrawScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Manager_withdrawScalarFieldEnum>;

    @Field(() => manager_withdrawScalarWhereWithAggregatesInput, {nullable:true})
    having?: manager_withdrawScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
