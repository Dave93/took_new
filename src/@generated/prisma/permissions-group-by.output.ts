import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionsCountAggregate } from './permissions-count-aggregate.output';
import { PermissionsAvgAggregate } from './permissions-avg-aggregate.output';
import { PermissionsSumAggregate } from './permissions-sum-aggregate.output';
import { PermissionsMinAggregate } from './permissions-min-aggregate.output';
import { PermissionsMaxAggregate } from './permissions-max-aggregate.output';

@ObjectType()
export class PermissionsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => PermissionsCountAggregate, {nullable:true})
    _count?: PermissionsCountAggregate;

    @Field(() => PermissionsAvgAggregate, {nullable:true})
    _avg?: PermissionsAvgAggregate;

    @Field(() => PermissionsSumAggregate, {nullable:true})
    _sum?: PermissionsSumAggregate;

    @Field(() => PermissionsMinAggregate, {nullable:true})
    _min?: PermissionsMinAggregate;

    @Field(() => PermissionsMaxAggregate, {nullable:true})
    _max?: PermissionsMaxAggregate;
}
