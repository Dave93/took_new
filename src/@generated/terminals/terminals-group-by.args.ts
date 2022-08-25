import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { terminalsWhereInput } from './terminals-where.input';
import { Type } from 'class-transformer';
import { terminalsOrderByWithAggregationInput } from './terminals-order-by-with-aggregation.input';
import { TerminalsScalarFieldEnum } from '../prisma/terminals-scalar-field.enum';
import { terminalsScalarWhereWithAggregatesInput } from './terminals-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class terminalsGroupByArgs {

    @Field(() => terminalsWhereInput, {nullable:true})
    @Type(() => terminalsWhereInput)
    where?: terminalsWhereInput;

    @Field(() => [terminalsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<terminalsOrderByWithAggregationInput>;

    @Field(() => [TerminalsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TerminalsScalarFieldEnum>;

    @Field(() => terminalsScalarWhereWithAggregatesInput, {nullable:true})
    having?: terminalsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
