import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customers_commentsWhereInput } from '../customers-comments/customers-comments-where.input';
import { Type } from 'class-transformer';
import { customers_commentsOrderByWithAggregationInput } from '../customers-comments/customers-comments-order-by-with-aggregation.input';
import { Customers_commentsScalarFieldEnum } from './customers-comments-scalar-field.enum';
import { customers_commentsScalarWhereWithAggregatesInput } from '../customers-comments/customers-comments-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBycustomersCommentsArgs {

    @Field(() => customers_commentsWhereInput, {nullable:true})
    @Type(() => customers_commentsWhereInput)
    where?: customers_commentsWhereInput;

    @Field(() => [customers_commentsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<customers_commentsOrderByWithAggregationInput>;

    @Field(() => [Customers_commentsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Customers_commentsScalarFieldEnum>;

    @Field(() => customers_commentsScalarWhereWithAggregatesInput, {nullable:true})
    having?: customers_commentsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
