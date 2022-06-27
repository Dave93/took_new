import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rolesWhereInput } from './roles-where.input';
import { Type } from 'class-transformer';
import { rolesOrderByWithAggregationInput } from './roles-order-by-with-aggregation.input';
import { RolesScalarFieldEnum } from '../prisma/roles-scalar-field.enum';
import { rolesScalarWhereWithAggregatesInput } from './roles-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class rolesGroupByArgs {

    @Field(() => rolesWhereInput, {nullable:true})
    @Type(() => rolesWhereInput)
    where?: rolesWhereInput;

    @Field(() => [rolesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<rolesOrderByWithAggregationInput>;

    @Field(() => [RolesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RolesScalarFieldEnum>;

    @Field(() => rolesScalarWhereWithAggregatesInput, {nullable:true})
    having?: rolesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
