import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_permissionsWhereInput } from '../users-permissions/users-permissions-where.input';
import { Type } from 'class-transformer';
import { users_permissionsOrderByWithAggregationInput } from '../users-permissions/users-permissions-order-by-with-aggregation.input';
import { Users_permissionsScalarFieldEnum } from './users-permissions-scalar-field.enum';
import { users_permissionsScalarWhereWithAggregatesInput } from '../users-permissions/users-permissions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByusersPermissionsArgs {

    @Field(() => users_permissionsWhereInput, {nullable:true})
    @Type(() => users_permissionsWhereInput)
    where?: users_permissionsWhereInput;

    @Field(() => [users_permissionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<users_permissionsOrderByWithAggregationInput>;

    @Field(() => [Users_permissionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Users_permissionsScalarFieldEnum>;

    @Field(() => users_permissionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: users_permissionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
