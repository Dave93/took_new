import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { post_prop_typesWhereInput } from '../post-prop-types/post-prop-types-where.input';
import { Type } from 'class-transformer';
import { post_prop_typesOrderByWithAggregationInput } from '../post-prop-types/post-prop-types-order-by-with-aggregation.input';
import { Post_prop_typesScalarFieldEnum } from './post-prop-types-scalar-field.enum';
import { post_prop_typesScalarWhereWithAggregatesInput } from '../post-prop-types/post-prop-types-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBypostPropTypesArgs {

    @Field(() => post_prop_typesWhereInput, {nullable:true})
    @Type(() => post_prop_typesWhereInput)
    where?: post_prop_typesWhereInput;

    @Field(() => [post_prop_typesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<post_prop_typesOrderByWithAggregationInput>;

    @Field(() => [Post_prop_typesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Post_prop_typesScalarFieldEnum>;

    @Field(() => post_prop_typesScalarWhereWithAggregatesInput, {nullable:true})
    having?: post_prop_typesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
