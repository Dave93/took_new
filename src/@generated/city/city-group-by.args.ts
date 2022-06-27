import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cityWhereInput } from './city-where.input';
import { Type } from 'class-transformer';
import { cityOrderByWithAggregationInput } from './city-order-by-with-aggregation.input';
import { CityScalarFieldEnum } from '../prisma/city-scalar-field.enum';
import { cityScalarWhereWithAggregatesInput } from './city-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class cityGroupByArgs {

    @Field(() => cityWhereInput, {nullable:true})
    @Type(() => cityWhereInput)
    where?: cityWhereInput;

    @Field(() => [cityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<cityOrderByWithAggregationInput>;

    @Field(() => [CityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CityScalarFieldEnum>;

    @Field(() => cityScalarWhereWithAggregatesInput, {nullable:true})
    having?: cityScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
