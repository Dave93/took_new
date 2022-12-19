import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { brandsWhereInput } from './brands-where.input';
import { Type } from 'class-transformer';
import { brandsOrderByWithAggregationInput } from './brands-order-by-with-aggregation.input';
import { BrandsScalarFieldEnum } from '../prisma/brands-scalar-field.enum';
import { brandsScalarWhereWithAggregatesInput } from './brands-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class brandsGroupByArgs {

    @Field(() => brandsWhereInput, {nullable:true})
    @Type(() => brandsWhereInput)
    where?: brandsWhereInput;

    @Field(() => [brandsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<brandsOrderByWithAggregationInput>;

    @Field(() => [BrandsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BrandsScalarFieldEnum>;

    @Field(() => brandsScalarWhereWithAggregatesInput, {nullable:true})
    having?: brandsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
