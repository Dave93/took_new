import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { assetsWhereInput } from './assets-where.input';
import { Type } from 'class-transformer';
import { assetsOrderByWithAggregationInput } from './assets-order-by-with-aggregation.input';
import { AssetsScalarFieldEnum } from '../prisma/assets-scalar-field.enum';
import { assetsScalarWhereWithAggregatesInput } from './assets-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class assetsGroupByArgs {

    @Field(() => assetsWhereInput, {nullable:true})
    @Type(() => assetsWhereInput)
    where?: assetsWhereInput;

    @Field(() => [assetsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<assetsOrderByWithAggregationInput>;

    @Field(() => [AssetsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AssetsScalarFieldEnum>;

    @Field(() => assetsScalarWhereWithAggregatesInput, {nullable:true})
    having?: assetsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
