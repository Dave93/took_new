import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { postWhereInput } from './post-where.input';
import { Type } from 'class-transformer';
import { postOrderByWithAggregationInput } from './post-order-by-with-aggregation.input';
import { PostScalarFieldEnum } from '../prisma/post-scalar-field.enum';
import { postScalarWhereWithAggregatesInput } from './post-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class postGroupByArgs {

    @Field(() => postWhereInput, {nullable:true})
    @Type(() => postWhereInput)
    where?: postWhereInput;

    @Field(() => [postOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<postOrderByWithAggregationInput>;

    @Field(() => [PostScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PostScalarFieldEnum>;

    @Field(() => postScalarWhereWithAggregatesInput, {nullable:true})
    having?: postScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
