import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { system_configsWhereInput } from '../system-configs/system-configs-where.input';
import { Type } from 'class-transformer';
import { system_configsOrderByWithAggregationInput } from '../system-configs/system-configs-order-by-with-aggregation.input';
import { System_configsScalarFieldEnum } from './system-configs-scalar-field.enum';
import { system_configsScalarWhereWithAggregatesInput } from '../system-configs/system-configs-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBysystemConfigsArgs {

    @Field(() => system_configsWhereInput, {nullable:true})
    @Type(() => system_configsWhereInput)
    where?: system_configsWhereInput;

    @Field(() => [system_configsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<system_configsOrderByWithAggregationInput>;

    @Field(() => [System_configsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof System_configsScalarFieldEnum>;

    @Field(() => system_configsScalarWhereWithAggregatesInput, {nullable:true})
    having?: system_configsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
