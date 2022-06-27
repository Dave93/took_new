import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_rolesWhereInput } from '../users-roles/users-roles-where.input';
import { Type } from 'class-transformer';
import { users_rolesOrderByWithAggregationInput } from '../users-roles/users-roles-order-by-with-aggregation.input';
import { Users_rolesScalarFieldEnum } from './users-roles-scalar-field.enum';
import { users_rolesScalarWhereWithAggregatesInput } from '../users-roles/users-roles-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByusersRolesArgs {

    @Field(() => users_rolesWhereInput, {nullable:true})
    @Type(() => users_rolesWhereInput)
    where?: users_rolesWhereInput;

    @Field(() => [users_rolesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<users_rolesOrderByWithAggregationInput>;

    @Field(() => [Users_rolesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Users_rolesScalarFieldEnum>;

    @Field(() => users_rolesScalarWhereWithAggregatesInput, {nullable:true})
    having?: users_rolesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
