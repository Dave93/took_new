import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Roles_permissionsCountAggregate } from './roles-permissions-count-aggregate.output';
import { Roles_permissionsAvgAggregate } from './roles-permissions-avg-aggregate.output';
import { Roles_permissionsSumAggregate } from './roles-permissions-sum-aggregate.output';
import { Roles_permissionsMinAggregate } from './roles-permissions-min-aggregate.output';
import { Roles_permissionsMaxAggregate } from './roles-permissions-max-aggregate.output';

@ObjectType()
export class Roles_permissionsGroupBy {

    @Field(() => Int, {nullable:false})
    role_id!: number;

    @Field(() => Int, {nullable:false})
    permission_id!: number;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Roles_permissionsCountAggregate, {nullable:true})
    _count?: Roles_permissionsCountAggregate;

    @Field(() => Roles_permissionsAvgAggregate, {nullable:true})
    _avg?: Roles_permissionsAvgAggregate;

    @Field(() => Roles_permissionsSumAggregate, {nullable:true})
    _sum?: Roles_permissionsSumAggregate;

    @Field(() => Roles_permissionsMinAggregate, {nullable:true})
    _min?: Roles_permissionsMinAggregate;

    @Field(() => Roles_permissionsMaxAggregate, {nullable:true})
    _max?: Roles_permissionsMaxAggregate;
}
