import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roles_permissionsWhereInput } from '../roles-permissions/roles-permissions-where.input';
import { Type } from 'class-transformer';
import { roles_permissionsOrderByWithAggregationInput } from '../roles-permissions/roles-permissions-order-by-with-aggregation.input';
import { Roles_permissionsScalarFieldEnum } from './roles-permissions-scalar-field.enum';
import { roles_permissionsScalarWhereWithAggregatesInput } from '../roles-permissions/roles-permissions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByrolesPermissionsArgs {

    @Field(() => roles_permissionsWhereInput, {nullable:true})
    @Type(() => roles_permissionsWhereInput)
    where?: roles_permissionsWhereInput;

    @Field(() => [roles_permissionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<roles_permissionsOrderByWithAggregationInput>;

    @Field(() => [Roles_permissionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Roles_permissionsScalarFieldEnum>;

    @Field(() => roles_permissionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: roles_permissionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
