import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsWhereInput } from './migrations-where.input';
import { Type } from 'class-transformer';
import { migrationsOrderByWithAggregationInput } from './migrations-order-by-with-aggregation.input';
import { MigrationsScalarFieldEnum } from '../prisma/migrations-scalar-field.enum';
import { migrationsScalarWhereWithAggregatesInput } from './migrations-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class migrationsGroupByArgs {

    @Field(() => migrationsWhereInput, {nullable:true})
    @Type(() => migrationsWhereInput)
    where?: migrationsWhereInput;

    @Field(() => [migrationsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<migrationsOrderByWithAggregationInput>;

    @Field(() => [MigrationsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MigrationsScalarFieldEnum>;

    @Field(() => migrationsScalarWhereWithAggregatesInput, {nullable:true})
    having?: migrationsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
