import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionsWhereInput } from './permissions-where.input';
import { Type } from 'class-transformer';
import { permissionsOrderByWithAggregationInput } from './permissions-order-by-with-aggregation.input';
import { PermissionsScalarFieldEnum } from '../prisma/permissions-scalar-field.enum';
import { permissionsScalarWhereWithAggregatesInput } from './permissions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class permissionsGroupByArgs {

    @Field(() => permissionsWhereInput, {nullable:true})
    @Type(() => permissionsWhereInput)
    where?: permissionsWhereInput;

    @Field(() => [permissionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<permissionsOrderByWithAggregationInput>;

    @Field(() => [PermissionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PermissionsScalarFieldEnum>;

    @Field(() => permissionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: permissionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
